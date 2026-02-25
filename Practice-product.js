import { useEffect, useRef, useState } from "react";
import { BrowserRouter, json, Link, Route, Routes } from "react-router-dom";

     //  INGNOIR THIS FILE  this fife is for practicing create .js file
    //  AGAIN PRACTICE INIT
  // this fife is for practicing create .js file
 function PracticeProducts(){
        let[products,setProducts]=useState([]);
        let product=useRef()
      useEffect(()=>{
          fetch("http://localhost:8000/products")
          .then((responce)=>responce.json())
          .then((data)=>{
            console.log(data)
            setProducts(data)
            
            
          })
          .catch((err)=>{
            console.log(err)
          })
      },[])
            function readValue (property,value){
                 product.current[property]=value
                 console.log(product.current)
            }
       function deleteProduct(id){
         fetch("http://localhost:8000/products?id="+id,{
          method:"DELETE",
         })
         .then((responce)=>responce.json())
         .then((message)=>{
          console.log(message)
          let tempProducts=products;
          let eleIndex= tempProducts.findIndex((ele,index)=>{
            return Number(ele.id)=== Number(id)
          })
           tempProducts.splice(eleIndex,1)
           setProducts(tempProducts)
         })
         .catch((err)=>{
          console.log(err)
         })
       }
      function updateProducts(){
        fetch("http://localhost:8000/products?id="+id ,{
          method:"PUT",
          body:JSON.stringify(product.current),
          headers:{
            "Content-Type":"applicatin/json"
          }
          .then((responce)=>responce.json())
          .then((msg)=>{
            console.log(msg)
            let tempProducts=[...products]
            indexToUpdate= tempProducts.find((ele,index)=>{
              return ele.id=== product.current.id
            })
            tempProducts[indexToUpdate]=product.current
            setProducts(tempProducts)
          })
          .catch((err)=>{
            console.log(err)
          })
        })
      }
  return(
    <div className="container">

     <div className="header">
      <h1 className="title">All Products</h1>
      <Link to="/products">
      <button className="btn">Craete Products</button>
      </Link>
     </div>
     <div className="products">
       <table>
        <thead>
          <tr>
            <td>srno</td>
            <td>name</td>
            <td>price</td>
            <td>quantity</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td className="actions">
                   <i className="fa=solid fa-file-pen text-success" onClick={()=>{
                      setProducts(product)
                   }}/>
                   <i className="fa-solid fa-trash-can text-denger"onClick={()=>{
                    deleteProduct(product.id)
                   }}/>
                  </td>
                </tr>
              )
            })          }
        </tbody>
       </table>
     </div>
       
                 
         
       
    </div>
  )
 }
 export default PracticeProducts;

/////////////////////////////practice above code bellow again 


    function PracticeProducts(){

      let[products,setProducts] = useState([])
      let product=useRef()
        fetch("http://localhost:8000/products")
        .then((responce)=>responce.json())
        .then((data)=>{
          console.log(data)
          setProducts(data)
        })
        .catch((err)=>{
          console.log(err)
        })

        function readValue(property,value){
          product.current(property)=value
          console.log(product.current)
        }

        function deleteProduct(id){
          fetch("http://localhost:8000/products?id"=id,{
            method:"DELETE"
          })
          .then((responce)=>responce.json())
          .then((msg)=>{
            let tempProducts=products
            let eleIndex=tempProducts.find((ele,index)=>{
              return Number (ele.id)===id
            })
            tempProducts.splice(eleIndex,1)
             tempProducts(setProducts)
          })
          .catch((err)=>{
            console.log(err)
          })
        }
      return(
        <div className="container">

        </div>
      )
    }
  

  