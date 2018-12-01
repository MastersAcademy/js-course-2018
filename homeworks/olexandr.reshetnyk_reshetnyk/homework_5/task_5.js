const fs = require('fs');

const EARTH_POPULATION = 7661219098;
const OTHER = 0.5;
const countries = JSON.parse(fs.readFileSync('countries.json'));

const prepared = [];

let otherPopulation = 0;

countries.forEach((item) => {
    const population = Number.parseInt(item.Population.replace(/,/g, ''), 10);
    const percentValue = population / EARTH_POPULATION * 100;
    const country = {
        country: item.Country,
        percentValue,
        population,
    };
    if (country.percentValue >= OTHER) {
        prepared.push(country);
    } else {
        otherPopulation += country.population;
    }
});

function comparatorDESC(country1, country2) {
    return (country1.percentValue < country2.percentValue) ? 1 : -1;
}

const countryOther = {
    country: 'Other',
    percentValue: otherPopulation / EARTH_POPULATION * 100,
    population: otherPopulation,
};

prepared.sort(comparatorDESC);
prepared.push(countryOther);

console.log(prepared);
