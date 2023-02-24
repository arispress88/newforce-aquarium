import { getTips } from "./tips.js"

export const tipList = () => {
    // Invoke the function that you imported from the database module
    const tipss = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const singleTip of tipss) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tip card">
            <div class="tip__name">${singleTip.tip}</div>
           
        </section>
`
    }
    

    return htmlString
}

const tipss = getTips()