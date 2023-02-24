import { getFish } from './database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}

import { FishList } from './FishList.js'


import { getTips } from './tips.js'

const allTips = getTips()

for (const singleTip of allTips) {
    console.log(singleTip)
}

import { tipList } from './tipList.js'

import { getSites } from './locations.js'

const allSites = getSites()

for (const singleLocation of allSites) {
    console.log(singleLocation)
}

import { siteList } from './locationList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishList")

const parentHTMLElement2 = document.querySelector(".tips")

const parentHTMLElement3 = document.querySelector(".locations")


parentHTMLElement.innerHTML = FishList()
parentHTMLElement2.innerHTML = tipList()
parentHTMLElement3.innerHTML = siteList()