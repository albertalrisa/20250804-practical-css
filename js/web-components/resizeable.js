import { LitElement, html, css } from 'lit'

export class ResizeableElement extends LitElement {
  static properties = {
    width: { type: Number },
    minWidth: { type: Number, attribute: 'min-width' },
    maxWidth: { type: Number, attribute: 'max-width' },
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
    }

    .resize-container {
      display: flex;
      align-items: center;
      width: var(--resizeable-width, 100%);
    }

    .resize-handle {
      width: 0.25rem;
      height: 2rem;
      border-radius: 9999px;
      background: #9ca3af;
      cursor: ew-resize;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      flex-shrink: 0;
    }

    .content {
      flex: 1 1 auto;
      height: 100%;
      box-sizing: border-box;
    }
  `

  constructor() {
    super()
    this.width = undefined // Don't set a fixed width, let it render naturally first
    this.minWidth = 100
    this.maxWidth = undefined
    this._resizing = false
    this._startX = 0
    this._startWidth = 0
    this._hasInitialized = false // Track if we've computed initial width
  }

  firstUpdated() {
    // If max-width is defined, initialize immediately with that width
    if (typeof this.maxWidth === 'number') {
      this.width = this.maxWidth
      this._hasInitialized = true
    }
    // Otherwise, let it render naturally until first resize
  }

  render() {
    return html`
      <div class="resize-container">
        <div class="content">
          <slot></slot>
        </div>
        <div
          class="resize-handle"
          @mousedown="${this._onResizeStart}"
          title="Resize"
        ></div>
      </div>
    `
  }

  updated(changed) {
    if (this.width !== undefined) {
      this.style.setProperty('--resizeable-width', `${this.width}px`)
    }
  }

  _onResizeStart(e) {
    e.preventDefault()

    // Initialize width on first resize attempt
    if (!this._hasInitialized) {
      const container = this.shadowRoot.querySelector('.resize-container')
      if (container) {
        // Measure the actual rendered width at the moment of first resize
        const naturalWidth = container.offsetWidth || this.width
        this.width = naturalWidth

        // Set maxWidth to initial width if not explicitly set
        if (typeof this.maxWidth !== 'number') {
          this.maxWidth = naturalWidth
        }

        this._hasInitialized = true
      } else {
        // Fallback if container not found
        this.width = this.minWidth ?? 100
        if (typeof this.maxWidth !== 'number') {
          this.maxWidth = 100
        }
        this._hasInitialized = true
      }
    }

    this._resizing = true
    this._startX = e.clientX
    this._startWidth = this.width
    window.addEventListener('mousemove', this._onResizing)
    window.addEventListener('mouseup', this._onResizeEnd)
  }

  _onResizing = (e) => {
    if (!this._resizing) return
    const dx = e.clientX - this._startX
    let newWidth = this._startWidth + dx
    newWidth = Math.max(this.minWidth, newWidth)
    newWidth = Math.min(this.maxWidth, newWidth)
    this.width = newWidth
  }

  _onResizeEnd = () => {
    this._resizing = false
    window.removeEventListener('mousemove', this._onResizing)
    window.removeEventListener('mouseup', this._onResizeEnd)
  }
}

customElements.define('resizeable-element', ResizeableElement)
