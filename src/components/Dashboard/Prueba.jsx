import React from 'react'
import { useParams } from 'react-router-dom'

const Prueba = () => {
  const { slug } = useParams()

  return (
        <section className="Prueba">
            <p>Now showing post {slug}</p>
        </section>
  )
}

export default Prueba
