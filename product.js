const products = {
  "PR1": {
    name: "Fleurs de cerisier Rose & Blanc",
    nameAR: "Fleurs de lavande Violet",
    descriptionFR: "De magnifiques fleurs artificielles en soie bicolore (rose et blanc), parfaites pour décorer votre maison ou bureau.",
    descriptionAR: "أزهار صناعية من الحرير ثنائية اللون (أبيض ووردي) لإطلالة طبيعية وأنيقة.",
    priceAfter: "550.00 DH",
    priceBefore: "800.00 DH",
    discount: "40%",
    mainImg: "products-img/PR1/pr1-img1.jpeg",
    sideImgs: [
      "products-img/PR1/pr1-img1.jpeg",
      "products-img/PR1/pr1-img2.jpeg",
      "products-img/PR1/pr1-img3.jpeg"
    ],
    features: `
      • أزهار صناعية من الحرير ثنائية اللون (أبيض ووردي) لإطلالة طبيعية وأنيقة
      <br>• ارتفاع مثالي: 6 أقدام (183 سم)
      <br>• أصيص منسوج أنيق مع حامل خشبي رباعي الأرجل
      <br>• مثالية للمنزل، المكتب، الحفلات
      <br>• لا تحتاج لأي صيانة
    `
  },

  "PR2": {
    name: "Fleurs de lavande Violet",
    nameAR: "Fleurs de lavande Violet",
    descriptionFR: "Lavande artificielle violette pour une décoration élégante.",
    descriptionAR: "لافندر صناعي بنفسجي لإطلالة أنيقة.",
    priceAfter: "400.00 DH",
    priceBefore: "600.00 DH",
    discount: "30%",
    mainImg: "products-img/PR2/pr2-img1.jpeg",
    sideImgs: [
      "products-img/PR2/pr2-img1.jpeg",
      "products-img/PR2/pr2-img2.jpeg",
      "products-img/PR2/pr2-img3.jpeg"
    ],
    features: `
      • لافندر صناعي عالي الجودة
      <br>• ارتفاع مناسب لتزيين أي مكان
      <br>• أصيص أنيق ومتعدد الاستخدامات
      <br>• مثالية للمنزل والمكتب
      <br>• سهلة الصيانة
    `
  }
};


// ----------------------------
//    اختيار المنتج من الرابط
// ----------------------------
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id") || "PR1";
const product = products[productId];


// ----------------------------
//       ملء البيانات
// ----------------------------
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-name-ar").textContent = product.nameAR;
document.getElementById("description-fr").innerHTML = product.descriptionFR;
document.getElementById("description-ar").innerHTML = product.descriptionAR;
document.getElementById("price-after").textContent = product.priceAfter;
document.getElementById("price-before").textContent = product.priceBefore;
document.getElementById("discount").textContent = `خصم بقيمة ${product.discount}`;
document.getElementById("main-img").src = product.mainImg;

// ----------------------------
//       الصور الجانبية
// ----------------------------
const sideImgsContainer = document.getElementById("side-imgs");
sideImgsContainer.innerHTML = "";

// الصورة الأساسية المختارة
let selectedMainImage = product.mainImg;

// أنشئ صور side + الأحداث
product.sideImgs.forEach(img => {
  const image = document.createElement("img");
  image.src = img;
  image.alt = product.name;

  // إذا كانت هي الصورة الأساسية، ضع active
  if (img === selectedMainImage) {
    image.classList.add("active");
  }

  // عند الضغط → تصبح الرئيسية ثابتة وتبقى active
  image.addEventListener("click", () => {
    selectedMainImage = img;
    document.getElementById("main-img").src = img;

    // إزالة active من كل الصور
    document.querySelectorAll("#side-imgs img").forEach(i => i.classList.remove("active"));

    // إضافة active للصورة المضغوطة عليها
    image.classList.add("active");
  });

  // عند المرور → تغير مؤقت (hover)
  image.addEventListener("mouseenter", () => {
    document.getElementById("main-img").src = img;
  });

  // عند الخروج → ترجع للثابتة
  image.addEventListener("mouseleave", () => {
    document.getElementById("main-img").src = selectedMainImage;
  });

  sideImgsContainer.appendChild(image);
});

// ----------------------------
//       الميزات
// ----------------------------
document.getElementById("features").innerHTML = product.features;