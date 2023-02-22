import { ref } from './refs-calendar';
import { date, currYear, currMonth } from './todayDate';


export default function renderCalendar() {

    // storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();//getting first day of month
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();//getting last date of month
    const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();//getting last day of month
    const lastDateOfPrevMonth = new Date(currYear, currMonth, 0).getDate();//getting last date of previous month

    let liTag = "";

    for (let i = firstDayOfMonth - 1; i > 0; i -= 1) {// creating li for previous month last days
      liTag += `<li class='inactive'>${lastDateOfPrevMonth - i + 1}</li>`;
    }
    if (firstDayOfMonth === 0) {
      for (let i = 6; i > 0; i -= 1) {// creating li for previous month last days in case of Sunday
        liTag += `<li class='inactive'>${lastDateOfPrevMonth - i + 1}</li>`;
      }
    }
    for (let i = 1; i <= lastDateOfMonth; i += 1) {// creating li for all days of current month
      //adding active class to li if the current day, month and year matched 
      const isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? 'active' : '';
      liTag += `<li class='${isToday} usual'>${i}</li>`;
    }
    if (lastDayOfMonth !== 0) { // if not Sunday
      for (let i = lastDayOfMonth; i < 7; i += 1) {// creating li of next month first days
        liTag += `<li class='inactive'>${i - lastDayOfMonth + 1}</li>`;
      }
    }
    ref.currentMonthYear.textContent = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    ref.days.innerHTML = liTag;
  }

