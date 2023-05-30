export default function solution(content){
  // BEGIN
  const allData = content
  .split('\r\n')
  .filter((str) => str.length !== 0)
  .map((elem) => elem.split(','));

  const weatherData = allData.slice(1);

  const countOfData = weatherData.length;
  console.log(`Count: ${countOfData}`);
  // END
}