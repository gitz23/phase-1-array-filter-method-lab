// Code your solution here
const driversNameArr = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversNameArr, name){
    //for(const element of array){
    let filterDrivers =  driversNameArr.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return filterDrivers
}

// function fuzzyMatch(driversArr, name){
// }


const driversObjArr = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
]

function matchName(driversObjArr, name){
    let objectName = driversObjArr.filter(obj => obj.name === name);
    return objectName;
}



