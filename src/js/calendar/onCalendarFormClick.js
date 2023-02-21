import { ref } from './refs-calendar';

export default function onCalendarFormClick() { 
  ref.calendarWrapper.classList.toggle('hidden');
  ref.calendarForm.classList.toggle('selected');
}
