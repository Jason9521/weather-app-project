"use strict"

// import{}

export {executeSearch, getID}

const searchBar = document.getElementById('searchBar')
const searchModal = document.getElementById('searchModal')

async function executeSearch() {

    let response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=4593142&appid=b553abef78d7459ae8fd13980b3e30b0', {mode: 'cors'})
    let fetchedData = await response.json()
    console.log(fetchedData)
}

async function getID() {
    
    try {
        let response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=b553abef78d7459ae8fd13980b3e30b0`, {mode: 'cors'})
        let fetchedData = await response.json()

        let optionOne = `${fetchedData[0].name}, ${fetchedData[0].state}, ${fetchedData[0].country}`;
        let optionTwo = `${fetchedData[1].name}, ${fetchedData[1].state}, ${fetchedData[1].country}`;
        let optionThree = `${fetchedData[2].name}, ${fetchedData[2].state}, ${fetchedData[2].country}`;
        let optionFour = `${fetchedData[3].name}, ${fetchedData[3].state}, ${fetchedData[3].country}`;
        let optionFive = `${fetchedData[4].name}, ${fetchedData[4].state}, ${fetchedData[4].country}`;

        createModalHeader()
        createOption(optionOne)
        createOption(optionTwo)
        createOption(optionThree)
        createOption(optionFour)
        createOption(optionFive)
        createModalClose()
        searchModal.showModal()
    } catch {
        createModalErr()
        createModalClose()
        searchModal.showModal()
    }
}

function createOption(option) {
    let optionBtn = document.createElement('button')
    optionBtn.classList.add('option-button')
    optionBtn.textContent = option
    searchModal.appendChild(optionBtn)
}

function createModalHeader() {
    let modalHeader = document.createElement('h1')
    modalHeader.textContent = "We're you searching for.."
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









