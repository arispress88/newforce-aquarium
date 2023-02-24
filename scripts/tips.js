const tips = {
    proTips: [
        {
          tip: "Be sure to keep the tank clean and not murky!"

        },

        {
            tip: "Look out for algae buildup."
        },

        {
            tip: "Make sure that the fish are getting proper filtration in the tank."
        },

        {
            tip: "Be sure that the species in the tank will not try to eat one another!"
        },

        {
            tip: "Make sure to check whether or not you have a freshwater or saltwater fish."
        },
    ]
}

export const getTips = () => {
    return tips.proTips.map(copyOfSingleTipObject => ({...copyOfSingleTipObject}))
}
