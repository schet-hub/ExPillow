// Плавный скролл для навигации
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Анимация кнопок
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });
  // Открытие модального окна
document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modal').style.display = 'flex';
  });
});

// Закрытие модального окна
document.querySelector('.close-modal').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function (e) {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});

// Обработка формы
document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Ваш заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
  document.getElementById('modal').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
  // Функция для проверки видимости элемента
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Функция для обработки появления элементов
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      if (isElementInViewport(el)) {
        el.classList.add('visible'); // Добавляем класс для запуска анимации
      }
    });
  }

  // Отслеживаем прокрутку страницы
  window.addEventListener('scroll', handleScroll);

  // Запускаем проверку при загрузке страницы
  handleScroll();
});

let lastScroll = 0;
const nav = document.querySelector('nav');

// Функция для скрытия/показа меню при скролле
window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Скролл вниз — скрываем меню
    nav.classList.add('hide');
  } else {
    // Скролл вверх — показываем меню
    nav.classList.remove('hide');
  }

  lastScroll = currentScroll;
});