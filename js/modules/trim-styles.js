export const trimStyles = (style, config = { tabLength: 2 }) => {
  let tabLength = Number(config?.tabLength ?? 2)
  if (Number.isNaN(tabLength) || tabLength === 0) {
    tabLength = 2
  }

  const lines = style.split('\n').map((l) => l.trimEnd())
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

  return lines.map((l) => l.substring(start)).join('\n')
}
