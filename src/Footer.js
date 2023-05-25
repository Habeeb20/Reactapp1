import React from 'react'

const Footer = ({length}) => {
   const style = {backgroundColor: "red"}
    const today = new Date();
  return (
    <footer style={{marginTop: "22%", backgroundColor: "royalblue", padding
    : "0.2%", color:"white"}}>

      <div className={style}>
        
        <p>{length} List {length === 1 ? "item" : "items"}  </p>
       

      </div>




    </footer>
  )
}

export default Footer
