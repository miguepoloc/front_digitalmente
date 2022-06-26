/* borrar si no hay problemas con el helper */
class Scroll {
  constructor (secciones, primeraSeccionId, classActiveArray, navbarId = 'navBar') {
    this.navBar = document.getElementById(navbarId)
    this.primeraSeccion = document.getElementById(primeraSeccionId)
    this.seccionesJson = secciones
    this.seccionesArray = this.getSeccionesArray()
    this.offset = 0
    this.classActiveArray = classActiveArray

    window.addEventListener('scroll', () => { this.eventScroll() })// evento para ejecutar el scroll
  }

  /* cuando se haga scroll las funciones que se ejecutarán serán estas. */
  eventScroll () {
    this.setOffset(window.pageYOffset) // se actualiza el offset y se procede a validar
    this.colorNavBar()
    this.isHover()
  }

  setOffset (offset) {
    this.offset = offset
  }

  getSeccionesArray () {
    const seccionesArray = Object.keys(this.seccionesJson).map((Seccion) => {
      return this.seccionesJson[Seccion]
    })
    return seccionesArray
  }

  updateSeccionesArray () {
    const seccionesArray = Object.keys(this.seccionesJson).map((Seccion) => {
      return this.seccionesJson[Seccion]
    })
    this.seccionesArray = seccionesArray
  }

  /* elimina las clases de un elemento */
  removeClassNameArray (obj) {
    this.classActiveArray.forEach((className) => {
      obj.classList.remove(className)
    })
  }

  /* agrega las clases de un elemento */
  addClassNameArray (obj) {
    this.classActiveArray.forEach((className) => {
      obj.classList.add(className)
    })
  }

  /* funciona para hacer algun efecto en los elementos del nav asociados a las secciones (efecto visual) */
  isHover () {
    this.seccionesArray.forEach(({ id }) => {
      const section = document.getElementById(id)
      const sectionNav = document.getElementById(`Nav-${id}`)

      if (section && sectionNav) {
        const positionSectionTop = section.offsetTop
        const sizeSection = section.offsetHeight
        if (
          this.offset >= positionSectionTop &&
                    this.offset <= positionSectionTop + sizeSection
        ) {
          this.addClassNameArray(sectionNav)
        } else {
          this.removeClassNameArray(sectionNav)
        }
      }
    })
  }

  colorNavBar () {
    // Cambiar el estilo del nav. de transparente a blanco.
    if (this.primeraSeccion && this.navBar) {
      // Get the offset position of the navbar
      const positionSection = this.primeraSeccion.scrollHeight - 20 // el -20 es para ajustar un poco.
      if (this.offset >= positionSection) {
        this.navBar.classList.remove('bg-transparent')
        this.navBar.classList.add('bg-white')
      } else {
        this.navBar.classList.remove('bg-white')
        this.navBar.classList.add('bg-transparent')
      }
    }
  };

  scroll (id) {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView()
    else console.log('No puedo hacer')
  };
}
export default Scroll
