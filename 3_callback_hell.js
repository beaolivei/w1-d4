// our app starts with a message that the page is loading
// then we mock a call to our API to randomly get either a success response or an error
// on success, we call a callback to make the user to actually think about cats, 1 second later
// and after that, we want to show more cat's information, 1 second later
// on error we call another callback to log the error
// after the error we want to ask the user to update the page, after 1 minute

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

function retrieveDogs (time, onSuccess, onError, showCats){

setTimeout(function(){
    if(Math.random() < 0.5){
        let response = successfulRequest
        onSuccess(response, time, showCats)
    } else {
        let response = error
        onError(response, time)
    }
}, time)
}

function onSuccess(response, time, showCats){

    const secondCallTime = time + 1000
    const thirdCallTime = time + 2000
    console.log('this is your successful response:', response)

    setTimeout(() => console.log('Have you thought about cats?'), secondCallTime)

    showCats(thirdCallTime)
}

function showCats (time){
    setTimeout(
        function(){
            if(Math.random() < 0.5){
                console.log('cats are very cute')
            } else {
                console.log(new Error('Sorry, maybe cats are not for you'))
            }

        }, time + 1000
    )
}

function onError(response, time){
    const secondCallTime = time + 1000

    console.log('this is your error:', response)

    setTimeout(()=>console.log('Please reload the page'),secondCallTime)
}

retrieveDogs(1000, onSuccess, onError, showCats)