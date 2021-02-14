import React from 'react'
import { Link } from "react-router-dom"

function navbar() {

  const ul = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#333"
  }

  const li = {
    float: "left"
  }

  const a = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none"
  }


  return (
    <div>
      <nav>
        <ul style={ul}>
          <li style={li}>
            <Link style={a} to="/unit">Unit Form</Link>
          </li>
          <li style={li}>
            <Link style={a} to="/units">Unit List</Link>
          </li>
          <li style={li}>
            <Link style={a} to="/item">Item Form</Link>
          </li>
          <li style={li}>
            <Link style={a} to="/items">Item List</Link>
          </li>
          <li style={li}>
            <Link style={a} to="/stocks">Stock List</Link>
          </li>
          <li style={li}>
            <Link style={a} to="/stock">stock form</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
