// 01 - Aujourd'hui

var day = new Date()
var week = [
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday",
  "Saturday"
]

function whatDayIsToday(){
  var today = "Today is xxx";
  today = today.replace("xxx", week[day.getDay()])
  console.log(today)
}

whatDayIsToday()

console.log("")

// 02 - Mois courant

var month = new Date()
var year = [
  "January",
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
]

function whatMonthIsIt() {
  var thisMonth = "This month is xxx";
  thisMonth = thisMonth.replace("xxx", year[month.getMonth()])
  console.log(thisMonth)
}

whatMonthIsIt()

console.log("")

// 03 - Format

function formatDate(date) {
  var str = "aaaa-mm-jj"
  str = str.replace("aaaa", date.getFullYear())
  if (date.getMonth() < 9){
    str = str.replace("mm",  `0${date.getMonth() + 1}`)
  } else {
    str = str.replace("mm", date.getMonth() + 1)
  }
  if (date.getDate() < 10){
    str = str.replace("jj",  `0${date.getDate()}`)
  } else {
    str = str.replace("jj", date.getDate())
  }
  console.log(str)
  
  var format = str.split("-")
  format = format.reverse()
  format = format.join("/")
  console.log(format)
}

formatDate(new Date())

console.log("")

// 04 - Age

function calculateAge(birth) {
  var day = new Date()
  var age = day.getFullYear() - birth.getFullYear()
  if (day.getMonth() < birth.getMonth() || 
    (day.getMonth() === birth.getMonth() && day.getDate() < birth.getDate())) {
      age -= 1
    }
  console.log(age)
}

calculateAge(new Date("2002-10-08"))

console.log("")

