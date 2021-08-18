import React from 'react'

export const Footer = () => {
  const myStyle = {
    background: "antiquewhite",
    padding: "4vh"
  }
  return (


    <footer className="page-footer font-small blue" style={myStyle}>


      <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="https://mdbootstrap.com/">ToDoList.com</a>
      </div>


    </footer>


  )
}
