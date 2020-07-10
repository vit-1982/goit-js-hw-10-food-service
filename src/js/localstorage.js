const refs = {
  switcher: document.querySelector('.js-switch-input'),
  // body: document.querySelector('body'),
};

refs.switcher.addEventListener('change', changeTheme);

ifTheme();

function changeTheme() {
  if (refs.switcher.checked) {
    localStorage.theme = 'dark-theme';
    document.body.classList = 'dark-theme';
  } else {
    localStorage.setItem('theme', 'light-theme');
    document.body.classList.replace('dark-theme', 'light-theme');
  }
}

function ifTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark-theme') {
      refs.switcher.checked = true;
    }
    document.body.classList = localStorage.getItem('theme');
  }
}
