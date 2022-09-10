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
const error = new Error ("Couldn't load breeds")

function handleRequest (yey, meh){
setTimeout(() => {
    if(Math.random() < 0.5){
        let response = successfulRequest
        yey(response)
    } else{
        let response = error
        meh(response)
    }
}, 1000)
}

const getDogs = new Promise(handleRequest)

console.log('loading...')

getDogs
.then((response) => console.log('your info on dogs:', response))
.then(() => setTimeout(() => { console.log('have you thought about cats?')} , 1000))
.catch((err) => console.log(err))
