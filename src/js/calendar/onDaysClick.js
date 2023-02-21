import { ref } from './refs-calendar';
import addLeadingZero from './addLeadingZero';
import { currYear, currMonth } from './renderCalendar';

export default function onDaysClick(e) { //adding click events on days
    
    let selectedApiDate = '';// to transfer to API request
    let displayDate = '';// to display on calendar input

    const clickedDate = e.target.innerText;
    // console.log('e :>> ', e);

    if (e.target.className !== 'inactive') {//to exclude selection of inactive dates

      // e.target.classList.add('selected');


      displayDate = `${addLeadingZero(clickedDate)}/${addLeadingZero(currMonth + 1)}/${currYear}`;
      console.log('displayDate :>> ', displayDate);
      ref.calendarDisplayDate.textContent = displayDate;

      selectedApiDate = `${currYear}${addLeadingZero(currMonth + 1)}${addLeadingZero(clickedDate)}`;
      console.log('selectedApiDate :>> ', selectedApiDate);

      // news.date = selectedApiDate;
      // const ChosenDate = news.date;

      // console.log('ChosenDate :>> ', ChosenDate);
    }
  }