// our app starts with a message that the page is loading
// then we mock a call to our API to randomly get either a success response or an error
// on success, we call a callback to log the response
// on error we call another callback to log the error

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

console.log("... loading ...")

const getDogs = (callback) => {
    setTimeout(function(){
        if(Math.random() < 0.5){
            let response = successfulRequest
            callback(response)
        } else {
            let response = error
            callback(response)
        }
    }, 1000)
}

function nextAction (myResponse){
    console.log(myResponse)
}

getDogs(nextAction)