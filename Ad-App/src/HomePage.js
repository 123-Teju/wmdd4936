import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Alert from './Alert';
const HomePage = props => {
    const [alert,setAlert]=useState({
        show:false,
        text:"",
        type:""
      })
    const [ads,setAds]=useState([]);
    useEffect(()=>{
         getAds();
    },[])
    const getAds=()=>{
        axios.get(`/api/get-ads/all`)
        .then(({data})=>{
            console.log(data);
            setAds(data.adsData);
        })
        .catch()
    }
    const handleRemoveAd=(adId)=>{
        axios.delete(`/api/delete/${adId}`)
        .then(({data})=>{
            setAlert({show:true,type:'success',text:data.message})
            getAds();
        })
        .catch()
    }
  return (
    <>
    <section className='hero-bg'>
        <div className='hero-content'>
        <h1>Biggest platform to advertise you products!</h1>
        <Link to={'/create-ad'}>Create Ad</Link>
        </div>
    </section>
    <section className='ad-cards'>
        <div className='cards-row'>
            {
                ads.length!==0?
                ads.map(ad=>{
                    return(
                <div key={ad._id} className='card'>
                <button 
                className='btn-delete' 
                onClick={()=>handleRemoveAd(ad._id)}>Remove ad</button>
                <img src={ad.image_url} alt='product'/>
                <h3>{ad.name}</h3>
                <p>{ad.description}</p>
                <span>Posted by: <em>{ad.username}</em></span>
                <span>Contact: <em>{ad.phone}</em></span>
                <span className='priceTag'>{ad.price}$</span>
                </div>
                    )
                }):<h1 className='heading'>No Ads to show</h1>
            }
        </div>
        {
        alert.show?<Alert 
        type={alert.type} 
        text={alert.text}
        setAlert={setAlert}
        />:null
    }
    </section>
    </>
  )


}

export default HomePage;