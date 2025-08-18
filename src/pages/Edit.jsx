import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {13
    const {id}=useParams()
  return (
    <div>{id}Edit</div>
  )
}

export default Edit