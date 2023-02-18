export default function onSearchSubmit(e) {
  e.preventDefault();
  console.log(e.target.elements.word.value);
}
