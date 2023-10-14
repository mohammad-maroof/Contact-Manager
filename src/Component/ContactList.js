import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList(props) {
  const{contact,removeContact}=props
  console.log(contact)
  const contactList = contact.map((val,i)=>{
    return(
      <div className='contacts'key={i}>
        <div >{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
      </div>
    )
  })
  return (
    <>
    <div  className='ContactsHeader'>ContactList</div>
    <div>{contactList}</div>
    </>
  )
}

export default ContactList