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
