export default function countCard() {
  let num = 4;
  if (window.matchMedia('(min-width: 768px)').matches) num = 7;
  if (window.matchMedia('(min-width: 1280px)').matches) num = 8;
  return num;
}

export default function queueWeather() {
    let num = 0;
  if (window.matchMedia('(min-width: 768px)').matches) num = 1;
  if (window.matchMedia('(min-width: 1280px)').matches) num = 2;
  return num;
}
