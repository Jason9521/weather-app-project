"use strict"

import { getOptions } from "./fetchData"
export {searchBtn}

const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', () => {
    getOptions()
})

