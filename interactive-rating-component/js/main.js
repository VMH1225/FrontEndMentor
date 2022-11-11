

document.querySelector("#submit").addEventListener('click', disappear)

function disappear(){
    document.querySelector('main').style.display = 'none'
    document.querySelector('.thank-you').style.display = 'flex'
    document.querySelector('#selection').innerText = 'You selected 4 out of 5'

}