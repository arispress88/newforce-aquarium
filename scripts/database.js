/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sunfish2.jpg/800px-Sunfish2.jpg",
            species: "Ocean Sunfish",
            name: "Charles",
            food: "crustaceans",
            size: "1.8m",
            location: "Monterey Bay, California, USA"
        },
        
        {
            imgUrl: "https://optimise2.assets-servd.host/maniacal-finch/production/animals/stingray_meibaum_220802_50419-1.jpg?w=4125&auto=compress%2Cformat&fit=crop&dm=1669753433&s=e07533a0f441d3fa3683966f95b52513",
            species: "Southern Stingray",
            name: "Stella",
            food: "small fish",
            size: "150cm",
            location: "Tampa, Florida, USA"
        },
        
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Carcharias_taurus_SI.jpg",
            species: "Sand Tiger Shark",
            name: "James",
            food: "bony fish",
            size: "2.5m",
            location: "New South Wales, Austrailia"
        },

        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Paletten-Doktorfisch_M%C3%BCnster.JPG/800px-Paletten-Doktorfisch_M%C3%BCnster.JPG",
            species: "Blue Tang",
            name: "Dory",
            food: "plankton",
            size: "30cm",
            location: "Great Barrier Reef, Austrailia"
        },

        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Amphiprion_ocellaris_%28Clown_anemonefish%29_in_Heteractis_magnifica_%28Sea_anemone%29.jpg/800px-Amphiprion_ocellaris_%28Clown_anemonefish%29_in_Heteractis_magnifica_%28Sea_anemone%29.jpg",
            species: "Clownfish",
            name: "Nemo",
            food: "algae",
            size: "10cm",
            location: "Sydney, Austrailia"
        },
        
    ]
}



export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}
