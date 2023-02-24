const database = {
    fish: [
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sunfish2.jpg/800px-Sunfish2.jpg",
            species: "Ocean Sunfish",
            name: "Charles",
            food: "Crustaceans",
            size: 15,
            location: "Monterey Bay, California, USA"
        },
        
        {
            imgUrl: "https://optimise2.assets-servd.host/maniacal-finch/production/animals/stingray_meibaum_220802_50419-1.jpg?w=4125&auto=compress%2Cformat&fit=crop&dm=1669753433&s=e07533a0f441d3fa3683966f95b52513",
            species: "Southern Stingray",
            name: "Stella",
            food: "Small fish",
            size: 12,
            location: "Tampa, Florida, USA"
        },
        
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Carcharias_taurus_SI.jpg",
            species: "Sand Tiger Shark",
            name: "James",
            food: "Bony fish",
            size: 11,
            location: "New South Wales, Austrailia"
        },

        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Paletten-Doktorfisch_M%C3%BCnster.JPG/800px-Paletten-Doktorfisch_M%C3%BCnster.JPG",
            species: "Blue Tang",
            name: "Dory",
            food: "Plankton",
            size: 10,
            location: "Great Barrier Reef, Austrailia"
        },

        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Amphiprion_ocellaris_%28Clown_anemonefish%29_in_Heteractis_magnifica_%28Sea_anemone%29.jpg/800px-Amphiprion_ocellaris_%28Clown_anemonefish%29_in_Heteractis_magnifica_%28Sea_anemone%29.jpg",
            species: "Clownfish",
            name: "Nemo",
            food: "Algae",
            size: 3,
            location: "Sydney, Austrailia"
        },
        
    ]
}

const newSortedArray = []

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if(fish.size % 3 === 0) {
            newSortedArray.push(fish)
        }

    }

    return holyFish
}

export const soldierFish = () => {
    const armyFish = []

    for (const fish of database.fish) {
        if (fish.size % 5 === 0) {
            newSortedArray.push(fish)
        }
    }
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    const nonBelievers = []

    for (const fish of database.fish) {
        if ((fish.size % 5 !== 0) && (fish.size % 3 !== 0))  {
            newSortedArray.push(fish)
        }
    }
    // Any fish not a multiple of 3 or 5
    return regularFish
}

