"use strict"

import './style.css'
import cloudySky from './images/cloudy-sky.mp4'
import sunRise from './images/sunrise.png'
import sunSet from './images/sunset.png'
import { getID } from "./fetchData"
import { searchBtn, tempToggle } from "./events"
import { setDataFahrenheit, displayDefault } from "./applyData"

displayDefault()