"use strict"

// import{}

export {executeSearch, getOptions, selectedData}

const searchBar = document.getElementById('searchBar')
const searchModal = document.getElementById('searchModal')

let optionOne
let optionTwo
let optionThree
let optionFour
let optionFive
let selectedData

// ASYNC FUNCTIONS

async function executeSearch() {

    let response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=4593142&appid=b553abef78d7459ae8fd13980b3e30b0', {mode: 'cors'})
    let fetchedData = await response.json()
    console.log(fetchedData)
}

async function getOptions() {
    
    try {
        let response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=b553abef78d7459ae8fd13980b3e30b0`, {mode: 'cors'})
        let fetchedData = await response.json()
        console.log(fetchedData)

        optionOne = [`${fetchedData[0].name}, ${fetchedData[0].state}, ${fetchedData[0].country}`, fetchedData[0].lat, fetchedData[0].lon ];
        optionTwo = [`${fetchedData[1].name}, ${fetchedData[1].state}, ${fetchedData[1].country}`, fetchedData[1].lat, fetchedData[1].lon];
        optionThree = [`${fetchedData[2].name}, ${fetchedData[2].state}, ${fetchedData[2].country}`, fetchedData[2].lat, fetchedData[2].lon ];
        optionFour = [`${fetchedData[3].name}, ${fetchedData[3].state}, ${fetchedData[3].country}`, fetchedData[3].lat, fetchedData[3].lon ];
        optionFive = [`${fetchedData[4].name}, ${fetchedData[4].state}, ${fetchedData[4].country}`, fetchedData[4].lat, fetchedData[4].lon ];

        createModalHeader()
        createOption(optionOne[0], optionOne[1], optionOne[2])
        createOption(optionTwo[0], optionTwo[1], optionTwo[2])
        createOption(optionThree[0], optionThree[1], optionThree[2])
        createOption(optionFour[0], optionFour[1], optionFour[2])
        createOption(optionFive[0], optionFive[1], optionFive[2])
        createModalClose()
        searchModal.showModal()
    } catch {
        createModalErr()
        createModalClose()
        searchModal.showModal()
    }
}

async function fetchToday(location) {
    
}

async function fetchHourly(lat, lon) {
    let response = await fetch(``)
}

async function fetchDaily(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=J8KPLV9423DYLDLRH3MVXGR3S`, {mode: 'cors'})
    let fetchedData = await response.json()
    selectedData = fetchedData
    console.log(selectedData)
}



// FUNCTIONS

function createOption(option) {
    let optionBtn = document.createElement('button')
    optionBtn.classList.add('option-button')
    optionBtn.textContent = option
    optionBtn.onclick = () => {
        fetchDaily(option)
    }
    searchModal.appendChild(optionBtn)
}

function createModalHeader() {
    let modalHeader = document.createElement('h1')
    modalHeader.textContent = "Are you searching for.."
    searchModal.appendChild(modalHeader)
}

function createModalErr() {
    let modalErr = document.createElement('h2')
    modalErr.classList.add('modal-error')
    modalErr.textContent = "We could not find your search. Please try again."
    searchModal.appendChild(modalErr)
}

function createModalClose() {
    let closeBtn = document.createElement('h4')
    closeBtn.classList.add('close-button')
    closeBtn.onclick = () => {
        searchModal.replaceChildren()
        searchModal.close()
    }
    closeBtn.textContent = 'Close & Try Again'
    searchModal.appendChild(closeBtn)
}

function resetOptions() {
    optionOne = ''
    optionTwo = ''
    optionThree = ''
    optionFour = ''
    optionFive = ''
}









