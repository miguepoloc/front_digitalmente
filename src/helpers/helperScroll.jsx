/* eslint-disable space-before-function-paren */
class Scroll {
  constructor(secciones, primeraSeccionId, classActiveArray, navbarId = 'navBar') {
    this.navbarId = navbarId
    this.primeraSeccionId = primeraSeccionId
    this.navBar = document.getElementById(navbarId)
    this.primeraSeccion = document.getElementById(primeraSeccionId)
    this.seccionesJson = secciones
    this.seccionesArray = this.getSeccionesArray()
    this.offset = 0
    this.PreviousSection = {}
    this.ActualSection = {}
    this.classActiveArray = classActiveArray
    this.isListenerCreated = false
    window.addEventListener('scroll', () => {
      this.eventScroll()
    })
  }

  /* cuando se haga scroll las funciones que se ejecutarán serán estas. */
  eventScroll() {
    /* La razon de preguntar por si el navbar es null es por
            1) es mejor tener el valor guardado dentro de la clase que buscar a cada rato el id para hacer consultas.
            2) si no se valida entonces esos valores no dejarán de ser nulos. se podría hacer de otras maneras. pero, como en el componente lo lanzo con el use effect, eso facilita las cosas.
        */
    if (!this.navBar) {
      this.navBar = document.getElementById(this.navbarId)
    }
    if (!this.primeraSeccion) {
      this.primeraSeccion = document.getElementById(this.primeraSeccionId)
    }

    this.setOffset(window.pageYOffset) // se actualiza el offset y se procede a validar
    this.colorNavBar()
    this.isHover()
  }

  setOffset(offset) {
    this.offset = offset
  }

  getSeccionesArray() {
    const seccionesArray = Object.keys(this.seccionesJson).map((Seccion) => {
      return this.seccionesJson[Seccion]
    })
    return seccionesArray
  }

  updateSeccionesArray() {
    const seccionesArray = Object.keys(this.seccionesJson).map((Seccion) => {
      return this.seccionesJson[Seccion]
    })
    this.seccionesArray = seccionesArray
  }

  /* elimina las clases de un elemento */
  removeClassNameArray(obj) {
    this.classActiveArray.forEach((className) => {
      obj.classList.remove(className)
    })
  }

  /* elimina las clases de un elemento */
  removeClassNameArrayExcept(_sectionNav) {
    this.seccionesArray.forEach(({ id }) => {
      const sectionNav = document.getElementById(`Nav-${id}`)
      if (sectionNav !== _sectionNav) {
        this.classActiveArray.forEach((className) => {
          sectionNav.classList.remove(className)
        })
      }
    })
  }

  /* agrega las clases de un elemento */
  addClassNameArray(obj) {
    this.classActiveArray.forEach((className) => {
      obj.classList.add(className)
    })
  }

  /* funciona para hacer algun efecto en los elementos del nav asociados a las secciones (efecto visual) */
  isHover() {
    this.seccionesArray.forEach(({ id }) => {
      const section = document.getElementById(id)
      const sectionNav = document.getElementById(`Nav-${id}`)
      if (section && sectionNav && this.navBar) {
        const positionSectionTop = section.offsetTop - this.navBar.offsetHeight
        const sizeSection = section.offsetHeight
        if (
          this.offset >= positionSectionTop &&
          this.offset <= positionSectionTop + sizeSection
        ) {
          this.ActualSection.section = sectionNav
          this.addClassNameArray(sectionNav)
        }
      }
    })
    this.removeClassNameArrayExcept(this.ActualSection.section)
  }

  colorNavBar() {
    // Cambiar el estilo del nav. de transparente a blanco.
    if (this.primeraSeccion && this.navBar) {
      // Get the offset position of the navbar
      const positionSection =
        this.primeraSeccion.offsetHeight - this.navBar.offsetHeight - 20 // el -20 es para ajustar un poco.
      const windowWidth = window.innerWidth

      if (this.offset > positionSection || windowWidth <= 1400) {
        this.navBar.classList.remove('bg-transparent')
        this.navBar.classList.add('bg-white')
      } else {
        this.navBar.classList.remove('bg-white')
        this.navBar.classList.add('bg-transparent')
      }
    } else {
      console.log(this.navBar)
    }
  }

  scroll(id, staticAccess = false, navbarId = 'navBar') {
    const element = document.getElementById(id)
    // Si se accede estaticamente sería conveniente mandar el id del navbar
    // de esa forma se hará bien el scroll.
    if (staticAccess) {
      const navBar = document.getElementById(navbarId)
      if (element && navBar) { window.scrollTo(0, element.offsetTop - navBar.offsetHeight + 5) } else if (element) window.scrollTo(0, element.offsetTop)
      // 75 el tamaño del navbar
      else console.log('No puedo hacer')
    } else {
      if (element && this.navBar) { window.scrollTo(0, element.offsetTop - this.navBar.offsetHeight + 5) } else if (element) window.scrollTo(0, element.offsetTop)
      // 75 el tamaño del navbar
      else console.log('No puedo hacer')
    }
  }
}
export default Scroll
