import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'


const Content = ({items, setItems, HandleCheck, HandleDelete}) => {
  

    





    // const handleNameChange = () => {
    //     const name = ['Habeeb', 'Ademola', 'waliyu']
    //     const int = Math.floor(Math.random() * 3);
    //     setItems(name[int]);
    //   }
    //   const handleClick = () => {
    //     alert("you have clicked it")
    //   }

    //  const handleClick2 = (name) => {
    //   alert( '{name} was clicked' )
    //  }
    //  const handleClick3 = (e) => {
    //   console.log(e.target.innerText )
    //  }
  return (
    <>
      {items.length ? (
          <ul>
            {items.map((item) => (
              <li className='item' key={item.id}>
                <input 
                type="checkbox"
                onChange={() => HandleCheck(item.id)}
                checked={item.checked}
                />


                <label
                style={(item.checked) ? {textDecoration: "line-through"} : null}
                onDoubleClick={() => HandleCheck(item.id)}>{item.item}</label>


                <FaTrashAlt 
                onClick={() => HandleDelete(item.id)}
                role='button' tabIndex='0'/>
                
                
            

              </li>
            ))}
           
          </ul>
      ): (
        <p style={{marginTop : "2rem", color: "red", fontWeight: "bold" }}>Your list is empty</p>
      )}
    </>
  )
};

export default Content
