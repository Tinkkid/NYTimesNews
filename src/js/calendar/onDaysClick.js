import { ref } from './refs-calendar';
import addLeadingZero from './addLeadingZero';
import { currYear, currMonth } from './todayDate';

import { save } from '../localStorageService';

    // let selectedDate = '';// to transfer to API request

export default function onDaysClick(e) { //adding click events on days
    

    const clickedDate = e.target.innerText;
    console.log('e :>> ', e);

    if (e.target.className === ' usual') {//to exclude selection of inactive dates

      // e.target.classList.add('selected');


      displayDate = `${addLeadingZero(clickedDate)}/${addLeadingZero(currMonth + 1)}/${currYear}`;
      ref.calendarDisplayDate.textContent = displayDate;

      const selectedDate = `${currYear}${addLeadingZero(currMonth + 1)}${addLeadingZero(clickedDate)}`;
      // console.log('selectedDate :>> ', selectedDate);
      save('selectedDateKey', selectedDate);
    }
}
