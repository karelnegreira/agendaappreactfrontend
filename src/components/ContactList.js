

import React from 'react'
import Contact from './Contact'

const ContactList = ({ data, currentPage, getAllContacts }) => {
  return (
    <main className='main'>
        {data?.content?.length === 0 && <div>No Contacts</div>}
        <ul>
        {data?.content?.length > 0 
            && data.content.map(contact => <Contact contact={contact} key={contact.id}/>)}
        </ul>
        
    </main>
  )
}

export default ContactList