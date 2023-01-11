"use strict"

import { getID } from "./fetchData"
export {searchBtn}

const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', () => {
    getID()
})

