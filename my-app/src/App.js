import './App.css';

function App() {
  const fileHandler = (event) => {
    console.log(event)
  }
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
                    <img alt="" src='https://res.cloudinary.com/di01osmzz/image/upload/v1649318682/bx_bxs-image-add_is04eg.png' />
                  </div>
                  <h3 className='resolution'>Resolution 800x800 px</h3>
                </div>
                <div className="button-container">
                  <button className="delete" type='button'>
                    <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1649399143/delete_pp824j.png" className="delete-icon" />
                    Delete
                  </button>
                  <button type='file' data-test-type="primary" data-test="upload-btn" className="browse">
                    <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1649396968/Group_13135_xjem2h.png" className="icon" />
                    Browse
                  </button>

                  

                </div>
              </div>
              <div className="details-box" >
                <h2 className="logo-heading">Add details</h2>
                <input type="text" className='input' placeholder="Customer ID" />
                <input type="text" className='input' placeholder="Customer Name" />              
                <input list="inputs-drop-down" type="text" className="input" placeholder="Country"/>
                <datalist className="input"  id="inputs-drop-down">
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
