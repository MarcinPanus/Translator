import React from 'react'

function Header() {
  return (
    <div className="p-4 text-center bg-light">
      <h1 className="mb-3">Welcome to Translator!</h1>
      <h4 className="mb-3">Select a language, enter text and press</h4>
      <button type="button" className="btn btn-dark px-5 py-2">Translate</button>
    </div>
  )
}

export default Header