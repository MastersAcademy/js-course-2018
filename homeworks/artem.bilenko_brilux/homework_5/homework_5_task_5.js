const fs = require('fs');

try {
    const data = JSON.parse(fs.readFileSync('CountryCodes.json'));
    const OTHER = 1;
    const maxPercent = 100;

    const toNumber = number => parseFloat(number.replace(/,/g, ''));
    const worldPopul = data.reduce((prevVal, current) => prevVal + toNumber(current.Population), 0);

    const objArray = data
        .filter(city => toNumber(city.Population) / worldPopul * maxPercent > OTHER)
        .map(city => ({
            country: city.Country,
            percentValue: toNumber(city.Population) / worldPopul * maxPercent,
            population: toNumber(city.Population),
        }))
        .sort((cityA, cityB) => cityB.percentValue - cityA.percentValue);
    const objPopul = objArray.reduce((prevVal, current) => prevVal + current.population, 0);
    objArray.push({
        country: 'Other',
        percentValue: maxPercent - (maxPercent * objPopul / worldPopul),
        population: worldPopul - objPopul,
    });
    console.log(objArray);
} catch (err) {
    console.log('error');
}
