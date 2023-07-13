import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"

export default function Logout() {

  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    setUser({
      loggedIn:false,
      name:'',
      token:'',
      isAdmin:false
    })
    localStorage.setItem('token','')
    localStorage.setItem('name','')
    localStorage.setItem('isAdmin','')
    localStorage.setItem('loggedIn','false')
    console.log(localStorage.getItem('token'),localStorage.getItem('name'),localStorage.getItem('isAdmin'),localStorage.getItem('loggedIn'))
    navigate('/')
  })  
  return <Spinner animation="border" />
}