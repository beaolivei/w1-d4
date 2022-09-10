// mocks successful response as if we already have done JSON.parse(jsonResponse)
//JSON.parse(jsonReponse)
const successfulRequest = {
    allDogs: {
        australian: {
            friendly: true
        },
        buhund: {
            friendly: true
        },
        bulldog: {
            friendly: true
        },
        bullterrier: {
            friendly: false
        },
        cattledog: {
            friendly: true
        },
        dane: {
            friendly: false
        }
    },
    status: "success"
}

// mocks error message
const error = new Error ("Couldn't load breeds")