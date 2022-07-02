console.log("hello world!");

const display = document.querySelector('.display')

display.innerHTML = 'hello world!'
let val1 
let val2
let opeartor
let chash
let check = true 


const homeNumber = []


// function 1
const getValue=(element)=>{
    if(check){
        homeNumber.push((element.innerHTML) ) 
    console.log(homeNumber.map(e=>e))
    display.innerHTML = homeNumber.join('')
    }else{
        homeNumber.push((element.innerHTML) ) 
    console.log(homeNumber.map(e=>e))
    display.innerHTML = `${chash} ${homeNumber.join('')}`
    }
}

// function 2 
const getVal1and2=(elementO)=>{
    val1 = display.innerHTML
    console.log(elementO)
    opeartor=elementO   
    chash = `${val1} ${opeartor}`
    display.innerHTML = chash
    check = false   
    homeNumber.length = 0 
}


// function 3
const operatorFunction =()=>{
    val2 = homeNumber.join('')
    switch (opeartor) {
        case "+":
            display.innerHTML = Number(val1) + Number(val2)
            check = true
            homeNumber.length = 0 
            break;
        case "-":
            display.innerHTML = Number(val1) - Number(val2)
            check = true
            homeNumber.length = 0 
            break;
        case "x":
            display.innerHTML = Number(val1) * Number(val2)
            check = true
            homeNumber.length = 0 
            break;
        case "/":
            display.innerHTML = Number(val1) / Number(val2)
            check = true
            homeNumber.length = 0 
            break;
        default:
            break;
    }
}

function kuy (e){
    console.log(e.key)
    if(e.key > 0 || e.key <10){
        homeNumber.push((e.key) ) 
        console.log(homeNumber.join(""))
        if(check){
            display.innerHTML = homeNumber.join("")
        }else{
            display.innerHTML = `${chash} ${homeNumber.join("")}`
        }
    }
    if(e.key === "Backspace"){
        homeNumber.pop()
        console.log(homeNumber.join(""))
        display.innerHTML = homeNumber.join("")
    }
    if(e.key === "Enter"){
        operatorFunction()
    }
    if(e.key=="+"||e.key=="-"||e.key=="x"||e.key=="/"||e.key=="*"){
        console.log(opeartor)
        if(e.key=="*"){
            getVal1and2("x")
        }else{
            getVal1and2(e.key)  
        }
    }
}

