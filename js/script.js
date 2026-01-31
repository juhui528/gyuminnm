


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

    toggle.textContent = theme === 'dark' ? 'light' : 'dark';
  });

   $(window).on('scroll load', function () {
  $('.card').each(function (index) {
    const cardTop = $(this).offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > cardTop + 50) {
      $(this).addClass('show');

      // 겹침 & 스택 느낌
      $(this).css({
        'z-index': $('.card').length - index,
        'margin-top': index === 0 ? '0px' : `-${50}px`,
        'transform': `translateY(0) scale(${1 - index*0.02})`
      });
    }
  });
});
});