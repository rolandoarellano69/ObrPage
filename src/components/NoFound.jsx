import React from 'react'
import { Link } from 'react-router-dom'
function NoFound() {
  return (
    <section className="flex items-center justify-center h-screen bg-white text-gray-900">
    <div className="text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mb-4">No hemos podido encontrar la página que buscabas...</p>
      <Link to="/" className="text-secondary underline hover:text-secondary/60">Volver al inicio</Link>
    </div>
  </section>
  )
}

export default NoFound