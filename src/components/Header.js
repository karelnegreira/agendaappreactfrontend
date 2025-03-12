import React from 'react'

const Header = ({toogleModal, nbrOfContacts}) => {
  return (
    <header className="header">
        <div className="container">
            <h3>Contact List ({nbrOfContacts})</h3>
            <button onClick={toogleModal(true)} className='btn'><i className='bi bi-plus-quare'></i>Add new Contact</button>
        </div>
    </header>
  )
}

export default Header