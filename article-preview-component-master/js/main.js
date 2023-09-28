
document.querySelector('.share').addEventListener('click', displaySocials)
var num = 2

function displaySocials(){
    if(num % 2 == 0){
    document.querySelector('.socials').style.display = 'flex'
    num++
    }
    else{
        document.querySelector('.socials').style.display = 'none'
        num++
    }
}

document.querySelector('#mobileShare').addEventListener('click', displaySocials)

