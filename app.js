const celciusInput = document.querySelector('#celcius > input');
const farenheitInput = document.querySelector('#farenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

celciusInput.addEventListener('input', () => {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * 9 / 5) + 32;
    const kTemp = 273.15;
    console.log(fTemp);
});