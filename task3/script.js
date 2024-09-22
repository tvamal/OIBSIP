function CelsiusToFahrenheit(input) {
    return (input * 9 / 5) + 32;
}

function FahrenheitToCelsius(input) {
    return (input - 32) * 5 / 9;
}

document.querySelector('.btn').addEventListener('click', function () {
    const input = Number(document.querySelector('#degreeInput').value);
    const inputType = document.querySelector('#option').value;
    console.log(input, inputType);
    let result;

    if (inputType === 'Celsius') {
        result = CelsiusToFahrenheit(input).toFixed(2) + ' °F';
    } else {
        result = FahrenheitToCelsius(input).toFixed(2) + ' °C';
    }

    document.querySelector('.result').textContent = result;
});
