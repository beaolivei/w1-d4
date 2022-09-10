// our app starts with a message that the page is loading
// then we mock a call to our API to randomly get either a success response or an error
// on success, we call a callback to make the user to actually think about cats, 1 second later
// and after that, we want to show more cat's information, 1 second later
// on error we call another callback to log the error
// after the error we want to ask the user to update the page, after 1 second

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

const successfulRequestCats = {
    allCats: {
        domesticShorthair: {
            friendly: true
        },
        domesticLongHair: {
            friendly: true
        },
        siamese: {
            friendly: true
        },
        americanShorthair: {
            friendly: false
        },
        ragdoll: {
            friendly: true
        },
        bangal: {
            friendly: false
        }
    },
    status: "success"
}

// mocks error message
const error = new Error ("Couldn't load breeds")

console.log("...loading...")

const getDogs = (onSuccessCallback, onErrorCallback, getCatsCallback, onCatsSuccess, onCatsError) => {
    const firstActionTime = 1000
    setTimeout(() => {
        if(Math.random() < 0.5){
            let response = successfulRequest
            onSuccessCallback(firstActionTime, response, getCatsCallback, onCatsSuccess, onCatsError)
        } else {
            let response = error
            onErrorCallback(firstActionTime, response)
        }
    }, firstActionTime)
}

const getCats = (onSuccessCallback, onErrorCallback) => {
    setTimeout(() => {
        if(Math.random() < 0.5){
            let response = successfulRequestCats
            onSuccessCallback(response)
        } else {
            let response = error
            onErrorCallback(response)
        }
    }, 1000)
}

const onSuccessCats = (response) => {
    console.log("here some cat breeds: ", response)
}

const onErrorCats = (response) => {
    console.log('sorry, maybe cats are not for you')
}

function onSuccess (time, response, getCatsCallback, onCatsSuccess, onCatsError){
    const secondActionTime = time + 1000
    const thridActionTime = secondActionTime + 1000
    
    console.log('the info about dogs that you wanted: ', response)

    setTimeout(function(){
        console.log("Have you thought about cats?")
    }, secondActionTime)

    setTimeout(function(){
        getCatsCallback(onCatsSuccess, onCatsError)
    }, thridActionTime)
}

const onError = (time, response) => {
    const secondActionTime = time + 1000

    console.log('error:', response)

    setTimeout(() => {
       console.log("Please refresh your page!") 
    }, secondActionTime)

}

getDogs(onSuccess, onError, getCats, onSuccessCats, onErrorCats)
