import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const input = {useRef}

const AddItem = ({newItem, setNewItem, HandleSubmit}) => {
  return (
    <form className='addform' onSubmit={HandleSubmit}>
        <label htmlFor="addItem">AddItem</label>
        <input 
        autoFocus
        ref={input}
        id='addItem'
        type='text'
        placeholder='Add item'
        required 
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        
        />
        <button 
        type='submit'
        aria-label='Add Item'
        onClick={() => input.current.focus()}>
          
            <FaPlus/>
            
        </button>
      
    </form>
  )
}

export default AddItem
