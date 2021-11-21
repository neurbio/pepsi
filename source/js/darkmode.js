var isNight = new Date().getHours() >= 22 || new Date().getHours() < 7; 
(function DarkMode() {
  if( matchMedia('(prefers-color-scheme: dark)').matches || isNight || localStorage.getItem('dark') === '1') {
    if(!(isNight&&localStorage.getItem('noDark') === '1')) {
      document.body.classList.add('dark');
    }
  }
})(); // 依次判断 系统暗黑 指定时间 缓存