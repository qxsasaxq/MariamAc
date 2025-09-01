// --------- آراء العملاء عند التمرير ---------
function revealClients() {
  const boxes = document.querySelectorAll('.client-box');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight - 100) {
      box.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealClients);
window.addEventListener('load', revealClients);

// --------- معرض الصور ---------
const slides = document.getElementById('slides');
const slideCount = slides.children.length;
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('data-index', i);
  dot.addEventListener('click', e => {
    currentIndex = parseInt(e.target.getAttribute('data-index'));
    updateSlider();
  });
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  document.querySelectorAll('.dot')[currentIndex].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
});
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
});

// --------- نموذج الحجز ---------
const bookingForm = document.getElementById('bookingFormElement');
const successMessage = document.getElementById('successMessage');
if (successMessage) successMessage.style.display = 'none';

bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }
  const formData = new FormData(bookingForm);
  fetch("https://formspree.io/f/xwkgyjzy", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      bookingForm.reset();
      if (successMessage) {
        successMessage.style.display = "block";
        successMessage.style.color = "green";
      } else {
        window.location.href = "Thanks.html";
      }
    } else {
      alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("فشل الاتصال بالخادم.");
  });
});

// --------- تغيير ألوان H5 تلقائياً ---------
document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll('.col-md-4.mb-3 h5'); 
  const colors = [
    ['#00bcd4', '#0097a7'],  
    ['#ffb74d', '#f57c00'],  
    ['#ff8a65', '#d32f2f']   
  ];
  setInterval(function() {
    headers.forEach((header, index) => {
      const currentBackground = window.getComputedStyle(header).backgroundColor;
      if (currentBackground === colors[index][0]) {
        header.style.backgroundColor = colors[index][1];
      } else {
        header.style.backgroundColor = colors[index][0];
      }
    });
  }, 5000);
});

// --------- ظهور fade-line عند التمرير ---------
function revealFadeLines() {
  const lines = document.querySelectorAll('.fade-line');
  lines.forEach(line => {
    const top = line.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      line.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealFadeLines);
window.addEventListener('load', revealFadeLines);

// --------- تغيير ألوان fade-line كل 3 ثواني ---------
document.addEventListener("DOMContentLoaded", () => {
  const colorList = ['#0066cc', '#009688', '#4caf50', '#e91e63', '#ff9800'];
  const lines = document.querySelectorAll('.fade-line');
  lines.forEach((line, i) => {
    let index = i % colorList.length;
    line.style.color = colorList[index];
    setInterval(() => {
      index = (index + 1) % colorList.length;
      line.style.color = colorList[index];
    }, 3000);
  });
});
