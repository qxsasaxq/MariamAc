
document.addEventListener("DOMContentLoaded", () => {
    // كود التمرير السلس عند الضغط على روابط الـ Navbar لراحة تصفح العميل
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // إزاحة شريط الـ Navbar الثابت
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


function trackCallConversion(googleConversionId, conversionLabel) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': googleConversionId + '/' + conversionLabel,
            'value': 1.0,
            'currency': 'SAR'
        });
        console.log('تم بنجاح تتبع وإرسال إحالة الاتصال لجوجل أدز:', googleConversionId + '/' + conversionLabel);
    } else {
        console.warn('تنبيه: كود Google Tag لم يتم تحميله بعد في هذه الصفحة.');
    }
}


function trackWhatsappConversion(googleConversionId, conversionLabel) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': googleConversionId + '/' + conversionLabel,
            'value': 1.0,
            'currency': 'SAR'
        });
        console.log('تم بنجاح تتبع وإرسال إحالة الواتساب لجوجل أدز:', googleConversionId + '/' + conversionLabel);
    } else {
        console.warn('تنبيه: كود Google Tag لم يتم تحميله بعد في هذه الصفحة.');
    }
}
