// Client reviews reveal on scroll
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

// إنشاء نقاط التمرير (dots)
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
successMessage.style.display = 'none';

bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // تحقق من صحة النموذج (مبسط)
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }

  // معالجة إرسال البيانات (يمكن تعديلها لتناسب الخادم)
  const formData = new FormData(bookingForm);
  console.log('Booking data:', Object.fromEntries(formData.entries()));

  // إظهار رسالة النجاح
  successMessage.style.display = 'block';

  // إعادة تعيين النموذج
  bookingForm.reset();
});
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
  // تحديد العناصر <h5>
  const headers = document.querySelectorAll('.col-md-4.mb-3 h5'); 

  // الألوان التي سيتم التبديل بينها
  const colors = [
    ['#00bcd4', '#0097a7'],  // لون ضمان الجودة
    ['#ffb74d', '#f57c00'],  // لون صيانة مكيفات
    ['#ff8a65', '#d32f2f']   // لون تعبئة فريون
  ];

  // تغيير الألوان كل 5 ثواني
  setInterval(function() {
    headers.forEach((header, index) => {
      // الحصول على اللون الحالي
      const currentBackground = window.getComputedStyle(header).backgroundColor;
      
      // التبديل بين اللونين
      if (currentBackground === colors[index][0]) {
        header.style.backgroundColor = colors[index][1];
      } else {
        header.style.backgroundColor = colors[index][0];
      }
    });
  }, 5000);  // التغيير كل 5 ثواني
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingFormElement");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    // طباعة البيانات قبل الإرسال
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    fetch("https://formspree.io/f/xqalaozy", {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        successMessage.style.display = "block";
        successMessage.style.color = "green";
      } else {
        alert("حدث خطأ في الإرسال، حاول مرة أخرى.");
      }
    })
    .catch(error => {
      alert("تعذر الاتصال بالخادم.");
      console.error("Form Error:", error);
    });
  });
});
// ظهور الأسطر عند التمرير
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

// تغيير الألوان تلقائيًا كل 20 ثانية
const colorList = ['#0066cc', '#009688', '#4caf50', '#e91e63', '#ff9800'];
let colorIndex = 0;

setInterval(() => {
  const lines = document.querySelectorAll('.fade-line');
  colorIndex = (colorIndex + 1) % colorList.length;
  lines.forEach(line => {
    line.style.color = colorList[colorIndex];
  });
}, 10000); // كل 20 ثانية
document.getElementById("bookingFormElement").addEventListener("submit", function (e) {
 //e.preventDefault();
window.location.href = "thanks.html";
  const form = e.target;
  const formData = new FormData(form);

  // مثال إرسال إلى Formspree (بدون إدخال JS في HTML)
  fetch("https://formspree.io/f/xwkgyjzy", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  }).then(function (response) {
    if (response.ok) {
      window.location.href = "thanks.html";
    } else {
      alert("حدث خطأ أثناء إرسال البيانات. حاول مرة أخرى.");
    }
  }).catch(function (error) {
    alert("فشل الاتصال بالخادم.");
  });
});



