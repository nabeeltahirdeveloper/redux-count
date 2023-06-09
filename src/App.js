import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { increase, decrease } from './features/count/CountSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {saveProducts} from "./features/products/ProductSlice"
function App() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  let countValue = useSelector((state)=>state.count.countValue)
  const dispatch = useDispatch()


  const getAllProductsDesc=async ()=>{

    const productData =await axios.get("https://fakestoreapi.com/products?sort=desc")
    console.log(productData)
    dispatch(saveProducts(productData?.data))

  }
  const getAllProductsAsc=async ()=>{

    const productData =await axios.get("https://fakestoreapi.com/products?sort=asc")
    console.log(productData)
    dispatch(saveProducts(productData?.data))

  }


  const uploadProducts =async ()=>{
    // https://fakestoreapi.com/products

    const uploadData = await axios.post("https://fakestoreapi.com/products", {
      title: title,
      price: price,
      description:description,
      image: image,
      category: category
    })
    alert("data uploaded successfully")
  }

  let products = useSelector((state)=>state.proudcts.products)
  console.log(products)
  return (
    <div className="App">
      <button
      onClick={()=>{
        dispatch(increase())
      }}
      >+</button>
      <p>{countValue}</p>
      <button
      onClick={()=>{
        dispatch(decrease())
      }}
      >-</button>


      <div>
        <button onClick={getAllProductsDesc}>get product desc</button>
        <button onClick={getAllProductsAsc}>get product asc</button>
        <ul>
        {
          products?.map((item, index)=>{
            return(
              <li>
                {item?.title}-{item?.price}
              </li>
            )
          })
        }
        </ul>
      </div>


      <hr />


      <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder='title' name="" id="" />
      <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" name="" id="" placeholder='price' />
      <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" name="" id="" placeholder='description' />
      <input value={image} onChange={(e)=>{setImage(e.target.value)}} type="text" name="" id="" placeholder='image' />
      <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" name="" id="" placeholder='category' />
      <button onClick={uploadProducts}>upload</button>
    </div>
  );
}

export default App;
