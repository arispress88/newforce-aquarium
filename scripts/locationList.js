import { getSites } from "./locations.js"

export const siteList = () => {
    // Invoke the function that you imported from the database module
    const places = getSites()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const singleLocation of places) {

        // Why is there a backtick used for this string?
        htmlString += `<div class="location card">
            <div class="site__name">${singleLocation.place}</div>
            <div class="country__name">${singleLocation.country}</div>
            <div class="site__description">${singleLocation.description}</div>`
    }
    

    return htmlString
}

const places = getSites()