if (typeof emailjs === "undefined") {
    console.error("EmailJS SDK لم يتم تحميله!");
} else {
    emailjs.init("FF-xWGtx6qAxTsxfu");
}
const products = {
  "PR1": {
    name: "Fleurs de cerisier Rose & Blanc apporte une touche élégante et naturelle à n’importe quel espace.",
    nameAR: "شجرة الكرز الاصطناعية بألوان وردي وأبيض تضيف لمسة أنيقة وطبيعية لأي مكان",
    descriptionFR: "Fleurs artificielles en soie bicolores (blanc et rose) au design soigné, apportant une touche naturelle et élégante, idéales pour une décoration raffinée à la maison, au bureau ou lors d’événements spéciaux.",
    descriptionAR: "أزهار صناعية من الحرير بألوان مزدوجة (أبيض ووردي) بتصميم متقن يضفي لمسة طبيعية وأنيقة، مثالية للديكور الراقي داخل المنازل والمكاتب والمناسبات الخاصة.",
    priceAfter: "550.00 DH",
    priceBefore: "800.00 DH",
    discount: "30%",
    mainImg: "products-img/PR1/pr1-img1.jpeg",
    sideImgs: [
      "products-img/PR1/pr1-img1.jpeg",
      "products-img/PR1/pr1-img2.jpeg",
      "products-img/PR1/pr1-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
      • أزهار صناعية من الحرير ثنائية اللون (أبيض ووردي) لإطلالة طبيعية وأنيقة
      <br>• ارتفاع مثالي: 6 أقدام (183 سم)
      <br>• أصيص منسوج أنيق مع حامل خشبي رباعي الأرجل
      <br>• مثالية للمنزل، المكتب، الحفلات
      <br>• لا تحتاج لأي صيانة
    `
  },

  "PR2": {
    name: "Fleurs de cerisier Rose & Blanc apporte une touche élégante et naturelle à n’importe quel espace.",
    nameAR: "شجرة الكرز الاصطناعية بألوان وردي وأبيض تضيف لمسة أنيقة وطبيعية لأي مكان",
    descriptionFR: "Fleurs artificielles en soie bicolores (blanc et rose) au design soigné, apportant une touche naturelle et élégante, idéales pour une décoration raffinée à la maison, au bureau ou lors d’événements spéciaux.",
    descriptionAR: "أزهار صناعية من الحرير بألوان مزدوجة (أبيض ووردي) بتصميم متقن يضفي لمسة طبيعية وأنيقة، مثالية للديكور الراقي داخل المنازل والمكاتب والمناسبات الخاصة.",
    priceAfter: "599.00 DH", 
    priceBefore: "900.00 DH",
    discount: "33%",
    mainImg: "products-img/PR2/pr2-img1.jpeg",
    sideImgs: [
      "products-img/PR2/pr2-img1.jpeg",
      "products-img/PR2/pr2-img2.jpeg",
       "products-img/PR2/pr2-img3.jpeg",
      "products-img/PR2/pr2-img4.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
      • أزهار صناعية من الحرير ثنائية اللون (أبيض ووردي) لإطلالة طبيعية وأنيقة
      <br>• ارتفاع مثالي: 6 أقدام (183 سم)
      <br>• أصيص منسوج أنيق مع حامل خشبي رباعي الأرجل
      <br>• مثالية للمنزل، المكتب، الحفلات
      <br>• لا تحتاج لأي صيانة
    `
  },

"PR3": {
    name: "Fleurs de cerisier Blanc apporte une touche élégante et naturelle à n’importe quel espace.",
    nameAR: "شجرة الكرز الاصطناعية بلون أبيض تضيف لمسة أنيقة وطبيعية لأي مكان",
    descriptionFR: "Fleurs artificielles en soie bicolore blanc au design soigné, apportant une touche naturelle et élégante, idéales pour une décoration raffinée à la maison, au bureau ou lors d’événements spéciaux.",
    descriptionAR: "أزهار صناعية من الحرير بلون  أبيض  بتصميم متقن يضفي لمسة طبيعية وأنيقة، مثالية للديكور الراقي داخل المنازل والمكاتب والمناسبات الخاصة.",
    priceAfter: "350.00 DH", 
    priceBefore: "500.00 DH",
    discount: "30%",
    mainImg: "products-img/PR3/pr3-img1.jpeg",
    sideImgs: [
      "products-img/PR3/pr3-img1.jpeg",
      "products-img/PR3/pr3-img2.jpeg",
      "products-img/PR3/pr3-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
      • أزهار صناعية من الحرير اللون أبيض لإطلالة طبيعية وأنيقة
      <br>• ارتفاع مثالي: 6 أقدام (183 سم)
      <br>• أصيص منسوج أنيق مع حامل خشبي رباعي الأرجل
      <br>• مثالية للمنزل، المكتب، الحفلات
      <br>• لا تحتاج لأي صيانة
    `
  },

"PR4": {
    name: "Fleurs de cerisier Rose apporte une touche élégante et naturelle à n’importe quel espace.",
    nameAR: "شجرة الكرز الاصطناعية بلون وردي تضيف لمسة أنيقة وطبيعية لأي مكان",
    descriptionFR: "Fleurs artificielles en soie bicolore rose au design soigné, apportant une touche naturelle et élégante, idéales pour une décoration raffinée à la maison, au bureau ou lors d’événements spéciaux.",
    descriptionAR: "أزهار صناعية من الحرير بلون وردي بتصميم متقن يضفي لمسة طبيعية وأنيقة، مثالية للديكور الراقي داخل المنازل والمكاتب والمناسبات الخاصة.",
    priceAfter: "350.00 DH", 
    priceBefore: "500.00 DH",
    discount: "30%",
    mainImg: "products-img/PR4/pr4-img1.jpeg",
    sideImgs: [
      "products-img/PR4/pr4-img1.jpeg",
      "products-img/PR4/pr4-img2.jpeg",
      "products-img/PR4/pr4-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
      • أزهار صناعية من الحرير ثنائية اللون (أبيض ووردي) لإطلالة طبيعية وأنيقة
      <br>• ارتفاع مثالي: 6 أقدام (183 سم)
      <br>• أصيص منسوج أنيق مع حامل خشبي رباعي الأرجل
      <br>• مثالية للمنزل، المكتب، الحفلات
      <br>• لا تحتاج لأي صيانة
    `
  },

"PR5": {
    name: "Pack Trio ,Ensemble de plantes décoratives artificielles de luxe – Une touche naturelle durable.    ",
    nameAR: "حزمة ثلاثية,مجموعة نباتات زينة اصطناعية فاخرة – لمسة طبيعية تدوم  ",
    descriptionFR: " Sublimez votre espace avec cet ensemble soigneusement sélectionné de plantes artificielles haut de gamme, conçues pour offrir une présence naturelle élégante sans aucun effort d’entretien. Cette collection combine modernité et chaleur pour un décor intérieur raffiné, que ce soit à la maison ou au bureau.  ",
    descriptionAR: " ارتقِ بجمال مساحتك مع هذه المجموعة المختارة بعناية من النباتات الاصطناعية عالية الجودة، المصممة لتمنحك حضورًا طبيعيًا راقيًا دون أي عناء في العناية. تجمع المجموعة بين الأناقة العصرية ودفء الطبيعة لتكون خيارًا مثاليًا لديكور منزلي أو مكتبي عصري .  ",
    priceAfter:  "699.00 DH",
    priceBefore: "1000.00 DH",
    discount: "30%",
    mainImg: "products-img/PR5/pr5-img1.jpeg",
    sideImgs: [
      "products-img/PR5/pr5-img1.jpeg",
      "products-img/PR5/pr5-img2.jpeg",
      "products-img/PR5/pr5-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
  	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان
   <br> •	شجرة خريف بأوراق ذهبية وبرتقالية تمنح المكان دفئًا ولمسة لونية مبهجة.
<br>	•	نبتة بأوراق خضراء داكنة وكثيفة تضيف عمقًا وأناقة.
<br>	•	نبتة متوسطة بأوراق منقوشة تقدّم تباينًا بصريًا ونقوشًا جذابة.
• مراكن (Planters) عصرية مرتفعة:
مراكن من الخوص المنسوج باللونين الأسود والطبيعي، مثبتة على قواعد خشبية فاتحة، لدمج رائع بين الأسلوب البوهيمي (Bohemian) والاسكندنافي (Scandinavian)، مع إبراز النباتات على مستوى العين لإضافة حضور بصري قوي.

      <br>• مثالية للمنزل، المكتب، الحفلات
    `
  },

"PR6": {
    name: "Arbre d’érable artificiel (Maple Tree) avec cache-pot « Boho » à trois pieds ",
    nameAR: " شجرة القيقب الاصطناعية (Maple Tree), مع مركن “بوهو” ثلاثي الأرج ",
    descriptionFR: "Ajoutez une touche raffinée d’ambiance automnale et d’élégance moderne à votre espace avec cet arbre d’érable artificiel conçu comme une pièce maîtresse remarquable. Ses couleurs chaudes et sa texture riche créent une présence visuelle qui apporte vie et charme à tout intérieur.   ",
    descriptionAR: "أضِف لمسة فاخرة من أجواء الخريف والأناقة العصرية إلى أي مساحة مع شجرة القيقب الاصطناعية المصممة لتكون قطعة محورية لافتة. تجمع هذه الشجرة بين الألوان الدافئة والنسيج الغني لتخلق حضورًا بصريًا يضفي حياة وجمالًا على المكان.   ",
    priceAfter:"299.99 DH",
    priceBefore:   "500.00 DH",
    discount: "40%",
    mainImg: "products-img/PR6/pr6-img1.jpeg",
    sideImgs: [
      "products-img/PR6/pr6-img1.jpeg",
      "products-img/PR6/pr6-img2.jpeg",
      "products-img/PR6/pr6-img3.jpeg"
    ],
    features:`	
    المميزات: 
الاسم: شجرة القيقب الاصطناعية بأوراق خريفية.
• الارتفاع: تقريبًا 100–110 سم (حسب الموديل).
• المواد: أوراق بلاستيكية عالية الجودة، جذع صناعي، خوص منسوج، خشب طبيعي.
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    
  • ألوان خريف نابضة بالحياة:
أوراق بتدرجات الأحمر والبرتقالي والذهبي، مُشكّلة باحتراف لتعكس جمالية القيقب في ذروة موسمه، مما يخلق إحساسًا دافئًا ومفعمًا بالطاقة.<br>

• واقعية فائقة:
مصنوعة من مواد عالية الجودة تمنح الأوراق والجذع مظهرًا طبيعيًا وملمسًا واقعيًا، مع ثبات في اللون وجمال يدوم دون أي صيانة.<br>

• مركن “بوهو” أنيق:
يأتي المزهر داخل مركن من الخوص المنسوج يدويًا باللونين الطبيعي والأسود، مع حامل خشبي ثلاثي الأرجل باللون الفاتح. تصميم يجمع بين الروح البوهيمية واللمسة الاسكندنافية ليتناسب مع الديكورات العصرية.
      <br>• مثالية للمنزل، المكتب، الحفلات
 
    `
  },

"PR7": {
    name: "Ficus Benjamina artificiel aux feuilles denses et sombres avec cache-pot bohème en bois – Une touche de verdure élégante et durable    ",
    nameAR: "نبتة Ficus Benjamina اصطناعية بأوراق داكنة كثيفة مع مركن بوهيمي خشبي – فخامة طبيعية تدوم .   ",
    descriptionFR: "Apportez une note de raffinement naturel à votre intérieur avec ce Ficus Benjamina artificiel au design haut de gamme. Son feuillage sombre, dense et d’un réalisme impressionnant offre une présence visuelle élégante, sans nécessiter le moindre entretien, ce qui en fait un choix idéal pour les décors modernes et contemporains.   ",
    descriptionAR: "أضف لمسة خضراء راقية إلى أي مساحة داخلية مع نبتة Ficus Benjamina الاصطناعية ذات التصميم الفاخر. تجمع بين الأوراق الداكنة الكثيفة والمظهر الطبيعي الواقعي، مما يجعلها خيارًا مثاليًا للديكور العصري دون الحاجة لأي عناية.   ",
    priceAfter: "249.99 DH",
    priceBefore:  "350.00 DH",
    discount: "30%",
    mainImg: "products-img/PR7/pr7-img1.jpeg",
    sideImgs: [
      "products-img/PR7/pr7-img1.jpeg",
      "products-img/PR7/pr7-img2.jpeg",
      "products-img/PR7/pr7-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق واقعية غنية باللون:
تتميز أوراق Ficus Benjamina الداكنة بتوزيع كثيف وتفاصيل دقيقة تحاكي النباتات الطبيعية، مع خامات عالية الجودة تحافظ على شكلها وأناقتها طوال العام.<br>

• مركن بوهيمي أنيق:<br>
تأتي النبتة داخل وعاء من الخوص المنسوج بلونين متدرجين (الطبيعي + البني/الأسود الداكن) لمنح تأثير بصري فاخر.<br>
مزودة بحامل خشبي ثلاثي الأرجل (Tripod Stand) يعزز من حضورها ويرفعها إلى مستوى مثالي داخل الغرفة.<br>

• جمال دائم:
بدون ري، بدون ضوء شمس، وبدون مجهود. تبقى النبتة بكامل أناقتها ونضارتها على مدار السنة، مما يجعلها مثالية للمكاتب والمنازل.
    `
  },


"PR8": {
    name: "Fittonia artificielle avec cache-pot bohème surélevé – Une touche décorative élégante et compacte    ",
    nameAR: "نبتة الفيتونيا الاصطناعية (Fittonia) مع مركن “بوهو” مرتفع – لمسة زخرفية أنيقة وصغيرة الحجم    ",
    descriptionFR: "Apportez des détails raffinés à votre espace avec cette Fittonia artificielle, soigneusement conçue pour reproduire la beauté de la célèbre “plante nerveuse”. Avec son feuillage décoratif et ses couleurs vibrantes, elle apporte une touche de fraîcheur et de vitalité sans nécessiter le moindre entretien.   ",
    descriptionAR: "أضف جمال التفاصيل الدقيقة إلى مساحتك مع نبتة Fittonia الاصطناعية المصممة بعناية لتجسيد روعة “نبتة الأعصاب” الشهيرة. بأوراقها المزخرفة وألوانها المميزة، تمنحك هذه القطعة لمسة من الحيوية والدفء دون الحاجة لأي عناية.   ",
    priceAfter: "229.99 DH", 
    priceBefore: "300.00 DH",
    discount: "23%",
    mainImg: "products-img/PR8/pr8-img1.jpeg",
    sideImgs: [
      "products-img/PR8/pr8-img1.jpeg",
      "products-img/PR8/pr8-img2.jpeg",
      "products-img/PR8/pr8-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
 • أوراق فيتونيا نابضة بالتفاصيل:
أوراق خضراء داكنة مزدانة بعروق بيضاء متشابكة تمنحها مظهرًا غنيًا وملمسًا بصريًا فريدًا. تصميم واقعي يجذب الأنظار فورًا.<br>

• حجم مثالي للزوايا الصغيرة:<br>
بفضل تصميمها المدمج، تعد خيارًا مثاليًا للمكاتب، الرفوف، الطاولات الجانبية أو أي مساحة صغيرة تحتاج إلى لمسة خضرة بدون ازدحام.<br>

• مركن بوهيمي مرتفع:<br>
تأتي النبتة داخل وعاء من الخوص المنسوج بدرجات طبيعية، مثبت على حامل خشبي ثلاثي الأرجل باللون الفاتح، مما يضيف توازنًا بصريًا وأناقة عصرية
  
     
    `
  },

"PR9": {
    name: "Érable japonais orange (Japanese Maple Orange) Une touche automnale luxueuse    ",
    nameAR: "شجرة القيقب الياباني ألبرتقالية (Japanese Maple Orange) لمسة خريفية فاخرة.   ",
    descriptionFR: "Apportez une note dramatique inspirée des jardins d’Extrême-Orient à votre intérieur avec cet érable japonais orange artificiel. Son design élégant en fait une pièce maîtresse captivante, tandis que ses couleurs automnales éclatantes et saturées offrent un rendu visuel exceptionnel.   ",
    descriptionAR: "أضف لمسة درامية مستوحاة من حدائق الشرق الأقصى إلى ديكور منزلك أو مكتبك مع شجرة Japanese Maple Orange الاصطناعية. تصميمها الأنيق يجعلها قطعة مركزية تلفت الأنظار، بينما تجسد ألوان الخريف النابضة بالحياة بأفضل صورة ممكنة.   ",
    priceAfter: "320.00 DH",
    priceBefore:  "450.00 DH",
    discount: "30%",
    mainImg: "products-img/PR9/pr9-img1.jpeg",
    sideImgs: [
      "products-img/PR9/pr9-img1.jpeg",
      "products-img/PR9/pr9-img2.jpeg",
      "products-img/PR9/pr9-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • اسم مميز: Japanese Maple Orange (القيقب الياباني البرتقالي).<br>
• تصميم أصلي للقيقب الياباني:<br>
تحاكي الشجرة الشكل الرشيق للقيقب الياباني، بأوراق رفيعة مفصصة تمنحها جمالًا فريدًا وطابعًا طبيعيًا راقيًا.<br>

• تدرج لوني جذاب:<br>
أوراق برتقالية نارية تتداخل مع لمسات صفراء وذهبية، لتعكس أوج جمال موسم الخريف وتضيف دفئًا بصريًا لأي مساحة.<br>

• مركن راقٍ ومتعدد الخيارات:<br>
تأتي الشجرة إما في مركن خوص بوهيمي على حامل خشبي لخلق مظهر طبيعي ودافئ، أو في مركن سيراميك أبيض منقوش لمظهر مينيمالي ونظيف، حسب التفضيل والمساحة.<br>

• جودة فائقة:<br>
مصنوعة من مواد متينة مقاومة للبهتان، تضمن بقاء اللون مشرقًا والشجرة محافظة على شكلها دون أي جهد للعناية.<br>

• استخدام متعدد:<br>
مثالية لتزيين الزوايا المشرقة، بجانب المدافئ، أو كنقطة تركيز فاخرة في المكاتب والمطاعم الراقية.
  
     
    `
  },

"PR10": {
    name: "Palmier artificiel (Palm Tree) Une touche tropicale élégante    ",
    nameAR:" نبتة النخيل الاصطناعية (Palm Tree) لمسة استوائية أنيقة. ",
    descriptionFR: "Apportez l’ambiance des vacances tropicales à votre maison ou bureau avec ce palmier artificiel, inspiré du palmier Areca ou du Parlor Palm. Son design réaliste et la densité de son feuillage apportent à tout espace un sentiment d’ouverture, de sérénité et de fraîcheur.   ",
    descriptionAR: "أضف أجواء العطلات الاستوائية إلى منزلك أو مكتبك مع نخلة الزينة الاصطناعية التي تحاكي نخلة الأريكا (Areca Palm) أو نخلة بارلور (Parlor Palm). تصميمها الواقعي وكثافة أوراقها يمنحان أي مساحة شعورًا بالرحابة والهدوء والانتعاش.   ",
    priceAfter: "369.99 DH", 
    priceBefore: "500.00 DH",
    discount: "30%",
    mainImg: "products-img/PR10/pr10-img1.jpeg",
    sideImgs: [
      "products-img/PR10/pr10-img1.jpeg",
      "products-img/PR10/pr10-img2.jpeg",
      "products-img/PR10/pr10-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
   <br> • طابع استوائي فاخر:
أوراق ريشية كثيفة ومنسدلة قليلاً، تحاكي بدقة نخلة الأريكا الطبيعية، مع كثافة تضمن تغطية رائعة ومظهراً غنيًا بالخضرة.<br>

• جذوع واقعية:<br>
جذوع رقيقة متعددة باللون البني الداكن تضيف واقعية وتميز للنبتة.<br>

• مركن عصري مينيمالي:
مزروعة في وعاء سيراميك أبيض منقوش بخطوط طولية، يوفر قاعدة أنيقة ومستقرة ويضيف لمسة تصميمية عصرية.<br>

• تفاصيل مصقولة:
قاعدة النبتة مغطاة بالحصى الأبيض الزخرفي لتعزيز المظهر النظيف والمصقول، جاهزة للعرض الفوري.<br>

• الحجم والاستخدام:
مثالية كقطعة محورية في غرف المعيشة، أو لملء الفراغات الطويلة في المداخل والمكاتب، لتضفي طابعًا استوائيًا منعشًا على أي مساحة
  
     
    `
  },

"PR11": {
    name: "Palmier tropical avec touche moderne et pot élégant.    ",
    nameAR: " شجرة نخيل استوائية بلمسة عصرية وأصيص أنيق.  ",
    descriptionFR: "Apportez une touche de fraîcheur et de vitalité tropicale à la décoration de votre maison ou bureau avec cette superbe plante. Ce palmier artificiel a été conçu avec un soin exceptionnel pour imiter la nature, avec ses feuilles pennées vertes aux longueurs variées, offrant un feuillage dense et réaliste,La plante est présentée dans un pot beige terreux au design polygonal moderne, recouvert d’une couche de gravier blanc éclatant pour un rendu élégant et soigné. Elle constitue le choix idéal pour remplir les coins vides et apporter une touche de nature sans aucun effort d’entretien quotidien.",
    descriptionAR: "أضف لمسة من الحيوية والانتعاش الاستوائي إلى ديكور منزلك أو مكتبك مع هذه النبتة الرائعة. صُممت هذه النخلة بعناية فائقة لتحاكي الطبيعة، حيث تتميز بأوراقها الريشية الخضراء الممتدة وأطوالها المتفاوتة التي تمنحها مظهراً كثيفاً وواقعياً. تأتي النبتة في أصيص (حوض) باللون البيج الترابي ذو تصميم مضلع عصري، ومغطى بطبقة من الحصى الأبيض الناصع لإضفاء طابع من الفخامة والنظافة. هي الخيار الأمثل لملء الزوايا الفارغة وإضافة روح الطبيعة دون عناء العناية اليومية.   ",
    priceAfter: "199.99 DH", 
    priceBefore: "250.00 DH",
    discount: "20%",
    mainImg: "products-img/PR11/pr11-img1.jpeg",
    sideImgs: [
      "products-img/PR11/pr11-img1.jpeg",
      "products-img/PR11/pr11-img2.jpeg",
      "products-img/PR11/pr11-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • تصميم واقعي: أوراق وسيقان محاكاة بدقة للنخيل الطبيعي، تمنح أي مساحة مظهرًا حيًا وراقيًا.<br>
• جاهزة للعرض: تأتي النبتة مزروعة في حوض أنيق مع حصى زخرفي، لتصبح قطعة ديكور متكاملة دون أي تجهيز إضافي.<br>
• متعددة الاستخدامات: مثالية للمنازل، الفنادق، المكاتب التجارية، أو أي مكان يحتاج لمسة استوائية منعشة.<br>
• ديكور دائم: خضرة اصطناعية تدوم طوال العام دون ذبول أو ري، تمنحك جمال الطبيعة دون عناء.
  
    `
  },

"PR12": {
    name: "Palmier Areca de Luxe – Une touche tropicale élégante    ",
    nameAR: "نخلة الأريكا الفاخرة (Areca Palm) – لمسة استوائية راقية   ",
    descriptionFR: "Apportez une touche de luxe et d’ambiance tropicale à votre maison ou bureau avec ce magnifique palmier Areca artificiel. Cette plante a été conçue avec soin pour être la solution idéale afin de remplir les coins des pièces et des bureaux avec une végétation verdoyante, sans aucun effort.   ",
    descriptionAR: "أضف لمسة من الفخامة والطابع الاستوائي إلى منزلك أو مكتبك مع نخلة الأريكا الاصطناعية الرائعة. تم تصميم هذه النبتة بعناية لتكون الحل الأمثل لملء زوايا الغرف والمكاتب بحيوية اللون الأخضر دون أي عناء.   ",
    priceAfter: "199.99 DH",
    priceBefore: "250.00 DH",
    discount: "20%",
    mainImg: "products-img/PR12/pr12-img1.jpeg",
    sideImgs: [
      "products-img/PR12/pr12-img1.jpeg",
      "products-img/PR12/pr12-img2.jpeg",
      "products-img/PR12/pr12-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • تصميم ثلاثي السيقان (Triple Trunk): تحتوي النبتة على ثلاثة جذوع رئيسية بأطوال متفاوتة، مغطاة بنسيج ليفي بني يحاكي لحاء النخل الطبيعي بدقة، مما يمنحها مظهرًا كثيفًا وواقعيًا.<br>

• سعف ريشي حيوي: أوراق خضراء زاهية تتفرع بشكل مقوس وأنيق (Arching Fronds), مما يخلق شعورًا بالاتساع والراحة البصرية في المكان.<br>

• مركن أبيض عصري فاخر: تأتي النبتة جاهزة للعرض في حوض أسطواني أبيض مع نقوش خطية متموجة (Ribbed Texture), يمنحها مظهرًا مودرن ونظيفًا يناسب كافة ألوان الديكور.<br>

• لمسة نهائية متقنة: سطح الحوض مغطى بأحجار بيضاء ناعمة، لإضفاء إحساس بالنظافة والترتيب وتعزيز ثبات النبتة.<br>

•أماكن مناسبة للعرض:
مثالية كقطعة ديكور قائمة بذاتها (Floor Plant) في زوايا غرفة المعيشة، بجانب وحدة التلفاز، أو في مداخل الشركات والمكاتب لإضفاء انطباع ترحيبي أنيق وعصري.
  
    
    `
  },

"PR13": {
    name: "Érable “Bronze” (Autumn Brown Maple) – Une touche automnale chaleureuse    ",
    nameAR: "شجرة القيقب “البرونزية” (Autumn Brown Maple) – لمسة خريفية دافئة   ",
    descriptionFR: "Apportez une ambiance rustique, élégante et chaleureuse avec cet érable artificiel aux feuilles brunes et cuivrées. Cette version utilise des nuances de tons terreux riches, offrant à votre espace une sensation de luxe et de classicisme, sans couleurs trop vives.   ",
    descriptionAR: "أضف طابعًا ريفيًا أنيقًا ودافئًا مع شجرة القيقب الاصطناعية ذات الأوراق البنية والنحاسية. هذه النسخة تعتمد على تدرجات لونية ترابية غنية تمنح المكان إحساسًا بالفخامة والكلاسيكية دون ألوان صارخة.   ",
    priceAfter:"320.00 DH",
    priceBefore:  "450.00 DH",
    discount: "30%",
    mainImg: "products-img/PR13/pr13-img1.jpeg",
    sideImgs: [
      "products-img/PR13/pr13-img1.jpeg",
      "products-img/PR13/pr13-img2.jpeg",
      "products-img/PR13/pr13-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    •  تدرجات البني والنحاسي: أوراق الشجرة مزجت بين البني المحمر (Russet), البرونزي، ولمسات ذهبية داكنة، محاكية أوراق الشجر الطبيعية في عمق الخريف لمنظر واقعي ومتناغم.<br>
 • أناقة هادئة: يمنح اللون البني شعورًا بالهدوء والرسوخ، ما يجعل الشجرة مثالية للمكاتب الرسمية، الزوايا الكلاسيكية، أو الغرف ذات الألوان الهادئة مثل البيج والكريمي.<br>

 • تباين أنيق مع المركن الأبيض: يبرز اللون البني الداكن للأوراق مع الحوض الأبيض المودرن، ما يخلق تباينًا بصريًا جذابًا يجمع بين دفء الطبيعة وبرودة التصميم الحديث.<br>

• التنسيق المقترح:
قطعة مثالية للديكورات التي تعتمد على الألوان الترابية، الأثاث الخشبي، أو الجلد البني، لتكون عنصرًا مركزيًا يضفي لمسة خريفية راقية على المكان.<br>
  
    
    `
  },

"PR14": {
    name: "Artificial Ficus Banyan Plant – A Luxurious Natural Touch    ",
    nameAR: "نبتة Ficus Banyan الاصطناعية –  لمسة طبيعية وفخمة .   ",
    descriptionFR: " Add a sense of freshness and natural elegance to your home or office with this artificial Ficus Banyan plant. Its dense design and large, glossy leaves combine realistic beauty with refined style, giving any space a lively and vibrant feel without the need for any maintenance.  ",
    descriptionAR: "أضف حيوية وأناقة طبيعية إلى منزلك أو مكتبك مع نبتة Ficus Banyan الاصطناعية. تصميمها الكثيف وأوراقها الكبيرة واللامعة يجمع بين الجمال الواقعي والفخامة، ليمنح أي مساحة شعورًا بالحياة والانتعاش دون أي عناء للعناية.   ",
    priceAfter: "320.00 DH",
    priceBefore: "450.00 DH",
    discount: "30%",
    mainImg: "products-img/PR14/pr14-img1.jpeg",
    sideImgs: [
      "products-img/PR14/pr14-img1.jpeg",
      "products-img/PR14/pr14-img2.jpeg",
      "products-img/PR14/pr14-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • تصميم واقعي: أوراق كثيفة ولامعة تحاكي نبتة الفيكوس الطبيعية بأدق التفاصيل.<br>
• مركن عصري وجاهز للعرض: مزروعة في حوض أنيق مع حصى زخرفي، لتصبح قطعة ديكور متكاملة جاهزة للعرض.<br>
• استخدام متعدد: مثالية للمنزل، المكتب، المداخل، أو أي زاوية تحتاج لمسة طبيعية دائمة.<br>
• صيانة صفرية: خضرة دائمة طوال العام دون الحاجة للري أو التعرض للشمس، لتوفر لك جمال الطبيعة بلا مجهود.<br>
  
    • مثالية للمنزل، المكتب، الحفلات
     
    `
  },

"PR15": {
    name: " Ficus Banyan / Elastica Tree – Contemporary Elegance in Every Detail   ",
    nameAR: "شجرة الفيكس بانيان (Ficus Banyan / Elastica) – فخامة عصرية بكل تفاصيلها   ",
    descriptionFR: " Add a bold architectural touch and refined aesthetic to your space with the Ficus Banyan tree, featuring broad, luxurious leaves and a visually rich texture. This plant represents true modern elegance, offering a strong presence that instantly elevates any room with sophistication and character.  ",
    descriptionAR: "أضف عمقاً جمالياً وطابعاً معمارياً جريئاً إلى مساحتك مع شجرة الفيكس بانيان ذات الأوراق العريضة والملمس الفاخر. تعتبر هذه الشجرة رمزاً للأناقة الحديثة (Modern Elegance)، وتتميز بحضور قوي يمنح أي مكان لمسة من الرقي والأصالة   ",
    priceAfter: "200.00 DH",
    priceBefore: "350.00 DH",
    discount: "42%",
    mainImg: "products-img/PR15/pr15-img1.jpeg",
    sideImgs: [
      "products-img/PR15/pr15-img1.jpeg",
      "products-img/PR15/pr15-img2.jpeg",
      "products-img/PR15/pr15-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق Broad & Glossy واقعية:<br>
أوراق كبيرة، بيضاوية، وسميكة بملمس جلدي فاخر (Leathery Texture). تتميز بلمعان واضح ولون أخضر داكن يميل للأسود أو البني العميق، مما يعكس الضوء ويخلق مظهراً فخماً.<br>

• نمو عمودي أنيق:<br>
تنمو الأوراق بشكل متناسق حول ساق رئيسي مستقيم، ما يجعلها مثالية للزوايا الضيقة أو بجوار المكاتب؛ تضيف ارتفاعاً وأناقة دون استهلاك مساحة كبيرة.<br>

• تفاصيل لونية فاخرة:<br>
الأوراق الجديدة تُغطى غالباً بغمد بلون أحمر برونزي، مما يمنحها تبايناً لونياً جذاباً مع الأخضر الداكن ويعزز مظهرها الطبيعي<br>

خيارات مراكن فاخرة تناسب جميع الأذواق:<br>

• المركن الأسود (Royal Black):
مركن أسود بنقش مموج، يمنحها طابعاً رسمياً قوياً يناسب المكاتب الفخمة وغرف المعيشة المودرن.<br>

• المركن الأبيض (Modern White):
خيار أنيق لإبراز اللون الداكن للأوراق، مما يجعل النبتة قطعة لافتة ومضيئة في أي مكان توضع فيه.<br>

أين يمكن استخدامها؟<br>

هذه النبتة تُعد Statement Plant—قطعة ديكور أساسية بحد ذاتها:<br>

• عند المدخل الرئيسي لإضافة انطباع أول راقٍ وقوي.<br>
• بجوار المكتب لتعزيز الجو المهني ولمسة من الطبيعة الهادئة.<br>
• في الزوايا البسيطة (Minimal Corners) لتكون العنصر الجمالي الأبرز في المكان.
  
      <br>• مثالية للمنزل، المكتب، الحفلات
     
    `
  },

"PR16": {
    name: " Ficus Banyan / Elastica Tree – Contemporary Elegance in Every Detail   ",
    nameAR: "شجرة الفيكس بانيان (Ficus Banyan / Elastica) – فخامة عصرية بكل تفاصيلها   ",
    descriptionFR: " Add a bold architectural touch and refined aesthetic to your space with the Ficus Banyan tree, featuring broad, luxurious leaves and a visually rich texture. This plant represents true modern elegance, offering a strong presence that instantly elevates any room with sophistication and character.  ",
    descriptionAR: "أضف عمقاً جمالياً وطابعاً معمارياً جريئاً إلى مساحتك مع شجرة الفيكس بانيان ذات الأوراق العريضة والملمس الفاخر. تعتبر هذه الشجرة رمزاً للأناقة الحديثة (Modern Elegance)، وتتميز بحضور قوي يمنح أي مكان لمسة من الرقي والأصالة   ",
    priceAfter: "200.00 DH",
    priceBefore:"350.00 DH", 
    discount: "42%",
    mainImg: "products-img/PR16/pr16-img1.jpeg",
    sideImgs: [
      "products-img/PR16/pr16-img1.jpeg",
      "products-img/PR16/pr16-img2.jpeg",
      "products-img/PR16/pr16-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق Broad & Glossy واقعية:<br>
أوراق كبيرة، بيضاوية، وسميكة بملمس جلدي فاخر (Leathery Texture). تتميز بلمعان واضح ولون أخضر داكن يميل للأسود أو البني العميق، مما يعكس الضوء ويخلق مظهراً فخماً.<br>

• نمو عمودي أنيق:<br>
تنمو الأوراق بشكل متناسق حول ساق رئيسي مستقيم، ما يجعلها مثالية للزوايا الضيقة أو بجوار المكاتب؛ تضيف ارتفاعاً وأناقة دون استهلاك مساحة كبيرة.<br>

• تفاصيل لونية فاخرة:<br>
الأوراق الجديدة تُغطى غالباً بغمد بلون أحمر برونزي، مما يمنحها تبايناً لونياً جذاباً مع الأخضر الداكن ويعزز مظهرها الطبيعي<br>

خيارات مراكن فاخرة تناسب جميع الأذواق:<br>

• المركن الأسود (Royal Black):
مركن أسود بنقش مموج، يمنحها طابعاً رسمياً قوياً يناسب المكاتب الفخمة وغرف المعيشة المودرن.<br>

• المركن الأبيض (Modern White):
خيار أنيق لإبراز اللون الداكن للأوراق، مما يجعل النبتة قطعة لافتة ومضيئة في أي مكان توضع فيه.<br>

أين يمكن استخدامها؟<br>

هذه النبتة تُعد Statement Plant—قطعة ديكور أساسية بحد ذاتها:<br>

• عند المدخل الرئيسي لإضافة انطباع أول راقٍ وقوي.<br>
• بجوار المكتب لتعزيز الجو المهني ولمسة من الطبيعة الهادئة.<br>
• في الزوايا البسيطة (Minimal Corners) لتكون العنصر الجمالي الأبرز في المكان.
  
      <br>• مثالية للمنزل، المكتب، الحفلات
     
    `
  },

"PR17": {
    name: "Royal Bird of Paradise Plant (Strelitzia nicolai)    ",
    nameAR: " نبتة “عصفور الجنة” الملكية (Strelitzia nicolai)  ",
    descriptionFR: "The image showcases a majestic indoor plant known as the Giant White Bird of Paradise (Strelitzia nicolai). This tropical beauty is a favorite in modern interior design thanks to its architectural form and striking presence.   ",
    descriptionAR: "  ُظهر الصورة نبتة داخلية مهيبة تُعرف باسم عصفور الجنة الأبيض العملاق (Giant White Bird of Paradise). تُعد هذه النبتة من العناصر الاستوائية المميزة في التصميم الداخلي الحديث، بفضل مظهرها المعماري وحضورها اللافت. ",
    priceAfter: "600.00 DH",
    priceBefore: "750.00 DH",
    discount: "20%",
    mainImg: "products-img/PR17/pr17-img1.jpeg",
    sideImgs: [
      "products-img/PR17/pr17-img1.jpeg",
      "products-img/PR17/pr17-img2.jpeg",
      "products-img/PR17/pr17-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • الأوراق:<br>
تتميز بأوراق عريضة تشبه المجاديف أو أوراق الموز، بلون أخضر داكن عميق يدل على الصحة والحيوية. تمتلك الأوراق عروقاً بارزة ومنتظمة تمنحها ملمساً بصرياً غنياً. تنمو بشكل عمودي مع انحناءات خفيفة تضفي انسيابية وأناقة على شكل النبتة.<br>

• السيقان:<br>
تنمو الأوراق على سيقان طويلة وصلبة تتجمع بكثافة من القاعدة، ما يمنح النبتة ارتفاعاً واضحاً يجعلها قطعة ديكور محورية (Statement Piece) في أي مساحة.<br>

• الأصيص:<br>
تأتي النبتة في أصيص عصري بلون بني برونزي أو خشبي داكن، يتميز بملمس خارجي مضلع بخطوط رأسية واضحة (Ribbed Texture). شكله الأسطواني المتدرّج نحو الأسفل يخلق توازناً بصرياً بين الأوراق الكبيرة في الأعلى وقاعدة الارتكاز.<br>
•التوظيف في الديكور الداخلي
هذه النبتة مثالية لإضافة لمسة استوائية فاخرة دون مبالغة. وبفضل نموها العمودي، فهي مناسبة للزوايا الفارغة في غرف المعيشة، مكاتب المديرين، الردهات الفندقية، أو المساحات المينيمالية. تضيف حيوية وطاقة للمكان، وتكسر رتابة الألوان الحيادية بأناقة.

      <br>• مثالية للمنزل، المكتب، الحفلات
     
    `
  },

"PR18": {
    name: "Palmier éventail tropical (Fan Palm) – Une pièce décorative architecturale élégante    ",
    nameAR: "نخلة المروحة الاستوائية (Fan Palm) – قطعة ديكور معمارية راقية   ",
    descriptionFR: "Ajoutez une touche exotique et raffinée à votre intérieur avec ce palmier éventail artificiel au design distinctif. Grâce à ses larges feuilles en forme d’éventail et à sa couronne dense et structurée, cette plante offre un effet tridimensionnel qui met en valeur l’espace et lui apporte une énergie fraîche et vivifiante.   ",
    descriptionAR: "أضف لمسة استوائية فاخرة إلى ديكور منزلك مع نخلة المروحة الاصطناعية ذات التصميم المميز. بفضل أوراقها العريضة والمروحية وتاجها الكثيف المتدرج، تمنح هذه النبتة مظهراً ثلاثي الأبعاد يعزز جمال المساحة ويضفي عليها طاقة منعشة.   ",
    priceAfter: "550.00 DH",
    priceBefore: "700.00 DH",
    discount: "21%",
    mainImg: "products-img/PR18/pr18-img1.jpeg",
    sideImgs: [
      "products-img/PR18/pr18-img1.jpeg",
      "products-img/PR18/pr18-img2.jpeg",
      "products-img/PR18/pr18-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    
  • أوراق مروحية متناظرة: أوراق واسعة تتفرع بشكل متناسق من نقطة مركزية، بلون أخضر داكن غني يعكس جاذبية النخيل الحقيقي.<br>
• نمو عمودي أنيق: سيقان رفيعة ومتعددة تخرج من القاعدة لتمنح النبتة ارتفاعاً واضحاً دون أن تأخذ مساحة أرضية كبيرة.<br>
• أصيص فاخر: تأتي النبتة في أصيص مخروطي بلون بني ترابي مع نقشة محززة، يعلوه حصى أبيض ناصع يمنحها مظهراً جاهزاً للعرض.<br>
• مظهر طبيعي دون صيانة: خضرة دائمة لا تحتاج للري أو الإضاءة، مما يجعلها خياراً عملياً وجميلاً على المدى الطويل.<br>

مثالية لـ:<br>
غرف المعيشة، مداخل المنازل، المكاتب، الزوايا القريبة من النوافذ، ومساحات الديكور العصري أو البوهيمي
      <br>• مثالية للمنزل، المكتب، الحفلات
     
    `
  },

"PR19": {
    name: "  Palmier Areca Dense (Areca Palm / Dypsis lutescens) – Une touche tropicale naturelle.  ",
    nameAR: "نخلة الأريكا الكثيفة (Areca Palm / Dypsis lutescens) – لمسة استوائية طبيعية .   ",
    descriptionFR: "Apportez vitalité et élégance tropicale à votre maison ou votre bureau avec ce palmier Areca artificiel. Il combine une densité visuelle remarquable et la douceur naturelle de ses feuilles plumeuses. Son design soigné en fait une pièce décorative idéale, apportant mouvement et chaleur à n’importe quel espace.   ",
    descriptionAR: "أضف حيوية وأناقة استوائية إلى منزلك أو مكتبك مع نخلة الأريكا الاصطناعية، التي تجمع بين الكثافة البصرية والنعومة الطبيعية لأوراقها الريشية. تصميمها الدقيق يجعلها قطعة ديكور مثالية تضيف حركة ودفء لأي مساحة.   ",
    priceAfter: "280.00 DH",
    priceBefore: "350.00 DH",
    discount: "20%",
    mainImg: "products-img/PR19/pr19-img1.jpeg",
    sideImgs: [
      "products-img/PR19/pr19-img1.jpeg",
      "products-img/PR19/pr19-img2.jpeg",
      "products-img/PR19/pr19-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق ريشية دقيقة: أوراق سعفية (Pinnate) مقسمة إلى وريقات ضيقة ومتقاربة على جانبي الساق، بلون أخضر متوسط إلى فاتح يعكس الضوء ويمنح المظلة إشراقة متجددة.<br>
• هيكل متعدد السيقان: سيقان نحيلة تتجمع بكثافة من قاعدة الأصيص، مع أوراق منحنية تضفي مظهراً دائرياً وكثيفاً يخلق إحساساً بالحركة والمرونة.<br>
• أصيص عصري وأنيق: أصيص أسطواني أبيض ناصع مع خطوط أفقية بارزة (Horizontal Ribbing) يضيف لمسة معاصرة ونظيفة، مزين بطبقة من الحصى الأبيض لتعزيز جمال التصميم وإضفاء شعور بالنقاء.<br>
• صيانة سهلة: خضرة اصطناعية دائمة طوال العام بدون الحاجة للري أو التعرض للشمس، لتوفير جمالية طبيعية بلا مجهود.<br>

مثالية لـ:<br>
غرف المعيشة، المكاتب، الزوايا الفارغة، أو أي مساحة تحتاج لمسة استوائية راقية مع أسلوب عصري أو بوهيمي أنيق.<br>
    `
  },

"PR20": {
    name: " Palmier Compact en Pot Rond (Compact Feather Palm) – Élégance tropicale raffinée   ",
    nameAR: "نخيل الزينة المكتنز في أصيص كروي (Compact Feather Palm) – أناقة استوائية متقنة .   ",
    descriptionFR: " Apportez une touche tropicale moderne à votre maison ou à votre bureau avec ce palmier compact soigneusement conçu. Ce modèle de petite taille se distingue par sa structure centrale harmonieuse, en faisant une pièce décorative complète qui allie élégance et présence remarquable.  ",
    descriptionAR: "أضف لمسة من الطابع الاستوائي العصري إلى منزلك أو مكتبك مع نخيل الزينة المكتنز المصمم بعناية. يتميز هذا النموذج الصغير بتركيبه المركزي المتناسق، مما يجعله قطعة ديكور متكاملة تجمع بين الرشاقة والحضور المميز.   ",
    priceAfter: "280.00 DH",
    priceBefore: "350.00 DH",
    discount: "20%",
    mainImg: "products-img/PR20/pr20-img1.jpeg",
    sideImgs: [
      "products-img/PR20/pr20-img1.jpeg",
      "products-img/PR20/pr20-img2.jpeg",
      "products-img/PR20/pr20-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق سعفية ريشية دقيقة: أوراق رفيعة ومتناسقة على طول العرق الرئيسي، بلون أخضر متوسط مشرق، مرتفعة بشكل أنيق لتمنح النبتة مظهراً رشيقاً ومتوازناً.<br>
• جذع نحيل ومحدد: يعتمد على ساق واحدة مركزية بلون بني، تضيف عمقاً ووضوحاً لشكل النبتة، ما يجعلها نموذجاً فريداً ومكتنزاً.<br>
• أصيص كروي فاخر: أصيص أبيض ناصع ولامع، مزود بأخاديد أفقية حول محيطه لإبراز شكله المستدير، مع طبقة من الحصى الأبيض على سطح التربة لإضفاء لمسة نظيفة ومتجانسة، ما يجعله قطعة ديكور أنيقة وجاهزة للعرض.<br>
• تناغم تصميمي: يجمع بين الخطوط الرأسية للأوراق والجذع والمنحنيات الأفقية للأصيص، ليخلق توازناً بصرياً مثالياً يلفت الأنظار.<br>
مثالية لـ:<br>
المكاتب الصغيرة، رفوف الكتب، زوايا غرف المعيشة، أو أي مساحة تحتاج إلى لمسة استوائية مركزة وأنيقة دون استهلاك مساحة كبيرة.<br>
     
    `
  },

"PR21": {
    name: " Bambou décoratif vertical (Ornamental Bamboo) – Élégance asiatique et verticale   ",
    nameAR: " نبات الخيزران العمودي (Ornamental Bamboo) – أناقة آسيوية وعمودية  ",
    descriptionFR: " Apportez une touche de sérénité et de discipline inspirée des jardins japonais à votre maison ou bureau avec ce bambou artificiel. Sa structure verticale solide et ses lignes nettes en font une pièce décorative idéale pour les intérieurs minimalistes ou de style asiatique.  ",
    descriptionAR: "أضف لمسة من الهدوء والانضباط المستوحاة من الحدائق اليابانية إلى منزلك أو مكتبك مع نبات الخيزران الاصطناعي. تصميمه العمودي القوي وخطوطه الواضحة يجعلان منه قطعة ديكور مثالية للديكورات المينيمالية أو المستوحاة من الطراز الآسيوي.   ",
    priceAfter: "400.00 DH",
    priceBefore: "600.00 DH",
    discount: "33%",
    mainImg: "products-img/PR21/pr21-img1.jpeg",
    sideImgs: [
      "products-img/PR21/pr21-img1.jpeg",
      "products-img/PR21/pr21-img2.jpeg",
      "products-img/PR21/pr21-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    سيقان مستقيمة ومتعددة: أعمدة أسطوانية بلون بني فاتح تمنح النبتة طولاً وانسيابية، مع تفرعات ورقية متتابعة تضفي حياة وحركة طبيعية.<br>
• أوراق خفيفة ورمحية: أوراق صغيرة خضراء متوسطة إلى فاتحة، توزع بشكل متناسق وخفيف، مما يحافظ على شعور بالهواء والانفتاح دون ثقل بصري.<br>
• أصيص عصري متين: أصيص مخروطي بلون بني ترابي، مع ملمس خارجي مخطط أو محزز يضفي طابعاً طبيعياً وقوياً.<br>
• تفاصيل نهائية أنيقة: سطح الأصيص مغطى بحصى أبيض، لتثبيت قاعدة النبتة بصرياً وإضفاء لمسة نظيفة ومتناغمة.<br>

 الاستخدام التصميمي:<br>
مثالي لإضافة خطوط رأسية واضحة في الغرف، للفصل بين مناطق داخلية، لتعزيز الهدوء والسكينة، أو لتعويض الارتفاع في المساحات ذات السقف العالي.    
    `
  },

"PR22": {
    name: " Plante Caladium – L’étoile des couleurs tropicales   ",
    nameAR: "  نبتة الكالاديوم (Caladium) – نجم الألوان الاستوائية . ",
    descriptionFR: "Apportez une touche tropicale vive et éclatante à votre intérieur ou à votre jardin avec le Caladium artificiel, également connu sous le nom de « Wings of Angel » (Ailes d’Ange). Ses grandes feuilles en forme de cœur aux couleurs audacieuses et vibrantes en font une pièce maîtresse incontournable pour tout espace décoratif de luxe.   ",
    descriptionAR: " أضف لمسة استوائية نابضة بالحياة إلى منزلك أو حديقتك مع نبتة الكالاديوم الاصطناعية، المعروفة باسم “أجنحة الملاك”. تتميز أوراقها القلبية الكبيرة بألوان جريئة وحيوية تجعلها قطعة بيان أساسية في أي مساحة ديكور فاخرة.  ",
    priceAfter: "190.00 DH",
    priceBefore: "250.00 DH",
    discount: "24%",
    mainImg: "products-img/PR22/pr22-img1.jpeg",
    sideImgs: [
      "products-img/PR22/pr22-img1.jpeg",
      "products-img/PR22/pr22-img2.jpeg",
      "products-img/PR22/pr22-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق قلبية كبيرة وملونة: أوراق درامية بلون أخضر داكن غني، مع شبكة من العروق الحمراء أو الوردية المشرقة، وبقع مركزية تضيف تباينًا بصريًا جذابًا وفوريًا.<br>
• نمو كثيف وعمودي: الأعناق الرفيعة تحمل الأوراق عالياً لتمنح النبتة مظهراً مورقاً وحيوياً مع شعور بالحركة والطاقة.<br>
• أصيص عصري: أصيص أسطواني أبيض مطفأ مع أخاديد أفقية بارزة (Horizontal Fluting)، يوفر خلفية نظيفة ومحايدة تبرز ألوان النبتة الزاهية.<br>
• تفاصيل نهائية أنيقة: سطح التربة مغطى بحصى أبيض ناعم لإضفاء مظهر مصقول ومتجانس، جاهز للعرض في أي مساحة داخلية أو خارجية.<br>

 الاستخدام المثالي:<br>
مثالية للمناطق الفاخرة، مثل الصالات الخارجية، بجانب المسابح، أو في مناطق الاسترخاء، حيث تضيف ألوانها الدافئة والطبيعية لمسة بصرية آسرة وتخلق نقطة تركيز فنية مميزة.<br>
  
    
    `
  },

"PR23": {
    name: " Plante Calathea décorative (Calathea / Ctenanthe) – Une pièce tropicale d’exception pour votre intérieur   ",
    nameAR: "نبتة القلادية المزخرفة (Calathea/Ctenanthe) – تحفة استوائية فاخرة للديكور الداخلي   ",
    descriptionFR: "Apportez une touche artistique et raffinée à votre espace avec la plante Calathea décorative, l’une des plantes tropicales les plus remarquables grâce à ses feuilles magnifiquement dessinées aux couleurs naturelles éclatantes. Un choix idéal pour ceux qui recherchent un élément de décoration vivant alliant luxe et douceur visuelle.   ",
    descriptionAR: "أضف لمسة فنية راقية إلى مساحتك مع نبتة القلادية المزخرفة، إحدى أكثر النباتات الاستوائية تميزاً بفضل أوراقها المنقوشة بألوان طبيعية آسرة. هذه النبتة مثالية لمن يبحث عن عنصر ديكور حي يجمع بين الفخامة والهدوء البصري.   ",
    priceAfter:"190.00 DH",
    priceBefore:  "250.00 DH",
    discount: "24%",
    mainImg: "products-img/PR23/pr23-img1.jpeg",
    sideImgs: [
      "products-img/PR23/pr23-img1.jpeg",
      "products-img/PR23/pr23-img2.jpeg",
      "products-img/PR23/pr23-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق فاخرة بنقوش مميزة
أوراق كبيرة ومستطيلة تحمل تدرجات خضراء غنية مع خطوط ليمونية لامعة، مما يمنح النبتة مظهراً ثلاثي الأبعاد جذاباً تحت الإضاءة الطبيعية.
• هيكل نباتي أنيق<br>
أعناق رفيعة وعمودية تمنح النبتة حضوراً نحتياً مثالياً لملء المساحات الفارغة وإضافة لمسة من التجدد والحيوية.<br>
• أصيص فاخر بتصميم حديث<br>
تأتي النبتة داخل أصيص أبيض طويل بنقوش تموجية أفقية، يضفي مظهراً عصرياً متناغماً مع فخامة الأوراق.<br>
• تشطيب احترافي<br>
طبقة من الحصى الأبيض المائل للخضرة تمنح النبتة شكلاً نظيفاً ومكمّلاً لتناسق الألوان.<br>
مثالية لـ:<br>
• المداخل والمساحات الواسعة<br>
• الزوايا المينيمالية التي تحتاج نقطة تركيز<br>
• الغرف ذات الإضاءة الطبيعية القوية<br>
• مكاتب العمل، صالات الجلوس، والمساحات العص<br>
    `
  },

"PR24": {
    name: " Bananiers du Japon (Musa Basjoo) – Une présence tropicale luxueuse aux feuilles géantes   ",
    nameAR: " نبتة الموز الليفي الياباني (Musa Basjoo) – حضور استوائي فاخر بأوراق عملاقة  ",
    descriptionFR: "Apportez une touche tropicale élégante à votre intérieur ou à vos espaces extérieurs avec le bananier fibreux japonais (Musa Basjoo), reconnu pour ses feuilles impressionnantes et sa croissance verticale qui confèrent à l’espace une ambiance naturelle riche et raffinée. Cette plante constitue un élément décoratif architectural de premier choix dans les jardins, autour des piscines et sur les terrasses haut de gamme.   ",
    descriptionAR: " أضف لمسة استوائية قوية إلى ديكور منزلك أو مساحتك الخارجية مع نبتة الموز الليفي الياباني (Musa Basjoo)، المعروفة بأوراقها العملاقة ونموها العمودي الذي يمنح المكان طابعاً طبيعياً غنياً وفاخراً. تعتبر هذه النبتة أحد أبرز عناصر الديكور المعماري في الحدائق، المسابح، والشرفات الراقية  ",
    priceAfter: "350.00 DH",
    priceBefore: "450.00 DH",
    discount: "22%",
    mainImg: "products-img/PR24/pr24-img1.jpeg",
    sideImgs: [
      "products-img/PR24/pr24-img1.jpeg",
      "products-img/PR24/pr24-img2.jpeg",
      "products-img/PR24/pr24-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    • أوراق عريضة ومهيبة<br>
تتميز النبتة بأوراق ضخمة، رمحية الشكل، بلون أخضر غني، تمنح المكان إحساساً فورياً بالانتعاش والحيوية. تعكس الأوراق الكبيرة الضوء بشكل رائع وتخلق ظلالاً طبيعية جذابة.<br>
• بنية قوية ونمو عمودي<br>
تنمو النبتة بسيقان متعددة أو جذع مركزي صلب، قادر على حمل الأوراق العريضة وإبراز الطابع الاستوائي الحقيقي للنبتة.<br>
• عرض فاخر بأصيص أنيق<br>
يأتي المنتج في أصيص كروي داكن بتصميم محزز معاصر، يخلق توازناً مثالياً بين الارتفاع العمودي للنبتة وقاعدة العرض الأفقية. اللون الأسود للأصيص يعزز جمالية الأوراق الخضراء ويمنحها حضوراً أكثر فخامة.<br>
• تأثير بصري قوي<br>
تزداد قيمة النبتة الجمالية بشكل خاص في الإضاءة الخلفية—خاصةً خلال لحظات الغروب—حيث تكتسب الأوراق وهجاً جذاباً يجعلها قطعة محورية في أي مكان توضع فيه.<br>
 مثالية لـ:<br>
• المساحات الخارجية الفاخرة<br>
• مداخل المنازل<br>
• مناطق الاسترخاء حول المسابح<br>
• الغرف ذات الأسقف العالية<br>
• التصاميم الاستوائية أو المينيمالية<br>
  
    `
  },

"PR25": {
    name: "  Tournesol décoratif – Design compact et élégant  ",
    nameAR: " زهرة عباد الشمس الزخرفية – تصميم مدمج وأنيق  ",
    descriptionFR: " Ajoutez une touche d’éclat et de beauté naturelle à votre espace avec l’arrangement décoratif de tournesol, une pièce élégante qui allie simplicité et raffinement. Les fleurs jaunes lumineuses se distinguent par des pétales harmonieux et un cœur sombre, mis en valeur par une composition visuelle étudiée qui apporte profondeur et dynamisme.  ",
    descriptionAR: "أضِف لمسة من الإشراق والجمال الطبيعي إلى مساحتك مع ترتيب زهرة عباد الشمس الزخرفية، قطعة ديكور أنيقة تجمع بين البساطة والفخامة. تتميز الزهور الصفراء الزاهية ببتلات متناسقة ومركز داكن محاط بتوزيع بصري مدروس يمنح التكوين عمقًا وحركة طبيعية.   ",
    priceAfter: "190.00 DH",
    priceBefore: "250.00 DH",
    discount: "24%",
    mainImg: "products-img/PR25/pr25-img1.jpeg",
    sideImgs: [
      "products-img/PR25/pr25-img1.jpeg",
      "products-img/PR25/pr25-img2.jpeg",
     
      "products-img/PR25/pr25-img3.jpeg"
    ],
    features:`	المميزات: <br> 
	•	مقاومة للغبار والتلاشي، تحافظ على ألوانها الزاهية لفترة طويلة. <br>
	•	خفيفة الوزن وسهلة النقل والتثبيت في أي مكان <br>
    •زهور عباد شمس مشرقة تمنح إحساسًا بالحيوية والبهجة.<br>
	•	تصميم عمودي أنيق يناسب جميع المساحات.<br>
	•	أصيص أبيض عصري بملمس محزز يكمّل جمالية النبتة.<br>
	•	تشطيب احترافي بالحصى الأبيض لإطلالة نظيفة وفاخرة.<br>
مثالي لـ:<br>
	•	المكاتب، مداخل المنازل، غرف الطعام، والمطابخ.<br>
	•	الديكور المينيمالي والحديث الذي يحتاج إلى لمسة لونية دافئة.<br>
     
    `
  },







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
// ----------------------------
//       إرسال الطلب عبر EmailJS
// ----------------------------
