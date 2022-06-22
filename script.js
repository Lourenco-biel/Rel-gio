
let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')
let rElement = document.querySelector('.relogio')
let dElement = document.querySelector('.digital') 
let textElement = document.querySelector('.titulo')
let buton1Element = document.querySelector('.toggler')
let buton2Element = document.querySelector('.toggler')
let ballElement = document.querySelector('.ball')
 


function updateClock(){
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60)* second) - 90
    let mDeg = ((360 / 60)* minute) - 90
    let hDeg = ((360 / 12)* hour) - 90

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

}

function fixZero(time) {
  return time < 10 ? `0${time}` : time
}

function checkFluency(){
    let checkbo = document.getElementById('checkbox')
    if(checkbo.checked != true ){
        
        light()
    }else{
        noturno()
    }
}


function noturno(){
    let tudo = [
        rElement.style.border = `5px solid blue`,
        rElement.style.animation = `neon 7s alternate infinite ease-in-out`,
        dElement.style.color = `blue`,
        dElement.style.animation = `neon 7s alternate infinite ease-in-out`,
        textElement.style.color = `blue`,
        textElement.style.animation = `neon 7s alternate infinite ease-in-out`,
        document.body.style.backgroundColor = `black`,
        buton1Element.style.border = `1px solid blue`,
        buton1Element.style.animation = `neon 7s alternate infinite ease-in-out`,
        buton1Element.style.backgroundColor = `#000518`,
        buton2Element.style.border = `1px solid blue`,
        buton2Element.style.animation = `neon 7s alternate infinite ease-in-out`,
        buton2Element.style.backgroundColor = `#000518`,
        ballElement.style.animation = `neon 7s alternate infinite ease-in-out`,
        ballElement.style.backgroundColor ='blue'
    ];
return tudo
}

function light(){
        rElement.style.border = `5px solid black`
        rElement.style.animation = `none`
        dElement.style.color = `black`
        dElement.style.animation = `none`
        textElement.style.color = `black`
        textElement.style.animation = `none`
        document.body.style.backgroundColor = `white`
        buton1Element.style.border = `1px solid black`
        buton1Element.style.color = 'black'
        buton1Element.style.animation = `none`
        buton1Element.style.backgroundColor = `#efefef`
        buton2Element.style.border = `1px solid black`
        buton2Element.style.color = 'black'
        buton2Element.style.animation = `none`
        buton2Element.style.backgroundColor = `#efefef`
        ballElement.style.backgroundColor ='black',
        ballElement.style.animation = 'none'
 
}

setInterval(updateClock, 1000)
updateClock()