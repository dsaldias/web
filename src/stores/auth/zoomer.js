export const init_zoomer = () => {
  setTimeout(() => {
    zoom()
  }, 450)
}

const zoom = () => {
  const zoomer = document.querySelector('.zoomer')
  const img = zoomer.querySelector('img')

  let zoomLevel = 1.5 // Nivel de zoom inicial
  const zoomStep = 0.5 // Cantidad de cambio por cada paso de la rueda del mouse

  zoomer.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = zoomer.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    const xPercent = (x / width) * 100
    const yPercent = (y / height) * 100

    img.style.transformOrigin = `${xPercent}% ${yPercent}%`
    img.style.transform = `scale(${zoomLevel})`
  })

  zoomer.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)'
  })

  zoomer.addEventListener('wheel', (e) => {
    e.preventDefault() // Evita el desplazamiento de la página

    if (e.deltaY < 0) {
      zoomLevel = Math.min(zoomLevel + zoomStep, 5) // Máximo nivel de zoom
    } else {
      zoomLevel = Math.max(zoomLevel - zoomStep, 1) // Mínimo nivel de zoom
    }

    img.style.transform = `scale(${zoomLevel})`
  })
}
