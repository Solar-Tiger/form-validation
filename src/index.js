import './style.css';
import './reset.css';

const countrySelect = document.querySelector('#country');

async function getCountries() {
    fetch('https://countriesnow.space/api/v0.1/countries/positions')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);

            for (let country of data.data) {
                const countryOption = document.createElement('option');

                countryOption.value = country.iso2;
                countryOption.textContent = country.name;

                countrySelect.appendChild(countryOption);
            }
        });
}

getCountries();

const submitBtn = document.querySelector('#submit-btn');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip-code');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    alert('Please fill out the form');
});
