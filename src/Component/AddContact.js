import React, { useState } from 'react'

function AddContact({addContact}) {
    const[contactData, setcontactData]= useState({name:"", email:""});
    const handleChange=(e)=>{
        if(e.target.name==='name'){
            setcontactData({...contactData,name: e.target.value})
        }
        else{
    
            setcontactData({...contactData,email:e.target.value})
        }
    }
    const handleAdd=()=>{
      if(contactData.name === ""|| contactData.email===""){
        alert("please fill all the details")
        return
      }
      addContact(contactData)
      setcontactData({name:"", email:""})
    }

  return (
    <div className='formHeader'>
        <div className='add-contact'>
            Add Contact
            </div>
            <form>
               <label>Name:</label><br/>
               <input type='text' placeholder='Enter Name' name='name' value={contactData.name}
               onChange={handleChange}/><br/>
               <label>Email:</label><br/>
               <input type='text' placeholder='Enter Email' name='Email' value={contactData.email}
               onChange={handleChange}/>
            </form>
            <button className='btn' onClick={handleAdd}> Add Contact </button>
        </div>
    
  )
}

export default AddContact