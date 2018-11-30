const countryCodes = require('./CountryCodes.json');

let allPeople = 0;
const allCountry = [];
const other = 0.5;
const otherCountrys = { country: 'Other', percentValue: 0, population: 0 };
const otherMass = [];

countryCodes.forEach((element) => {
    allPeople += Number(element.Population.split(',').join(''));
});

countryCodes.forEach((element) => {
    const population = Number(element.Population.split(',').join(''));
    const percentValue = population / allPeople * 100;
    if (percentValue >= other) {
        allCountry.push({ country: element.Country, percentValue, population });
        return;
    }
    otherMass.push({ country: element.Country, percentValue, population });
    otherCountrys.population += population;
    otherCountrys.percentValue += percentValue;
});

if (otherMass.length < 2) allCountry.push(otherMass[0]);

allCountry.sort((a, b) => {
    if (a.percentValue < b.percentValue) { return 1; }
    if (a.percentValue > b.percentValue) { return -1; }
    return 0;
});

if (otherMass.length > 1) {
    allCountry.push(otherCountrys);
}

console.log(allCountry);
