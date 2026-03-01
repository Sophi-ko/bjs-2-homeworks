"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];    
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [];
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = (percent / 100) / 12;
  let countCredit = amount - contribution;
  let payment = countCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalMortgage = payment * countMonths;
  return Number(totalMortgage.toFixed(2));
}