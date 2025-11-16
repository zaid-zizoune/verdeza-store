const mainImage = document.getElementById('main-img');
const sideImages = document.querySelectorAll('.side-img img');

let selectedImage = mainImage.src; // الصورة المضغوطة الافتراضية

sideImages.forEach(img => {
    // عند المرور بالماوس
    img.addEventListener('mouseover', () => {
        mainImage.src = img.src;
    });

    // عند إزالة الماوس
    img.addEventListener('mouseout', () => {
        mainImage.src = selectedImage;
    });

    // عند الضغط على الصورة
    img.addEventListener('click', () => {
        selectedImage = img.src; // حفظ الصورة المضغوطة
        mainImage.src = selectedImage;

        // إزالة class active من كل الصور
        sideImages.forEach(i => i.classList.remove('active'));
        // إضافة class active للصورة المضغوطة
        img.classList.add('active');
    });
});