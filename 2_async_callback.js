// our app starts with a message that the page is loading
// then we mock a call to our API to randomly get either a success response or an error
// on success, we call a callback to log the response
// on error we call another callback to log the error

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

console.log('Page loaded ...')

function retrieveDogs (nextStep){

    setTimeout(function(){
        if(Math.random() < 0.5){
            let response = successfulRequest
            nextStep(response)
        } else {
            let response = error
            nextStep(response)
        }
    }, 1000)
}

function showResponse (response){
    console.log('response is:', response)
}

retrieveDogs(showResponse)