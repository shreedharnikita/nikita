import React from 'react'
import { useState } from 'react'
import "./Home.css"
const defaultValue = {
    name: '',
    email: '',
    phone: '',
    password: ''
}
const Home = () => {
    const [user, setUser] = useState(defaultValue);
    const onValueChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        // console.log(user)
    }
    const handaleSubmit = async (p) => {
        p.preventDefault();
  
        const response = await fetch('http://localhost:8080/demo', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(user)
        const data = await response.json();
        console.log(data)
    }
    return (
        <>

    

            <div className="singup_container">
              
                <div className="singup_from_container">
                    <div className="left">
                        <h1> WEL COME TO </h1>
                        <button className="white-btn">MY RESTRO</button>
                    </div>
                    <div className="right">
                        <form action="" className="form_container" return onSubmit={handaleSubmit}  >
                            <h1> create account</h1>
                            <div>
                            <input onChange={(e) => onValueChange(e)} name="name" required placeholder="name" />
                            <span id="hii"></span>
                            </div>
                           
                            <input onChange={(e) => onValueChange(e)} name="email" required placeholder="email"id="pass" />
                            <input onChange={(e) => onValueChange(e)} name="password" required placeholder="password"id="passs" />
                            <input onChange={(e) => onValueChange(e)} name="phone" required maxLength="10" placeholder="phone" />
                           
                           <button className="green-btn" variant="contained" type='submit' onClick={(p) => handaleSubmit(p)}>Registar</button>
                        </form>


                    </div>
                </div>
            </div>
        </> 
    )
}

export default Home