import './style.css';
import './reset.css';

const countrySelect = document.querySelector('#country');

async function getCountries() {
    fetch('https://countriesnow.space/api/v0.1/countries/positions')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);

            for (let i = 0; i < data.data.length; i++) {
                const countryOption = document.createElement('option');

                countryOption.value = data.data[i].name.toLowerCase();
                countryOption.textContent = data.data[i].name;

                countrySelect.appendChild(countryOption);
            }
        });
}

getCountries();
