import React from 'react'

export default function Tvc(props) {
  return (
    <div>
      <h1>Welcome to, ReactJs</h1>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Company: {props.company}</p>
    </div>
  )
}
