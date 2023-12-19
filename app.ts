const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;
const arrNum:number[] =[];
const arrString:string[] = [];

type numAndString = number | string
type Result = {val:number ;timeStamp:Date}
interface resultOf {
    val:number ;
    timeStamp:Date
}

function add(num1:numAndString , num2:numAndString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2 ;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 +' '+ num2 ;
    }
    
}

function printResult(resultObj:Result){
    console.log(resultObj.val ,resultObj.timeStamp)
}

buttonElement.addEventListener('click',()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numberValue = add(+num1 ,+num2);
    arrNum.push(numberValue as number);
    const stringValue = add(num1 ,num2);
    arrString.push(stringValue as string)!;
    console.log('number',numberValue);
    console.log('string',stringValue);
    printResult({val:numberValue as number ,timeStamp:new Date()})
    console.log(arrNum,arrString);
})

const myPromise = new Promise<string>((resolve , reject)=>{
    setTimeout(()=>{
        resolve('it worked');
    },1000)
})

myPromise.then(result=>{
    console.log(result.split('w'));
})
