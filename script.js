// selected all the elements

let initialPrice = document.querySelector('#initial-price');
let noOfStocks = document.querySelector('#no-of-stocks');
let currentPrice = document.querySelector('#current-price');
let submitBtn = document.querySelector('#submit-btn');
let outputBox = document.querySelector('#output-box');

submitBtn.addEventListener("click", clickEventHandler );

function clickEventHandler(){
   
    profitLossCalc(initialPrice.value, noOfStocks.value, currentPrice.value)
}

function profitLossCalc(initial,quantity,current){
    //profit 
    if(current>initial)
    {
       let profitValue = (current - initial)*quantity;
       let profitPerc = (profitValue/initial)*100;

      showMessage(`profit is ${profitValue} and profit percentage is ${profitPerc}%`)
      
    }

    //loss

    else if(current<initial){
        let lossValue = ( initial - current)*quantity;
        let lossPerc = (lossValue/initial)*100;
       showMessage(`loss is ${lossValue} and loss percentage is ${lossPerc}%`)
    }

    // equal 
    else {
       showMessage("No pain, No gain. No gain, No pain!")
    }
}

function showMessage(message){
    outputBox.innerHTML = message;
}

