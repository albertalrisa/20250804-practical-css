import { createHighlighter } from 'shiki'
import { trimStyles } from './trim-styles'

document.addEventListener('DOMContentLoaded', async () => {
  const theme = 'vitesse-dark'

  const styleEditors = document.querySelectorAll('textarea[style-rel]')
  const highlighter = await createHighlighter({
    themes: [theme],
    langs: ['css'],
  })
  const loadedTheme = highlighter.getTheme(theme)

  const styleOverrides = document.createElement('style')
  styleOverrides.innerHTML = `
    .reveal .style-editor .output pre {
      width: 100%;
      margin: 0;
    }

    .reveal .style-editor .output pre code {
      max-height: initial;
    }

    .style-editor {
      position: relative;
      min-height: 1lh;
      height: 100%;
      color: var(--color, inherit);
      background: var(--background, inherit);
    }

    .style-editor .output {
      overflow: hidden;
      pointer-events: none;
      height: 100%;
      position: absolute;
      inset: 0;
    }

    .style-editor .input {
      background: transparent;
      z-index: 10;
      color: transparent;
      position: absolute;
      inset: 0;
      padding: 5px;
      outline: none;
      caret-color: white;
      resize: none;
    }
  `
  document.head.appendChild(styleOverrides)

  styleEditors.forEach((el) => {
    const rel = el.getAttribute('style-rel')
    const styleTag = document.querySelector(`style#${rel}`)

    el.innerHTML = trimStyles(el.innerHTML)

    const parent = el.parentNode

    const editor = document.createElement('div')
    editor.classList.add('style-editor')
    editor.style.setProperty('--color', loadedTheme.fg)
    editor.style.setProperty('--background', loadedTheme.bg)
    parent.replaceChild(editor, el)

    const output = document.createElement('div')
    output.classList.add('output')
    editor.appendChild(output)

    const format = () => {
      const code = el.innerHTML
      const formatted = highlighter.codeToHtml(code, {
        lang: 'css',
        theme: 'vitesse-dark',
      })
      output.innerHTML = formatted
    }
    format()

    el.classList.add('input')
    el.setAttribute('autocomplete', 'off')
    el.setAttribute('autocapitalize', 'off')
    el.setAttribute('autocorrect', 'off')
    el.setAttribute('spellcheck', 'off')
    el.id = el.name = `edit-${rel}`

    const cloneStyles = [
      'fontFamily',
      'fontSize',
      'textAlign',
      'wordWrap',
      'lineHeight',
    ]
    const shikiOutput = output.querySelector('.shiki')
    if (shikiOutput !== null) {
      shikiOutput.style.height = '100%'
      cloneStyles.forEach((attr) => {
        el.style[attr] = getComputedStyle(shikiOutput)[attr]
      })
    }

    editor.appendChild(el)
    el.addEventListener('input', (e) => {
      styleTag.innerHTML = e.target.value
      el.innerHTML = e.target.value
      format()
    })

    el.addEventListener('scroll', () => {
      output.scrollTop = el.scrollTop
      output.scrollLeft = el.scrollLeft
    })

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault()
        var start = el.selectionStart
        var end = el.selectionEnd
        el.value = el.value.substring(0, start) + '  ' + el.value.substring(end)
        el.selectionStart = el.selectionEnd = start + 2
        el.dispatchEvent(new Event('input', { bubbles: true }))
      }
    })
  })
})
