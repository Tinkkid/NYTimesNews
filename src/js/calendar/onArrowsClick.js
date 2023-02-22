import { date, currYear, currMonth } from './todayDate';
import renderCalendar from './renderCalendar';

console.log('currMonth :>> ', currMonth);

export default function onArrowsClick(e) {//adding click events on month and year arrows
  const clickedIconRef = e.target;
  console.log('clickedIconRef :>> ', clickedIconRef);
 
    // if clicked icon is previous icon then decrement current month or year by 1 else increment it by 1
    switch (clickedIconRef.id) {
      case 'month__prev':
        currMonth -= 1;
        break;
      case 'month__next':
        currMonth += 1;
        break;
      case 'year__prev':
        currYear -= 1;
        break;
      case 'year__next':
        currYear += 1;
        break;
  }
  console.log('currMonth :>> ', currMonth);
    if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(date, currYear, currMonth); // calling renderCalendar function
  }