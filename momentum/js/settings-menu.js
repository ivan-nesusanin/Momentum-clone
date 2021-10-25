const setting = document.querySelector('.setting');
const settingMenu = document.querySelector('.setting-menu');

setting.addEventListener('click', function() {
  if (settingMenu.classList.contains('active')) {
    settingMenu.classList.remove('active')
    setting.classList.remove('active')
  } else {
    settingMenu.classList.add('active');
    setting.classList.add('active');
  }
});
