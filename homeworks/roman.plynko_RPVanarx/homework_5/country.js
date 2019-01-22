const countryCodes = require('./CountryCodes.json');

let allPeople = 0;
const allCountries = [];
const MIN_PERCENT_VALUE = 0.5;
const otherCountries = { country: 'Other', percentValue: 0, population: 0 };
const otherMass = [];

allPeople = countryCodes.reduce((sum, { Population }) => sum + parseInt(Population.replace(',', ''), 10), 0);

countryCodes.forEach(({ Country, Population }) => {
    const population = parseInt(Population.replace(',', ''), 10);
    const percentValue = population / allPeople * 100;
    if (percentValue >= MIN_PERCENT_VALUE) {
        allCountries.push({ country: Country, percentValue, population });
        return;
    }
    otherMass.push({ country: Country, percentValue, population });
    otherCountries.population += population;
    otherCountries.percentValue += percentValue;
});

if (otherMass.length < 2) allCountries.push(otherMass[0]);

allCountries.sort(({ percentValue: a }, { percentValue: b }) => b - a);

if (otherMass.length > 1) {
    allCountries.push(otherCountries);
}

console.log(allCountries);
