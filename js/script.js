document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const token = "7796024449:AAEaMCSybvc_-uFwE1M2jhNLtl_PHLprCjY";
  const chatIds = ["729406890", "2028666270"]; // Укажите идентификаторы получателей
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const text = `
  📌 Новая заявка с сайта:
  👤 Имя: ${name}
  📞 Телефон: ${phone}
  ✉️ Email: ${email}
  📝 Сообщение: ${message}
  `;

  try {
    // Отправляем сообщение каждому получателю
    for (const chatId of chatIds) {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
    }

    alert("Сообщение успешно отправлено двум получателям!");
    console.log("Успешно отправлено!");
    document.getElementById("contact-form").reset();
  } catch (error) {
    alert("Не удалось отправить сообщение. Проверьте настройки.");
    console.error("Ошибка отправки:", error);
  }
});


// Функционал слайдера
document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const cards = document.querySelectorAll('.testimonial-card');
  const btnPrev = document.querySelector('.slider-btn.prev');
  const btnNext = document.querySelector('.slider-btn.next');

  let currentIndex = 0;

  const updateSliderPosition = () => {
    const cardWidth = cards[0].offsetWidth;
    const gap = 20; // Зазор между карточками
    const offset = -(cardWidth + gap) * currentIndex;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
  };

  btnNext.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
});

document.getElementById('showSliderBtn').addEventListener('click', function() {
  const sliderContainer = document.querySelector('.slider-container');
  const button = document.getElementById('showSliderBtn');
  
  // Показать слайдер
  sliderContainer.style.display = 'flex'; 
  button.style.display = 'none'; // Скрыть кнопку после показа слайдера
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".service-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const serviceId = button.getAttribute("data-service");
      const info = document.getElementById(`service-${serviceId}`);
      const servicesSection = document.querySelector(".services");

      // Закрываем все открытые блоки, кроме текущего
      document.querySelectorAll(".service-info").forEach((otherInfo) => {
        if (otherInfo !== info) {
          otherInfo.classList.remove("open");
        }
      });

      // Переключаем состояние текущего блока
      info.classList.toggle("open");

      // Увеличиваем или уменьшаем отступы секции
      if (info.classList.contains("open")) {
        servicesSection.classList.add("open");
      } else {
        servicesSection.classList.remove("open");
      }
    });
  });
});
