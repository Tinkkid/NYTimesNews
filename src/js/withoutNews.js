export function withoutNews() {
  if (document.querySelector('.not-found-image')) {
    return;
  }
  console.log('1');
  function createGag() {
    return `<h2 class="not-found">We haven’t found any news</h2>
    <img class="not-found-image" srcset="
                  ./images/gap1x.png          601w,
                  ./images/gap1x-tablet.png   560w,
                  ./images/gap1x-mobile.png   248w,
                  ./images/gap2x.png          1202w,
                  ./images/gap2x-tablet.png   1120w,
                  ./images/gap2x-mobile.png   496w,
                  ./images/gap3x.png          1803w,
                  ./images/gap3x-tablet.png   1680w,
                  ./images/gap3x-mobile.png   744w,
                " sizes="(min-width: 1280px) 601px, (min-width: 768px) 560px, 248px" src="./images/gap1x.png" alt="Not found">`;
  }
  const field = document.querySelector('.main');
  console.log(field);
  if (document.querySelectorAll('.news-item').length < 1) {
    field.insertAdjacentHTML('beforeend', createGag());
  }
}
