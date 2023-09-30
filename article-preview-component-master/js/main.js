
document.querySelector('.share').addEventListener('click', displaySocials)
var num = 2

function displaySocials(){
    if(num % 2 == 0){
    document.querySelector('.socials').style.display = 'flex'
    document.querySelector('.share').style.backgroundImage = 'url("../images/icon-shareActive.svg")'
    document.querySelector('.share').style.backgroundColor = 'hsl(214, 17%, 51%)'
    document.querySelector('#mobileShare').style.backgroundImage = 'url("../images/icon-shareActive.svg")'
    document.querySelector('#mobileShare').style.backgroundColor = 'hsl(214, 17%, 51%)'
    num++
    }
    else{
        document.querySelector('.socials').style.display = 'none'
        document.querySelector('.share').style.backgroundImage = 'url("../images/icon-share.svg")'
        document.querySelector('.share').style.backgroundColor = 'hsl(210, 46%, 95%)'
        document.querySelector('#mobileShare').style.backgroundImage = 'url("../images/icon-share.svg")'
        document.querySelector('#mobileShare').style.backgroundColor = 'hsl(210, 46%, 95%)'
        num++
    }

}


document.querySelector('#mobileShare').addEventListener('click', displaySocials)

