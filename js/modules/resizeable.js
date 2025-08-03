document.querySelectorAll('div[resizeable]').forEach((container) => {
  const target = container.children[0]
  const resizer = document.createElement('div')
  resizer.classList.add(
    ...'w-1 rounded-full bg-gray-400 h-8 cursor-ew-resize ml-2'.split(' ')
  )
  container.appendChild(resizer)

  let initialWidth = 0
  let startX = 0
  let startWidth = 0

  const onMouseMove = (e) => {
    const dx = e.clientX - startX
    const newWidth = Math.max(Math.min(startWidth + dx, initialWidth), 100)
    target.style.width = `${newWidth}px`

    e.stopPropagation()
    e.preventDefault()
  }

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  resizer.addEventListener('mousedown', (e) => {
    startX = e.clientX
    startWidth = target.clientWidth
    if (initialWidth === 0) {
      initialWidth = startWidth
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  })
})
