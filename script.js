// console.log('Es funktioniert')
let shwDay = document.getElementById('showDays');
let shwHrs = document.getElementById('showHrs');
let shwMinutes = document.getElementById('showMinutes');
let shwSeconds = document.getElementById('showSeconds');
// console.log(shwDay)

// Setting end Date of the timer with new Instance of date() to a new var 
// So count down is 14days which makes it Aug 11 from  the current date 
// console.log(new Date('Wed Aug 12 2021 13:23:34'))
let timerEndDate = new Date('Wed Aug 12 2021 13:23:34').getTime()

// Use set interval to set the running of the time to per seconds which is *1000*
// store setInterval into a new Var *runEverySeconds* so all codes in here runs after *1000* Milliseconds = 1seconds 
var runEverySeconds = setInterval(() => {

    // Set the current date into a new var *timerNowDate*
    let timerNowDate = new Date().getTime()
    // Minus the new Date from the end date  
    let minusDate = timerEndDate - timerNowDate
    // do some maths calculations to get day/hrs/mins...
    // use mathsfloor to round it     
    let days = Math.floor(minusDate / (1000 * 60 * 60 * 24)) // minusDate / 86,400,000;
    let hours = Math.floor((minusDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((minusDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((minusDate % (1000 * 60)) /1000);

    shwDay.innerHTML = days //Output the the HTML
    shwHrs.innerHTML = hours
    shwMinutes.innerHTML = minutes
    shwSeconds.innerHTML = seconds

    if (minusDate <= 0) { // if time is up alert Time Up
        alert('TIME UP !!!')
    }

}, 1000);

// console.log(Maths.floor(18.851.51636574074‬‬));
