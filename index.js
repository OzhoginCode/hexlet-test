export default function solution(content){
  // BEGIN
  const allData = content
  .split('\r\n')
  .filter((str) => str.length !== 0)
  .map((elem) => elem.split(','));

  const weatherData = allData.slice(1);

  const countOfData = weatherData.length;

  const getDate = (item) => item[0];
  const getCity = (item) => item[7];
  const getHumidity = (item) => item[3];
  const getMaxTemperature = (item) => Number(item[1]);

  const listOfCities = weatherData
    .reduce((acc, elem) => acc.includes(getCity(elem)) ? acc : [...acc, getCity(elem)], [])
    .sort()
    
  const stringedListOfCities = listOfCities.join(', ');
  

  const theLowestHumidity = weatherData
    .reduce((acc, elem) => getHumidity(elem) < acc ? getHumidity(elem) : acc, Infinity)

  const theHighestHumidity = weatherData
    .reduce((acc, elem) => getHumidity(elem) > acc ? getHumidity(elem) : acc, -Infinity)

  const theHottestDateAndCity = weatherData
    .reduce((acc, elem) => getMaxTemperature(elem) > getMaxTemperature(acc) ? elem : acc);

  const getTheHottestCityName = (weatherData) => {
    const calculateMidForCity = (city) => {
      const listOfCity = weatherData.filter((elem) => getCity(elem) === city);
      const sum = listOfCity.reduce((acc, elem) => acc + getMaxTemperature(elem), 0);
      return sum / listOfCity.length;
    }
    return listOfCities.reduce((acc, elem) => calculateMidForCity(elem) > calculateMidForCity(acc) ? elem : acc);
  }
  console.log(`Count: ${countOfData}`);
  console.log(`Cities: ${stringedListOfCities}`);
  console.log(`Humidity: Min: ${theLowestHumidity}, Max: ${theHighestHumidity}`);
  console.log(`HottestDay: ${getDate(theHottestDateAndCity)} ${getCity(theHottestDateAndCity)}`);
  console.log(`HottestCity: ${getTheHottestCityName(weatherData)}`);

  // END
}