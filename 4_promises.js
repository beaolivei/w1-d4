// simplify our callback hell using promisses
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

console.log('... page loaded...')

function handleResponse(dog, cats){
    setTimeout(function(){
        if(Math.random() < 0.5){
            let response = successfulRequest
            dog(response)
        } else {
            let response = error
            cats(response)
        }
    }, 1000)
} 

const retrieveDogs = new Promise(handleResponse )



retrieveDogs
.then((response) => console.log('this is the data you want:', response))
.then(() => setTimeout(() => console.log('have you thought about cats?'), 1000))
.catch((err) => console.log('this the error:', err))