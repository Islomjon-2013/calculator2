let number1 = document.querySelector('input[name=num1]');
let number2 = document.querySelector('input[name = num2]');
let select = document.querySelector('select');
let res = document.querySelector('.res');
let btn = document.querySelector(`button`)


function point(){
    number1.value="";
    number2.value="";
 
 }



function result(){
    let num1 = +number1.value;
   let  num2 = +number2.value;
    res.innerHTML = num1 + num2;

switch(select.value){

    case 'exp':
        res.innerHTML=num1**2;
        point()
        break;
  case 'exp2':
    res.innerHTML= num2**2;
    point()
break;
    case 'sum':
        res.innerHTML = num1 + num2;
        point()
        break;
        
        case 'sub':
            res.innerHTML = num1 - num2;
            point()
            break;
            case 'mul':
            res.innerHTML = num1 * num2;
            point()
            break;
            case 'div':
           res.innerHTML=num1 / num2;
           point()
            break;
            
            default:
                break;
}
}


