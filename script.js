var select = document.querySelectorAll('.currency')
var input_currency = document.getElementById('input_currency')
var output_currency = document.getElementById('output_currency');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    console.log(entries)
    //alert(`10 GBP = ${data.rates.USD} USD`);
    for(i =0; i< entries.length; i++){
        select[0].innerHTML = <Option value= "${entries[i][0]">${entries[i][0]}</Option>
        select[0].innerHTML = <Option value= "${entries[i][0]">${entries[i][0]}</Option>
    }
  });

  function converter(){
    var input_currency_val = input_currency.value;
    if(select[0].value != select[1].value){
        const url = 'https://api.exchangeratesapi.io/latest?base=USD';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const euroRate = data.rates.EUR;
    const euros = 100 * euroRate;
    console.log(`100 US dollars is equal to ${euros} Euros.`);
  });
        //alert("Right")
       /* const host = 'api.frankfurter.app';
      fetch(`https://${host}/latest?amount=${{}&from=${select[0].value}&to=${select[1].value}}`)
      .then(resp => resp.json())
      .then((val) => {
      output_currency.value= Object.value(val.rates)[0]
      });*/
    }else{
        alert('Please select two diffent currency')
    }
}