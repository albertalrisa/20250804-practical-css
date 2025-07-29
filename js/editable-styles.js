document.querySelectorAll('style[contenteditable]').forEach((style) => {
  style.style.display = 'block'
  style.style.whiteSpace = 'pre'
  style.style.textAlign = 'left'
  style.style.width = '100%'
  style.style.overflow = 'auto'
  style.style.padding = '0.25rem'
  style.style.fontFamily = 'monospace'
  style.style.fontVariantNumeric = 'tabular-nums'

  const lines = style.innerHTML.split('\n').map((l) => l.trimEnd())
  if (lines.length > 0 && lines[0].length === 0) {
    lines.shift()
  }
  if (lines.length > 0 && lines[lines.length - 1].length === 0) {
    lines.pop()
  }
  const start = Math.min(
    ...lines
      .map((l) => l.match(/\s+/)?.[0]?.length)
      .filter((v) => (v ?? null) !== null && !Number.isNaN(v))
  )
  style.innerHTML = lines.map((l) => l.substring(start)).join('\n')

  style.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      document.execCommand('insertHTML', false, '\n')
    }
  })
})
