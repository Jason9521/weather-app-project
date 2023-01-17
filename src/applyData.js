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
let localTime = Intl.DateTimeFormat().resolvedOptions().timeZone

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
    sunriseText.textContent = formatInTimeZone(getSunrise, localTime, 'h:mm a zzz', {locale: enUS})
    sunsetText.textContent = formatInTimeZone(getSunset, localTime, 'h:mm a zzz', {locale: enUS} )
    humidity.textContent = `${Math.round(selectedData.currentConditions.humidity)}%`
    dewPoint.textContent = `${Math.round(selectedData.currentConditions.dew)}°F`
    wind.textContent = `${selectedData.currentConditions.windspeed} mph`
    visibility.textContent = `${selectedData.currentConditions.visibility} miles`
}

function setHourlyFarenheit() {
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
    
    hourOne = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[0].datetime}`)
    hourTwo = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[1].datetime}`)
    hourThree = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[2].datetime}`)
    hourFour = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[3].datetime}`)
    hourFive = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[4].datetime}`)
    hourSix = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[5].datetime}`)
    hourSeven = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[6].datetime}`)
    hourEight = new Date(`${selectedData.days[0].datetime}T${hourArraySliced[7].datetime}`)

    hrTextOne.textContent = formatInTimeZone(hourOne, localTime, 'h:mm a', {locale: enUS})
    hrTextTwo.textContent = formatInTimeZone(hourTwo, localTime, 'h:mm a', {locale: enUS})
    hrTextThree.textContent = formatInTimeZone(hourThree, localTime, 'h:mm a', {locale: enUS})
    hrTextFour.textContent = formatInTimeZone(hourFour, localTime, 'h:mm a', {locale: enUS})
    hrTextFive.textContent = formatInTimeZone(hourFive, localTime, 'h:mm a', {locale: enUS})
    hrTextSix.textContent = formatInTimeZone(hourSix, localTime, 'h:mm a', {locale: enUS})
    hrTextSeven.textContent = formatInTimeZone(hourSeven, localTime, 'h:mm a', {locale: enUS})
    hrTextEight.textContent = formatInTimeZone(hourEight, localTime, 'h:mm a', {locale: enUS})

    hrImgOne.src = setIcon(hourArraySliced[0].icon)
    hrImgTwo.src = setIcon(hourArraySliced[1].icon)
    hrImgThree.src = setIcon(hourArraySliced[2].icon)
    hrImgFour.src = setIcon(hourArraySliced[3].icon)
    hrImgFive.src = setIcon(hourArraySliced[4].icon)
    hrImgSix.src = setIcon(hourArraySliced[5].icon)
    hrImgSeven.src = setIcon(hourArraySliced[6].icon)
    hrImgEight.src = setIcon(hourArraySliced[7].icon)

    hrTempOne.textContent = `${Math.round(hourArraySliced[0].temp)}°F`
    hrTempTwo.textContent = `${Math.round(hourArraySliced[1].temp)}°F`
    hrTempThree.textContent = `${Math.round(hourArraySliced[2].temp)}°F`
    hrTempFour.textContent = `${Math.round(hourArraySliced[3].temp)}°F`
    hrTempFive.textContent = `${Math.round(hourArraySliced[4].temp)}°F`
    hrTempSix.textContent = `${Math.round(hourArraySliced[5].temp)}°F`
    hrTempSeven.textContent = `${Math.round(hourArraySliced[6].temp)}°F`
    hrTempEight.textContent = `${Math.round(hourArraySliced[7].temp)}°F`

    console.log(hourArraySliced)
}

function setIcon(condition) {
    if (condition == 'clear-day') {
        return '/images/sunny.png'
    }
    else if (condition == 'clear-night') {
        return '/images/crescent-moon.png'
    }
    else if (condition == 'partly-cloudy-day') {
        return '/images/cloudy-day.png'
    }
    else if (condition == 'partly-cloudy-night') {
        return '/images/cloudy-night.png'
    }
    else if (condition == 'cloudy') {
        return '/images/clouds.png'
    }
    else if(condition == 'rain') {
        return '/images/raining.png'
    }
    else if (condition == 'snow') {
        return '/images/snowy.png'
    }
}

someTitle.addEventListener('click', function() {
    setDataFarenheit()
    setHourlyFarenheit()
})

// Icon Names (delete when done)