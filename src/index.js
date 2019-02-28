module.exports = function getZerosCount(number, base) {

  let Multipliers = factorization(base);
  let GroupedMultiples = getGroupedMultiples(Multipliers);
  let result = getZerosCountFromFactorialAndGroupedMultiples(number, GroupedMultiples);

  return result;
}

const VALYE_GROUPE_INDEX = 0;
const COUT_GROUP_INDEX = 1;

function factorization(number) {
  let result = new Array();

  let multiplier = 2;

  while (number > 1) {
    if (number % multiplier == 0) {
      number = number / multiplier;

      result.push(multiplier);
    }
    else
      multiplier++;

  }

  return result;
}



function getGroupedMultiples(array) {
  let result = new Array();


  let groupValue = array[0];
  let coutGroup = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] != groupValue) {


      result.push(new Array(groupValue, coutGroup));

      groupValue = array[i];

      coutGroup = 1;

    }
    else
      coutGroup++;

  }

  result.push(new Array(groupValue, coutGroup));


  return result;

}

function getZerosCountFromFactorialAndGroupedMultiples(factorial, groups) {

  let minResult = Infinity;

  for (let i = 0; i < groups.length; i++) {

    let group = groups[i];


    let pow = 1;
    let result = 0;

    while (Math.pow(group[VALYE_GROUPE_INDEX], pow) < factorial) {

      let delet = factorial / Math.pow(group[VALYE_GROUPE_INDEX], pow);

      result += parseInt(delet);
      pow++;
    }

    result = parseInt(result / group[COUT_GROUP_INDEX]);

    minResult = Math.min(minResult, result);
  }

  return minResult;

}