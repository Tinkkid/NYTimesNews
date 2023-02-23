import createDropList from './categories/createDropList';
import onDrop from './categories/onDrop';
import onClikCategories from './categories/onClikCategories';
import randomList from './categories/randomList';
import { ref } from './categories/refCaregories';

export default function categores(news) {
  const bindOnClikCategories = onClikCategories.bind(this, news);

  ref.drop.addEventListener('click', onDrop);
  ref.list.addEventListener('click', bindOnClikCategories);

  handlerCetegories(news);
}

// doing for resize or reload
function handlerCetegories(news) {
  // format returning from localStorage: "item1,item2,..."
  // const categList = localStorage.getItem('categList')?.split(',') || [];
  // if (categList.length < CATEGORIES_LENGTH)
  //   getCategories(news, categList).then(list =>
  //     createListManager(list, ref.list)
  //   );
  // else createListManager(categList);

  getCategories(news).then(list => createListManager(list));
}

async function getCategories(news) {
  const arrCategCommon = await news.categories;

  return arrCategCommon.map(el => el.display_name);

  // localStorage.setItem('categList', arrCateg);
}

function createListManager(list) {
  createDropList([...randomList(list)]);
}
