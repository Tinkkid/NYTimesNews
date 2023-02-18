import { ref } from './header/refFunHeader';
import onSearchSubmit from './onSearchSubmit';
import onClikSearchBtn from './header/onClikSearchBtn';
import onClickSwitcher from './header/onClickSwitcher';

// ------- HEADER MAIN SCRIPT ---------
export default function jsScriptHeader() {
  ref.formSearch.addEventListener('submit', onSearchSubmit);

  ref.btnSearchInput.addEventListener('click', onClikSearchBtn);

  ref.burger.addEventListener('click', () =>
    ref.menu.classList.remove('is-hidden')
  );

  ref.cross.addEventListener('click', () =>
    ref.menu.classList.add('is-hidden')
  );

  // ---- switch handler binder ------

  const isDark = localStorage.getItem('isDark') || '';
  if (isDark) ref.body.classList.add('isDark');

  const onClickSwitcherBinder = onClickSwitcher.bind(this, ref.body);

  for (const el of ref.switcher) {
    el.addEventListener('click', onClickSwitcherBinder);
  }
}
