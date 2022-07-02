num = []

num.push(233)
num.push(232)
num.push(112)
num.push(33)
console.log(233+232+112/33)

console.log(`${num[0]+num[1]+num[2]/num[3]} KASIDID`)
num.map(
    e=>{
       
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
)
// 1.operator