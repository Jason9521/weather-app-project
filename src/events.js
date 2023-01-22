"use strict"

import { getOptions } from "./fetchData"
export {searchBtn, tempToggle}

const searchBtn = document.getElementById('searchBtn')
const tempToggle = document.getElementById('tempToggle')

searchBtn.addEventListener('click', () => {
    getOptions()
})

tempToggle.addEventListener('click', () => {
    if (tempToggle.checked) {
        // Display Celcius Data
    } else {
        // Display Farhenheit Data
    }
})

