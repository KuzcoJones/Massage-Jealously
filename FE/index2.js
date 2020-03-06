// Variables
const providersUrl = 'http://localhost:3000/providers'
let providerID = 0;
const loginContainer = document.querySelector('#login-form')
const guestBtn = document.querySelector('#guest-btn')
const welcomePage = document.querySelector('#welcome-page')
const body = document.querySelector('body')
const welcomePageContent = `<div id="welcome-page" >
<div class="container-fluid parent-padding">
    <div class="row ">
      <div class="col-2 ">
      
        <div id= "specialty-btn-container" class="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
       
        </div>
      </div>


      <div class="col-10">
        <div class="row profile-info border">
      
          <div id="welcome-container" class="jumbotron">
            <h1 id='provider-name' style="float:right" class="display-4">
             
              Welcome to Massage Jealousy
            </h1>

            <hr class="my-4">
            <p id="provider-specialties">
                Click on a specialty to find an amazing provider of the service.
            </p>
        
            <a style="display:none;" id= "edit-profile-btn" class="btn btn-primary btn-sm" href="#" role="button">Edit Profile</a>
          </div>
        </div>

          

      </div>
    </div>
  </div>
</div>`



const providerLoginContainer = document.getElementById('provider-select-container')
const providerLoginDropdown = document.getElementById('providers-container')

// Functions 
const renderWelcome = () => {
    console.log(event.target.tagName)

    if (event.target.tagName === 'BUTTON'){
        loginContainer.style.display="none"

    body.innerHTML = welcomePageContent
    renderSpecialtyContainer()
    }

    else if (event.target.tagName === 'OPTION'){
      providerID = parseInt(event.target.dataset.id)  
      body.innerHTML = welcomePageContent
      renderSpecialtyContainer()
    }

    
}

const getProviderNames = () => {
	//fetch all provider data for login scrn
	fetch('http://localhost:3000/providers')
		.then(resp => resp.json())
		.then(providersData => renderProviderNames(providersData))
}

const renderProviderNames = (providersData) => {
	providersData.forEach(provider => renderProviderName(provider))
}

const renderProviderName = (provider) => {
	providerOption = document.createElement('option')
	providerOption.innerHTML = provider.name
	providerOption.dataset.id = provider.id
	providerLoginDropdown.appendChild(providerOption)
}

const renderSpecialtyContainer = () => {
    fetch(providersUrl)
    .then(resp => resp.json())
    .then(providersData => {renderSideBar(providersData)
    console.log(providersData)})
}

const renderSideBar = (providersData) => {
    let specialtyContainer = document.querySelector('#specialty-btn-container') ;
    providersData.forEach(
        provider => {
            specialtyContainer.innerHTML += 
            `<div class="btn-group" role="group">
       
        <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ${provider.specialty}
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a data-id=${provider.id} class="dropdown-item" href="#">${provider.name}</a>
            </div>
          </div>
        </div>`
        }
    )
    specialtyContainer.addEventListener('click', renderLoginSuccess)
}

renderLoginSuccess = () => {
    if (event.target.tagName === "A"){
        // console.log(event.target.dataset.id)
        fetch(`${providersUrl}/${event.target.dataset.id}`)
        .then(resp => resp.json())
        .then(providerInfo => renderProviderProfile(providerInfo))
    }
}

const renderProviderProfile = (providerInfo) => {
    body.innerHTML = `
    <div id="login-success">
    <div class="container-fluid parent-padding">
      <div class="row ">
        <div class="col-2 ">
          <!-- Side Bar below-->
          <div id= "specialty-btn-container" class="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
         <div class="btn-group" role="group">

          <!-- Add Buttons here -->
          <div class="btn-group" role="group">
              <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Massage Specialties
              </button>
              <div id="sub-menu" class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">Provider Name</a>
                <a class="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div id="profile-container" class="col-10" style="display:block;">
          <div class="row profile-info border">
            <div class="jumbotron">
                <img id='provider-image' style="max-height:80%; max-width: 25%;"
                src='${providerInfo.profile_img}';
                
                class="img-fluid" alt="Responsive image">
              <h1 id='provider-name' style="float:right" class="display-4">
                ${providerInfo.name}
              </h1>
              <p id="provider-bio" class="lead">
                <!-- Providers bio -->
                ${providerInfo.bio}
              </p>
              <hr class="my-4">
              <div><p id="provider-specialties">${providerInfo.specialty}
              </p></div>



              <a style="display:none;" id= "edit-profile-btn" class="btn btn-primary btn-sm" href="#" role="button">Edit Profile</a>

            </div>
          </div>

          <div id='service-card container' class="row">
              
            <div id="new-card-form-container" class="card" style="width: 18rem;   display:none;">
              <form action="" method="post">
                <div class="card-body">
                    <label for="formGroupExampleInput">Service Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name of Massage Service" >
                </div>

                <div class="card-body">
                    <label for="new-service-description">Service Description</label>
                    <textarea class="form-control" id="new-service-description" placeholder="Describe Massage Service" ></textarea>
                </div>
                  <button type="submit" class="btn btn-primary">SAVE</button>
              </form>
            </div>


        </div>
        </div>

        

          
          <div id='service-card container' class="row">

          <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
                  <button type="button" class="btn btn-primary">EDIT</button>                  
                  <button type="button" class="btn btn-primary">SAVE</button>
          </div>
        </div>


          

        </div>
        </div>

        
    </div>
</div>`
} 




// EventListeners
loginContainer.addEventListener('click', renderWelcome)


// Invoke Functions
getProviderNames()



