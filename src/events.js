"use strict"

import { getOptions, selectedDataUS, selectedDataMetric, isMetric } from "./fetchData"
import {setDataFahrenheit, setHourlyFahrenheit, setDailyFahrenheit, setDataCelcius, setHourlyCelcius, setDailyCelcius} from "./applyData"
export {searchBtn, tempToggle}

const searchBtn = document.getElementById('searchBtn')
const tempToggle = document.getElementById('tempToggle')

searchBtn.addEventListener('click', () => {
    getOptions()
})

tempToggle.addEventListener('click', () => {
    if (tempToggle.checked) {
        setDataCelcius()
        setHourlyCelcius()
        setDailyCelcius()
    } else {
        setDataFahrenheit()
        setHourlyFahrenheit()
        setDailyFahrenheit()
    }
})