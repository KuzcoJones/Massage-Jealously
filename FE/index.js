//VARIABLES//
// const mainBody = document.querySelector('body')
const loginDiv = document.getElementById('login-form')
const guestLoginContainer = document.getElementById('button-container')
const providerLoginContainer = document.getElementById('provider-select-container')
const providerLoginDropdown = document.getElementById('providers-container')
//main (sidebar present but not incl here; visible to guest and provider)
// const mainContainer = document.getElementById('*******')
const welcomeContainer = document.getElementById('welcome-page')
const welcomeInner = document.getElementById('login-success')
// //sidebar (main present but not incl here)
const buttonOuterContainer = document.getElementById('specialty-btn-container')
const buttonGroup = document.getElementById('btn-group')
//submenu
const subMenu = document.getElementById('sub-menu')
//provider main (top container within main)
const providerMainContainer = document.getElementById('profile-container')
//provider inner: bio, img, specialties (top container)
const providerImgContainer = document.getElementById('*****')
const providerBioContainer = document.getElementById('*****')
const providerSpecialtiesContainer = document.getElementById('*****')
//provider details edit + add btns (top container)
let editProviderDetailBtn = document.getElementById('*****')
let addProviderDetailBtn = document.getElementById('*****')
//services main (bottom container within main; contains cards)
let serviceCard = document.getElementById('*****')
const serviceCardsContainer = document.getElementById('*******')
//card edit + add btns
let addServiceBtn = document.getElementById('*****')
let editServiceBtn = document.getElementById('*******')
//provider default
let providerID = 0
buttonOuterContainer.style="display:none;"

//FUNCTIONS//	 
const renderLogin = () => {
	providerMainContainer.style="display:none;"
	loginDiv.style="display:block;"

	
	

	getProviderNames()
}

//----this section for login dropdown, immediately rendered-----//
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


//-------render welcome, then render main with provider; OR render main with welcome, then main with provider???--------------//
// const render main = () => {
//}

const renderWelcome = (welcomeContainer) => {
	

}


//------this section for sidebar----------//
const getSpecialties = () => {
	//fetch all specialties via providers, render in sidebar via li(?) element creation
	fetch('http://localhost:3000/providers')
		.then(resp => resp.json())
		.then(specialtiesData => renderSpecialties(specialtiesData))
}

const renderSpecialties = (specialtiesData) => { 
	specialtiesData.forEach(specialty => renderSpecialty(specialty))
	//with sub-menu of providers?
}

const renderSpecialty = (provider) => {
	const specialtyBtn = document.createElement('button')
	specialtyBtn.class = "btn btn-secondary dropdown-toggle"
	specialtyBtn.innerText = provider.specialty
	buttonGroup.appendChild(specialtyBtn)
}


//----------submenu on sidebar---------//
const getProvidersBySpecialty = () => {
	//don't work on this too much yet -- sub-menu for sidebar**** //
	fetch('http://localhost:3000/providers')
		.then(resp => resp.json())
		.then(providersData => renderProvidersBySpecialty(providersData))
}

const renderProvidersBySpecialty = (providersData) => {
	providersData.forEach(provider => {
		renderProviderBySpecialty(provider)
	})	
}

const renderProviderBySpecialty = (provider) => {
	if (provider.specialty === event.target.innerText) {		
		const subMenuItem = document.createElement('a')
		subMenuItem.class = "dropdown-item"
		subMenuItem.innerText = provider.name
		subMenu.append(subMenuItem)
	}
}
//----------provider details on main, top div--------//
const getProviderDetails = (provider) => {
	provider.id = providerID
	fetch('http://localhost:3000/providers/' + provider.id)
		.then(resp => resp.json())
		.then(provider => renderProviderDetails(provider))
}

const renderProviderDetails = (provider) => {

}
	//renders single providers info
	//if providerID = provider.id, add/edit-ProviderDetailBtn display:block, else display:none

// const editProviderDetails
// 	//edit sections of inner provider div
// 	//patch
const getServices = () => {
	//fetch all
}
const renderServiceCard = (providerID) => {
	//prevent default
	//if provider_id stored on a service matches the id of provider on display (i.e., selected on click event from sidebar)
	//create div and create cards?
	//render service cards assoc with provider
	//create edit/save, conditionally rendered based upon 'admin'
}
const renderServiceCards = () => {

}
// const renderAddNewCardForm
// 	//add new button
// 	//render new card form (separate fn?)
// 	//save new button
// const addServiceCard
// 	//post 
// const editServiceCard
// 	//patch



//EVENT HANDLERS//

const providerLoggedInHandler = () => {
	loginDiv.style="display:none;"
	providerID = event.target.dataset.id
	renderWelcome()
	getSpecialties()
}

const guestLoggedInHandler = () => {
	event.preventDefault()
	if (event.target.tagName === "BUTTON") {
		loginDiv.style="display:none;"
	providerID = parseInt(event.target.dataset.id)
	renderWelcome()
	getSpecialties()	
	}  
}
//specialty (sidebar) handler (point to fetch fn to get providers)
const selectSpecialtyHandler = () => {
	if (event.target.tagName === "BUTTON") {
		getProvidersBySpecialty()
	}
}
//provider (sidebar submenu) handler (point to fetch fn for single provider AND point to another fetch fn for services)
const subMenuSelectionHandler = () => {
	if (event.target.tagname === "A") {

	}
}
//edit provider info handler (points to fetch-get fn on provider)
//save provider info handler (points to fetch-patch fn on provider)
//edit card handler (points to fetch-get fn on services)
//save card handler (points to fetch-patch fn on services)
//add new card form handler (points to renderAddNewCardForm)
//save new card(points to fetch-post fn on services)


//EVENT LISTENERS//
//login buttons click listener (guest AND provider)
guestLoginContainer.addEventListener('click', guestLoggedInHandler)
providerLoginDropdown.addEventListener('submit', providerLoggedInHandler)
//sidebar click listener (specialties)
buttonOuterContainer.addEventListener('click', selectSpecialtyHandler)
//sidebar submenu click listener (providers by specialty), render relevant provider info in top div + relevant services offered in bottom div
subMenu.addEventListener('click', subMenuSelectionHandler)
//listen on edit + save button clicks on top div (provider info)
//listen on edit + save button clicks on *each card* in bottom div (services)
//listen on add + save button clicks on add new card form


//INVOKED FNs//
renderLogin()
//(fetch provider names for login)

getProviderNames()
