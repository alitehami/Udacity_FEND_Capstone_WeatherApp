//TODO:This is NOT working

function handleSubmit(event) {
    // event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('feelings').value

    Client.checkForName(formText)
    Client.melbourneWeather();

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }
