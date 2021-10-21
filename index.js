// Add your code here
document.addEventListener('DOMContentLoaded', () => {
    submitData()
})


function submitData(name, email) {
    return fetch('http://localhost:3000/users', { 
        //either GET, POST, PUT/PATCH OR DELETE (default is GET)
        //(what am I hoping to get when i connect to the backend)
        method: "POST", 
        // meta data-->what is the format of the data that I am submitting
        //what is teh format that I will accept back
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
    //data that i am sending (stuff from the client that I am sending to the server)
    // json.stringify make the key and the value strings (posts make new ID's)
        body: JSON.stringify({name, email})

    })//returns a promise //handel the fetch promise, then return a new promise
    .then(resp => resp.json())
    //handel the json promis and now u can do something with it(manipulate it)
    .then(object => document.body.innerHTML= (object.id))
    //if anything goes wrong, it will console log it
    .catch(error => document.body.innerHTML = (error.message)
    )}

