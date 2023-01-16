'use strict'

import { format, parseISO } from "date-fns"
import { formatInTimeZone } from "date-fns-tz"
import { enUS } from "date-fns/locale"
import { selectedData } from "./fetchData"
export { setDataFarenheit }

const someTitle = document.getElementById('someTitle')


const getLocation = document.getElementById('location')
const date = document.getElementById('date')
const tempurature = document.getElementById('tempurature')
const sunriseText = document.getElementById('sunriseText')
const sunsetText = document.getElementById('sunsetText')
const humidity = document.getElementById('humidity')
const dewPoint = document.getElementById('dewPoint')
const wind = document.getElementById('wind')
const visibility = document.getElementById('visibility')

const hrTextOne = document.getElementById('hrTextOne')
const hrTextTwo = document.getElementById('hrTextTwo')
const hrTextThree = document.getElementById('hrTextThree')
const hrTextFour = document.getElementById('hrTextFour')
const hrTextFive = document.getElementById('hrTextFive')
const hrTextSix = document.getElementById('hrTextSix')
const hrTextSeven = document.getElementById('hrTextSeven')
const hrTextEight = document.getElementById('hrTextEight')

const hrImgOne = document.getElementById('hrImgOne')
const hrImgTwo = document.getElementById('hrImgTwo')
const hrImgThree = document.getElementById('hrImgThree')
const hrImgFour = document.getElementById('hrImgFour')
const hrImgFive = document.getElementById('hrImgFive')
const hrImgSix = document.getElementById('hrImgSix')
const hrImgSeven = document.getElementById('hrImgSeven')
const hrImgEight = document.getElementById('hrImgEight')

const hrTempOne = document.getElementById('hrTempOne')
const hrTempTwo = document.getElementById('hrTempTwo')
const hrTempThree = document.getElementById('hrTempThree')
const hrTempFour = document.getElementById('hrTempFour')
const hrTempFive = document.getElementById('hrTempFive')
const hrTempSix = document.getElementById('hrTempSix')
const hrTempSeven = document.getElementById('hrTempSeven')
const hrTempEight = document.getElementById('hrTempEight')

const forecastText = document.getElementById('forecastText')

const dayDateOne = document.getElementById('dayDateOne')
const dayDateTwo = document.getElementById('dayDateTwo')
const dayDateThree = document.getElementById('dayDateThree')
const dayDateFour = document.getElementById('dayDateFour')
const dayDateFive = document.getElementById('dayDateFive')
const dayDateSix = document.getElementById('dayDateSix')
const dayDateSeven = document.getElementById('dayDateSeven')

const dayImgOne = document.getElementById('dayImgOne')
const dayImgTwo = document.getElementById('dayImgTwo')
const dayImgThree = document.getElementById('dayImgThree')
const dayImgFour = document.getElementById('dayImgFour')
const dayImgFive = document.getElementById('dayImgFive')
const dayImgSix = document.getElementById('dayImgSix')
const dayImgSeven = document.getElementById('dayImgSeven')

const forecastOne = document.getElementById('forecastOne')
const forecastTwo = document.getElementById('forecastTwo')
const forecastThree = document.getElementById('forecastThree')
const forecastFour = document.getElementById('forecastFour')
const forecastFive = document.getElementById('forecastFive')
const forecastSix = document.getElementById('forecastSix')
const forecastSeven = document.getElementById('forecastSeven')

const dayRainOne = document.getElementById('dayRainOne')
const dayRainTwo = document.getElementById('dayRainTwo')
const dayRainThree = document.getElementById('dayRainThree')
const dayRainFour = document.getElementById('dayRainFour')
const dayRainFive = document.getElementById('dayRainFive')
const dayRainSix = document.getElementById('dayRainSix')
const dayRainSeven = document.getElementById('dayRainSeven')

let getSunrise
let getSunset
let timeStart
let hourArray
let hourArraySliced

let hourOne
let hourTwo
let hourThree
let hourFour
let hourFive
let hourSix
let hourSeven
let hourEight

function setDataFarenheit() {
    getSunrise = new Date(`${selectedData.days[0].datetime}T${selectedData.currentConditions.sunrise}`)
    getSunset = new Date(`${selectedData.days[0].datetime}T${selectedData.currentConditions.sunset}`)
    timeStart = Number(selectedData.currentConditions.datetime.slice(0,2)) + 1

    // CURRENT FORECAST
    getLocation.textContent = selectedData.address
    date.textContent = format(parseISO(selectedData.days[0].datetime), 'iiii, PPP')
    tempurature.textContent = `${Math.round(selectedData.currentConditions.temp)}°F`
    forecastText.textContent = `${selectedData.currentConditions.conditions}. ${selectedData.description}`
    sunriseText.textContent = formatInTimeZone(getSunrise, selectedData.timezone, 'h:mm a zzz', {locale: enUS})
    sunsetText.textContent = formatInTimeZone(getSunset, selectedData.timezone, 'h:mm a zzz', {locale: enUS} )
    humidity.textContent = `${Math.round(selectedData.currentConditions.humidity)}%`
    dewPoint.textContent = `${Math.round(selectedData.currentConditions.dew)}°F`
    wind.textContent = `${selectedData.currentConditions.windspeed} mph`
    visibility.textContent = `${selectedData.currentConditions.visibility} miles`
    // HOURLY FORECAST

    setHourArray()
    hourOne = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[0].datetime}Z`)
    hrTextOne.textContent = formatInTimeZone(hourOne, selectedData.timezone, 'h:mm a zzz', {locale: enUS})
    // GET THIS TO FETCH THE CORRECT TIME!!!
}

function setHourArray() {
    hourArray = []
    hourArraySliced = []

    let targetOne = selectedData.days[0].hours
    let targetTwo = selectedData.days[1].hours

    targetOne.forEach(hour => {
        hourArray.push(hour)
    })
    targetTwo.forEach(hour => {
        hourArray.push(hour)
    })

    hourArraySliced = hourArray.slice(timeStart, timeStart + 8) 
    console.log(hourArraySliced)   
}

someTitle.addEventListener('click', function() {
    setDataFarenheit()
    setHourArray()
})

