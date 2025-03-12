
import React from 'react'

const Contact = () => {
  return (
    <a className='contact_item'>
        <div className="contact_header">
            <div className="contact_image">
                <img src='' alt='' />
            </div>
            <div className='contact_details'>
                <p className='contact_name'>Karel Negreira</p>
                <p className='contact_title'>unknown</p>
            </div>
            <div className='contact_body'>
                <p><i className='bi bi-envelope'></i>email</p>
                <p><i className='bi bi-geo'></i>address</p>
                <p><i className='bi bi-telephone'></i>phone</p>
            </div>
        </div>
    </a>
  )
}

export default Contact
