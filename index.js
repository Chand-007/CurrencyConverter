const currency_1=document.getElementById('currency-one')
const currency_2=document.getElementById('currency-two')
const amount_1=document.getElementById('amount-one')
const amount_2=document.getElementById('amount-two')
const swap=document.getElementById('swap')
const rate=document.getElementById('rate')
const api_key="827e0f5c5d07aedcb5a767e1";

function Calculate(){
   const currency_one=currency_1.value
   const currency_two=currency_2.value
   fetch(` https://v6.exchangerate-api.com/v6/${api_key}/latest/${currency_one}`)
   .then(res=>res.json())
   .then(data=>{
    const rat=data.conversion_rates[currency_two]
    rate.innerText=`1 ${currency_one} =${rat} ${currency_two}`
    amount_2.value=(amount_1.value*rat).toFixed(2)
   })
}

currency_1.addEventListener('change',Calculate)
currency_2.addEventListener('change',Calculate)
amount_1.addEventListener('input',Calculate)
amount_2.addEventListener('input',Calculate)
swap.addEventListener('click',()=>{
    const temp=currency_1.value
    currency_1.value=currency_2.value
    currency_2.value=temp
    Calculate()
})
Calculate()
