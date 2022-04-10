import React,{useState} from 'react'
import Alert from './Alert'
import axios from 'axios'
const CreateAd=()=>{
    const [productAd,setProductAd]=useState({})
    const [alert,setAlert]=useState({
        show:false,
        text:"",
        type:""
      })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setProductAd({...productAd,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`/api/create`,productAd)
       .then(response=>{
           console.log(response);
          const {message}=response.data;
          setAlert({show:true,type:'success',text:message})
        })
       .catch(err=>{
           console.log(err)
        const {data}=err.response;
        setAlert({show:true,type:'danger',text:data.message})
       })
    }
  return (
    <section className='flex-section'>
    <div className='form-container'>
       <h2 className='heading'>Create Ad for your product</h2> 
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
        <label htmlFor='name'>Product Name</label>
        <input
        value={productAd.name} 
        name="name"
        onChange={handleChange}
        required/>
    </div>
    <div className='form-group'>
        <label htmlFor='description'>Short Description</label>
        <input 
        value={productAd.description}
        name="description"
        onChange={handleChange}
        required
        />
    </div>
    <div className='form-group'>
        <label htmlFor='username'>Vendor Name</label>
        <input 
        value={productAd.username}
        name="username"
        onChange={handleChange}
        required
        />
    </div>
    <div className='form-group'>
        <label htmlFor='phone'>Phone</label>
        <input 
        value={productAd.phone}
        name="phone"
        onChange={handleChange}
        required
        />
    </div>
    <div className='form-group'>
        <label htmlFor='price'>Price</label>
        <input 
        value={productAd.price}
        type='number'
        name="price"
        onChange={handleChange}
        required
        />
    </div>
    <div className='form-group'>
        <label htmlFor='imageUrl'>Product Image URL</label>
        <input 
        value={productAd.imageUrl}
        name="imageUrl"
        onChange={handleChange}
        required
        />
    </div>
    <input type={"submit"} className="btn-submit"/>
    </form>
    </div>
    {
        alert.show?<Alert 
        type={alert.type} 
        text={alert.text}
        setAlert={setAlert}
        />:null
    }

    </section>
  )

}
export default CreateAd