const calculationOne = document.querySelector('#calculation-one');
const calculationTwo = document.querySelector('#calculation-two');
const calculate = document.querySelector('#calculation-btn');
const pResult = document.querySelector('#result')

function btnOnClick(){
    const sumCalculation =  (Number(calculationOne.value) + Number(calculationTwo.value));
    pResult.innerHTML = `The sum of the numbers is: ${sumCalculation}`;
}
calculate.addEventListener('click', btnOnClick);