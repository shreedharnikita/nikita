import React, { useState,useEffect } from 'react'
import form from 'react-bootstrap/form'
import FoodData from './FoodDtata'
import Set from './Set'
import Cards from './Cards'
import Footer from './Footer'
function Search() {



  
const [fdata,setFdata]=useState(FoodData)
// console.log(fdata)

const [copyData,setcopyData]=useState([]);
// console.log(copyData);

const ChangData=(e)=>{
// console.log(e);

const getChangData= e.toLowerCase();

if(getChangData ==""){
    setcopyData(fdata);
}
else{
    let StorData = copyData.filter((ele,k)=>{
        return ele.rname.toLowerCase().match(getChangData);
    });

     setcopyData(StorData);
}


}

const zomatologo = "https://www.projects4mba.com/wp-content/uploads/2020/05/business-model-of-zomato.jpg"  
useEffect(()=>{
setTimeout(()=>{
    setcopyData(FoodData)
},3000)
    
},[])



return (
        <>

            <div className='container d-flex justify-content-between align-items-center'>
                <img src={zomatologo }
                 style={{ width: "8rem", postion: "relative", left: "2%", cursor: "pointer" }}
                  alt="" />
                <h1>MY APP </h1>
            </div>

            <form className='d-flex justify-content-center  align-items-center mt-3' >
                <form.Group className=" mx-2 col-lg-4" controlId="fromBasicEmail">

                    <form.Control type="text"
                    onChange={(e)=>ChangData(e.target.value)}
                    placeholder="Search Products" />

                </form.Group>

                <button className='btn text-light ool-lg-1'
                 style={{ background: "#ed4c57" }}>submit</button>

            </form>

            <section className='iteam-section mt-4 container'>

                <h2 className='px-4' style={{ fontWeight: 400 }}> RESTAURENT IN BENGALURU OPEN NOW</h2>

                <div className='row mt-2 d-flex justify-content-around  align-items-cente '>
                   
                   
                {/* { copyData && copyData.length ? <Cards data={copyData} />:"empty"} */}
                {/* for skeliton */}
                { copyData && copyData.length ? <Cards data={copyData} />:<Set sdata={fdata}/>}
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Search