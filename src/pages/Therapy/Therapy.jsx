import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Therapy() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/login")
    },[]);
    

  return (
    <div>Therapy</div>
  )
}
