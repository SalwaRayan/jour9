var moment = require("moment")

// 01 - Aujourd'hui

function whatDayIsToday(){

  var resultat = moment().format('dddd')
  console.log(`Today is ${resultat}`)

}

whatDayIsToday()

console.log("")

// 02 - Mois courant

function whatMonthIsIt(){

  var resultat = moment().format('MMMM')
  console.log(`This month is ${resultat}`)

}

whatMonthIsIt()

console.log("")

// 03 - Format

function formatDate() {

  var resultat = moment().format('L')
  console.log(resultat)

}

formatDate()

console.log("")

// 04 - Age

function calculateAge(birth) {
 var resultat = moment("19981223", "YYYYMMDD").fromNow()
 console.log(resultat)
}

calculateAge()

console.log("")