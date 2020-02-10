// instantiate a moment object
const today = moment().format('dddd, MMMM Do');

// display value of moment object in #currentDay p element
const $currentDay = document.getElementById('currentDay');
$currentDay.innerHTML = today;


