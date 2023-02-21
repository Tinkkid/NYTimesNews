// import NewsApiServes from './rest-api';
// const news = new NewsApiServes();

import { ref } from './calendar/refs-calendar';
import onCalendarFormClick from './calendar/onCalendarFormClick';
import renderCalendar from './calendar/renderCalendar';
import onArrowsClick from './calendar/onArrowsClick';
import onDaysClick from './calendar/onDaysClick';

// ------- CALENDAR MAIN SCRIPT ---------
export default function jsCalendar() {

  ref.calendarForm.addEventListener('click', onCalendarFormClick);
  
  renderCalendar();
  ref.prevNextArrows.addEventListener('click', onArrowsClick);//listening click on month and year arrows
  ref.days.addEventListener('click', onDaysClick);//listening click on days
}

  
  
  // getting current date year and month for API at start
  // const currentDate = `${currYear}${addLeadingZero(currMonth + 1)}${addLeadingZero(date.getDate())}`;
  // console.log('currentDate :>> ', currentDate);

  // news.date = currentDate;
  // const CheckedDate = news.date;
  // console.log('CheckedDate :>> ', CheckedDate);







  // console.log('selectedApiDate :>> ', selectedApiDate);
  // console.log('displayDate :>> ', displayDate);

  // export default selectedApiDate;
