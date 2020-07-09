const refs = {
  switcher: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

refs.switcher.addEventListener('change', changeTheme);

ifTheme();

function changeTheme() {
  if (refs.switcher.checked) {
    localStorage.theme = 'dark-theme';
    refs.body.classList = 'dark-theme';
  } else {
    localStorage.setItem('theme', 'light-theme');
    refs.body.classList.replace('dark-theme', 'light-theme');
  }
}

function ifTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark-theme') {
      refs.switcher.checked = true;
    }
    refs.body.classList = localStorage.getItem('theme');
  }
}
