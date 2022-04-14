import React, { useState } from "react";
import './App.css';
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'





function App() {
  let customerDetails = 
  {
    id: "",
    name: "",
    country: "",
    logo_url: "",
  }
  const [url, setImage_url] = useState('')
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState([])

  const getCustomerId = (e) =>{  
    customerDetails.id = e.target.value  
  }
  const getCustomerName = (e) =>{
    customerDetails.name = e.target.value
  }
  const getCustomerCountry = (e) =>{
    customerDetails.country = e.target.value
  }
  
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'vinaykumar')
    data.append('cloud_name', 'di01osmzz');
    setLoading(true)
    var imgurl = 'https://api.cloudinary.com/v1_1/di01osmzz/image/upload';
    const config = {
      method: "POST",
      body: data 
  };
    const res = await fetch(imgurl, config)
    const file = await res.json()
    setImage_url(file.url)
    setLoading(false)
    customerDetails.logo_url = file.url

   
    
    setDetails([...details, customerDetails])
    
  }
  const DeleteLogo = () =>{
    setImage_url(null)
  }
  console.log(details)
  return (
    <div className="main-container">
      <div className="App">
        <h1 className="main-heading">Portal Configuration</h1>
        <p className='content'>
          We're absolutely thrilled to have you in on board and can't wait to <br/> see you monitor your storage resources seamlessly
        </p>       
        <div className="inner-container">
          <h2 className="organization-heading">Organization information</h2>
          <div className="box-order">
              <div className="profile-box" >
                <div className="profile-container">
                  <h2 className="logo-heading">Add logo</h2>
                  <div className="profile" >
                    {url ? (
                      loading ? (
                        <Loader type="TailSpin" color="#00BFFF" height={50} width={60} />
                         ) : ( <img src={url} alt="" className="profile" />)
                    ) : (
                      <img alt="" src='https://res.cloudinary.com/di01osmzz/image/upload/v1649318682/bx_bxs-image-add_is04eg.png' />
                    )}                                  
                  </div>
                  <h3 className='resolution'>Resolution 800x800 px</h3>
                </div>
                <div className="button-container">                              
                  <div>
                    <button className="delete" type='button' onClick={DeleteLogo} >
                      <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1649399143/delete_pp824j.png" className="delete-icon" />
                      Delete
                    </button>                   
                    <input
                      id="logo"
                      type="file"
                      onChange={uploadImage}
                      style={{display: 'none'}}
                    />                   
                    <button type='file' className="browse">
                      <label htmlFor="logo" >
                        <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1649396968/Group_13135_xjem2h.png" className="icon" />
                        Browse
                      </label>
                    </button>                    
                  </div>
                </div>
              </div>
              <div className="details-box" >
                <h2 className="logo-heading">Add details</h2>
                <input type="text" className='input' placeholder="Customer ID" onChange={getCustomerId} />
                <input type="text" className='input' placeholder="Customer Name" onChange={getCustomerName} />              
                <input list="countries-drop-down" type="text" className="input" placeholder="Country" onChange={getCustomerCountry} />
                <datalist className="input"  id="countries-drop-down">
                  <option value="America" >America</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                </datalist>                
              </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
