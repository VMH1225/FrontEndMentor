
let choice = 0
document.querySelector("#submit").addEventListener('click', disappear)
document.querySelector(".num").addEventListener('click', setValue)

function disappear(){
    document.querySelector('main').style.display = 'none'
    document.querySelector('.thank-you').style.display = 'flex'
    document.querySelector('#selection').innerText = `You selected ${choice} out of 5`
}


function setValue(){
    choice = document.querySelector(".num").innerText
}

