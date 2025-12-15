


// dark node toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;

  if (!toggle) return;

  // 저장된 테마 적용
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.dataset.theme = savedTheme;
  }

  // 토글 클릭
  toggle.addEventListener('click', () => {
    const theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  });
});

