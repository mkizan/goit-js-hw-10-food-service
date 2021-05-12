import './styles.css';
import menu from './data/menu.json';
import createMenu from './templates/menuTemplate.hbs';

const refs = {
  body: document.body,
  menuList: document.querySelector('.js-menu'),
  switchTheme: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));

// const markup = menu.map(obj => createMenu(obj));
// refs.menuList.insertAdjacentHTML('beforeend', markup.join(''));

refs.switchTheme.addEventListener('click', changeTheme);

// refs.switchTheme.classList.add(saveTheme);

function saveTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switchTheme.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
}

saveTheme();

function toggleTheme(rm, add) {
  refs.body.classList.remove(rm);
  refs.body.classList.add(add);
  localStorage.setItem('theme', add);
}

function changeTheme(e) {
  if (e.target.checked) {
    toggleTheme(Theme.LIGHT, Theme.DARK);
  } else {
    toggleTheme(Theme.DARK, Theme.LIGHT);
  }

  console.log(e.target.checked);
}
