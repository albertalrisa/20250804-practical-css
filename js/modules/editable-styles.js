import { trimStyles } from './trim-styles'

document.querySelectorAll('style[contenteditable]').forEach((style) => {
  style.style.display = 'block'
  style.style.whiteSpace = 'pre'
  style.style.textAlign = 'left'
  style.style.width = '100%'
  style.style.overflow = 'auto'
  style.style.padding = '0.25rem'
  style.style.fontFamily = 'monospace'
  style.style.fontVariantNumeric = 'tabular-nums'
  style.style.outline = 'none'

  let useTab = style.hasAttribute('use-tab') ? true : false
  style.innerHTML = trimStyles(style.innerHTML, {
    tabLength: style.getAttribute('tab-length'),
  })

  style.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      document.execCommand('insertHTML', false, '\n')
    }
  })

  style.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      document.execCommand(
        'insertHTML',
        false,
        useTab ? '\t' : ' '.repeat(tabLength)
      )
    }
  })
})
