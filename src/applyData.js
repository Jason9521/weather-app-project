'use strict'

import { format, parseISO } from "date-fns"
import { formatInTimeZone } from "date-fns-tz"
import { enUS } from "date-fns/locale"
import { selectedDataUS, selectedDataMetric } from "./fetchData"
export { setDataFarenheit }

const someTitle = document.getElementById('someTitle')


const getLocation = document.getElementById('location')
const date = document.getElementById('date')
const tempurature = document.getElementById('tempurature')
const currentImg = document.getElementById('currentImg')
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

// FARENHEIT (US)

function setDataFarenheit() {
    getSunrise = new Date(`${selectedDataUS.days[0].datetime}T${selectedDataUS.currentConditions.sunrise}`)
    getSunset = new Date(`${selectedDataUS.days[0].datetime}T${selectedDataUS.currentConditions.sunset}`)
    timeStart = Number(selectedDataUS.currentConditions.datetime.slice(0,2)) + 1

    getLocation.textContent = selectedDataUS.address
    date.textContent = format(parseISO(selectedDataUS.days[0].datetime), 'iiii, PPP')
    tempurature.textContent = `${Math.round(selectedDataUS.currentConditions.temp)}°F`
    currentImg.src = setIcon(selectedDataUS.currentConditions.icon)
    forecastText.textContent = `${selectedDataUS.currentConditions.conditions}. ${selectedDataUS.description}`
    sunriseText.textContent = formatInTimeZone(getSunrise, localTime, 'h:mm a zzz', {locale: enUS})
    sunsetText.textContent = formatInTimeZone(getSunset, localTime, 'h:mm a zzz', {locale: enUS} )
    humidity.textContent = `${Math.round(selectedDataUS.currentConditions.humidity)}%`
    dewPoint.textContent = `${Math.round(selectedDataUS.currentConditions.dew)}°F`
    wind.textContent = `${selectedDataUS.currentConditions.windspeed} mph`
    visibility.textContent = `${selectedDataUS.currentConditions.visibility} miles`
}

function setHourlyFarenheit() {
    hourArray = []
    hourArraySliced = []

    let targetOne = selectedDataUS.days[0].hours
    let targetTwo = selectedDataUS.days[1].hours

    targetOne.forEach(hour => {
        hourArray.push(hour)
    })
    targetTwo.forEach(hour => {
        hourArray.push(hour)
    })

    hourArraySliced = hourArray.slice(timeStart, timeStart + 8) 
    
    hourOne = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[0].datetime}`)
    hourTwo = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[1].datetime}`)
    hourThree = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[2].datetime}`)
    hourFour = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[3].datetime}`)
    hourFive = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[4].datetime}`)
    hourSix = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[5].datetime}`)
    hourSeven = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[6].datetime}`)
    hourEight = new Date(`${selectedDataUS.days[0].datetime}T${hourArraySliced[7].datetime}`)

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
}

function setDailyFarenheit() {

    dayDateOne.textContent = format(parseISO(selectedDataUS.days[0].datetime), 'iii, MMM d')
    dayDateTwo.textContent = format(parseISO(selectedDataUS.days[1].datetime), 'iii, MMM d')
    dayDateThree.textContent = format(parseISO(selectedDataUS.days[2].datetime), 'iii, MMM d')
    dayDateFour.textContent = format(parseISO(selectedDataUS.days[3].datetime), 'iii, MMM d')
    dayDateFive.textContent = format(parseISO(selectedDataUS.days[4].datetime), 'iii, MMM d')
    dayDateSix.textContent = format(parseISO(selectedDataUS.days[5].datetime), 'iii, MMM d')
    dayDateSeven.textContent = format(parseISO(selectedDataUS.days[6].datetime), 'iii, MMM d')

    dayImgOne.src = setIcon(selectedDataUS.days[0].icon)
    dayImgTwo.src = setIcon(selectedDataUS.days[1].icon)
    dayImgThree.src = setIcon(selectedDataUS.days[2].icon)
    dayImgFour.src = setIcon(selectedDataUS.days[3].icon)
    dayImgFive.src = setIcon(selectedDataUS.days[4].icon)
    dayImgSix.src = setIcon(selectedDataUS.days[5].icon)
    dayImgSeven.src = setIcon(selectedDataUS.days[6].icon)

    forecastOne.textContent = `${Math.round(selectedDataUS.days[0].tempmax)}°F / ${Math.round(selectedDataUS.days[0].tempmin)}°F`
    forecastTwo.textContent = `${Math.round(selectedDataUS.days[1].tempmax)}°F / ${Math.round(selectedDataUS.days[1].tempmin)}°F`
    forecastThree.textContent = `${Math.round(selectedDataUS.days[2].tempmax)}°F / ${Math.round(selectedDataUS.days[2].tempmin)}°F`
    forecastFour.textContent = `${Math.round(selectedDataUS.days[3].tempmax)}°F / ${Math.round(selectedDataUS.days[3].tempmin)}°F`
    forecastFive.textContent = `${Math.round(selectedDataUS.days[4].tempmax)}°F / ${Math.round(selectedDataUS.days[4].tempmin)}°F`
    forecastSix.textContent = `${Math.round(selectedDataUS.days[5].tempmax)}°F / ${Math.round(selectedDataUS.days[5].tempmin)}°F`
    forecastSeven.textContent = `${Math.round(selectedDataUS.days[6].tempmax)}°F / ${Math.round(selectedDataUS.days[6].tempmin)}°F`

    dayRainOne.textContent = `${selectedDataUS.days[0].precipprob}%`
    dayRainTwo.textContent = `${selectedDataUS.days[1].precipprob}%`
    dayRainThree.textContent = `${selectedDataUS.days[2].precipprob}%`
    dayRainFour.textContent = `${selectedDataUS.days[3].precipprob}%`
    dayRainFive.textContent = `${selectedDataUS.days[4].precipprob}%`
    dayRainSix.textContent = `${selectedDataUS.days[5].precipprob}%`
    dayRainSeven.textContent = `${selectedDataUS.days[6].precipprob}%`
}

// CELCIUS (METRIC)

function setDataCelcius() {
    getSunrise = new Date(`${selectedDataUS.days[0].datetime}T${selectedDataMetric.currentConditions.sunrise}`)
    getSunset = new Date(`${selectedDataUS.days[0].datetime}T${selectedDataMetric.currentConditions.sunset}`)
    timeStart = Number(selectedDataUS.currentConditions.datetime.slice(0,2)) + 1

    getLocation.textContent = selectedDataMetric.address
    date.textContent = format(parseISO(selectedDataMetric.days[0].datetime), 'iiii, PPP')
    tempurature.textContent = `${Math.round(selectedDataMetric.currentConditions.temp)}°C`
    currentImg.src = setIcon(selectedDataMetric.currentConditions.icon)
    forecastText.textContent = `${selectedDataMetric.currentConditions.conditions}. ${selectedDataMetric.description}`
    sunriseText.textContent = formatInTimeZone(getSunrise, localTime, 'h:mm a zzz', {locale: enUS})
    sunsetText.textContent = formatInTimeZone(getSunset, localTime, 'h:mm a zzz', {locale: enUS} )
    humidity.textContent = `${Math.round(selectedDataMetric.currentConditions.humidity)}%`
    dewPoint.textContent = `${Math.round(selectedDataMetric.currentConditions.dew)}°C`
    wind.textContent = `${selectedDataMetric.currentConditions.windspeed} km/h`
    visibility.textContent = `${selectedDataMetric.currentConditions.visibility} km`
}

function setHourlyCelcius() {
    hourArray = []
    hourArraySliced = []

    let targetOne = selectedDataMetric.days[0].hours
    let targetTwo = selectedDataMetric.days[1].hours

    targetOne.forEach(hour => {
        hourArray.push(hour)
    })
    targetTwo.forEach(hour => {
        hourArray.push(hour)
    })

    hourArraySliced = hourArray.slice(timeStart, timeStart + 8) 
    
    hourOne = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[0].datetime}`)
    hourTwo = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[1].datetime}`)
    hourThree = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[2].datetime}`)
    hourFour = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[3].datetime}`)
    hourFive = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[4].datetime}`)
    hourSix = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[5].datetime}`)
    hourSeven = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[6].datetime}`)
    hourEight = new Date(`${selectedDataMetric.days[0].datetime}T${hourArraySliced[7].datetime}`)

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

    hrTempOne.textContent = `${Math.round(hourArraySliced[0].temp)}°C`
    hrTempTwo.textContent = `${Math.round(hourArraySliced[1].temp)}°C`
    hrTempThree.textContent = `${Math.round(hourArraySliced[2].temp)}°C`
    hrTempFour.textContent = `${Math.round(hourArraySliced[3].temp)}°C`
    hrTempFive.textContent = `${Math.round(hourArraySliced[4].temp)}°C`
    hrTempSix.textContent = `${Math.round(hourArraySliced[5].temp)}°C`
    hrTempSeven.textContent = `${Math.round(hourArraySliced[6].temp)}°C`
    hrTempEight.textContent = `${Math.round(hourArraySliced[7].temp)}°C`
}

function setDailyCelcius() {

    dayDateOne.textContent = format(parseISO(selectedDataMetric.days[0].datetime), 'iii, MMM d')
    dayDateTwo.textContent = format(parseISO(selectedDataMetric.days[1].datetime), 'iii, MMM d')
    dayDateThree.textContent = format(parseISO(selectedDataMetric.days[2].datetime), 'iii, MMM d')
    dayDateFour.textContent = format(parseISO(selectedDataMetric.days[3].datetime), 'iii, MMM d')
    dayDateFive.textContent = format(parseISO(selectedDataMetric.days[4].datetime), 'iii, MMM d')
    dayDateSix.textContent = format(parseISO(selectedDataMetric.days[5].datetime), 'iii, MMM d')
    dayDateSeven.textContent = format(parseISO(selectedDataMetric.days[6].datetime), 'iii, MMM d')

    dayImgOne.src = setIcon(selectedDataMetric.days[0].icon)
    dayImgTwo.src = setIcon(selectedDataMetric.days[1].icon)
    dayImgThree.src = setIcon(selectedDataMetric.days[2].icon)
    dayImgFour.src = setIcon(selectedDataMetric.days[3].icon)
    dayImgFive.src = setIcon(selectedDataMetric.days[4].icon)
    dayImgSix.src = setIcon(selectedDataMetric.days[5].icon)
    dayImgSeven.src = setIcon(selectedDataMetric.days[6].icon)

    forecastOne.textContent = `${Math.round(selectedDataMetric.days[0].tempmax)}°C / ${Math.round(selectedDataMetric.days[0].tempmin)}°C`
    forecastTwo.textContent = `${Math.round(selectedDataMetric.days[1].tempmax)}°C / ${Math.round(selectedDataMetric.days[1].tempmin)}°C`
    forecastThree.textContent = `${Math.round(selectedDataMetric.days[2].tempmax)}°C / ${Math.round(selectedDataMetric.days[2].tempmin)}°C`
    forecastFour.textContent = `${Math.round(selectedDataMetric.days[3].tempmax)}°C / ${Math.round(selectedDataMetric.days[3].tempmin)}°C`
    forecastFive.textContent = `${Math.round(selectedDataMetric.days[4].tempmax)}°C / ${Math.round(selectedDataMetric.days[4].tempmin)}°C`
    forecastSix.textContent = `${Math.round(selectedDataMetric.days[5].tempmax)}°C / ${Math.round(selectedDataMetric.days[5].tempmin)}°C`
    forecastSeven.textContent = `${Math.round(selectedDataMetric.days[6].tempmax)}°C / ${Math.round(selectedDataMetric.days[6].tempmin)}°C`

    dayRainOne.textContent = `${selectedDataMetric.days[0].precipprob}%`
    dayRainTwo.textContent = `${selectedDataMetric.days[1].precipprob}%`
    dayRainThree.textContent = `${selectedDataMetric.days[2].precipprob}%`
    dayRainFour.textContent = `${selectedDataMetric.days[3].precipprob}%`
    dayRainFive.textContent = `${selectedDataMetric.days[4].precipprob}%`
    dayRainSix.textContent = `${selectedDataMetric.days[5].precipprob}%`
    dayRainSeven.textContent = `${selectedDataMetric.days[6].precipprob}%`
}

// MISCELLANEOUS FUNCTIONS

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
    // setDataFarenheit()
    // setHourlyFarenheit()
    // setDailyFarenheit()

    setDataCelcius()
    setHourlyCelcius()
    setDailyCelcius()
})
