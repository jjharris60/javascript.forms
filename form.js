'strict mode'
console.log("Hello there")
const firstName = document.getElementById('first-name')
const secondName = document.getElementById('second-name')
const submitButton = document.getElementById('submit-button')
submitButton.onclick = function () {
    if (firstName.value == "" || secondName.value == "") {
        console.log('You have not completed the form!')
    } else {
        console.log('Well done for completing the form!')
    }
}