const locations = {
    sites: [
        {
            place: "Great Barrier Reef",
            country: "Austrailia",
            description: "The Great Barrier Reef is a beautiful place."
        },

        {
            place: "Miami, Florida",
            country: "USA",
            description: "Lebron used to play here."
        },

        {
            place: "St. Kitts and Nevis",
            country: "Carribean",
            description: "Really, anywhere around these islands are a great place to dive."
        }
    ]
}

export const getSites = () => {
    return locations.sites.map(copyOfSingleLocationObject => ({...copyOfSingleLocationObject}))
}