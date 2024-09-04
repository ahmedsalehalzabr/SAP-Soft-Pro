'use strict';



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
});



/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});



/**
 * Element tilt effect
 */

const tiltElements = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {

  /** get tilt element center position */
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;

}

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});



/**
 * Tab content
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {

  if (!(lastActiveTabBtn === this)) {

    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");

    this.classList.add("active");
    lastActiveTabBtn = this;

    const currentTabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);

    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;

  }

}

addEventOnElements(tabBtns, "click", filterContent);



/**
 * Custom cursor
 */

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

window.addEventListener("mousemove", function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});

const translations = {
  ar: {
    home: "الصفحة الرئيسية",
    
    arabic: "AR",
    english: "EN",
  
    1:"خدمات",
    2:"معلومات عنا",
    3:"المشاريع",
    4:"مراجعة",
    5:"للتواصل",
    6:"ساب سوفت برو",
    7:"الأنظمة وتطوير تطبيقات الويب وتطوير تطبيقات الهاتف المحمول والحلول المتكاملة",
    8:"تطوير تطبيقات الويب",

    9:"تطوير",
    10:" تطوير الانظمة ",
    11:"تطوير تطبيقات الموبايل",
    12:"الحلول المتكاملة",
    13:"رؤيتنا",
    14:"رسالتنا",
    15:"هدفنا",
    16:"البرمجيات",
    17:"في ساب سوفت برو، نحن نسعى لأن نكون الشركة الرائدة والموثوقة في مجال تقديم الحلول التكنولوجية المتكاملة. نؤمن بأن التكنولوجيا يمكن أن تكون قوة محركة للتغيير والتحسين، ونسعى جاهدين لتحويل هذه القوة إلى حلول مبتكرة وذكية تعزز عمليات الأعمال وتساهم في تحقيق النجاح لعملائنا.",
    18:"من نحن",
    19:"نحن شركة ساب سوفت برو، ونعتبر أنفسنا روادًا في مجال تطوير الأنظمة والتطبيقات وتقديم الحلول المتكاملة لعملائنا. نحن نجمع بين الخبرة العميقة والابتكار المستمر لتلبية احتياجات الأعمال المتنوعة والمساعدة في تحقيق أهدافها بكفاءة وفاعلية.",
    20:"الاسم",
    21:"م/مساعد فايز",
    22:"رقم الهاتف",
    23:"الايميل",
    24:"المهنة",
    25:"المدير العام",
    26:"تتمثل رسالتنا في توفير حلول تكنولوجية مبتكرة وقوية تساعد عملائنا على تحقيق أهدافهم وتجاوز توقعاتهم. نحن نعمل على تطوير وتنفيذ أنظمة وتطبيقات متكاملة تلبي احتياجات الأعمال المتنوعة، بدءًا من المؤسسات الصغيرة وحتى الشركات الكبيرة والمؤسسات الحكومية. نحن نضمن تجربة ممتازة للمستخدم ونسعى لتحقيق رضا العملاء من خلال تقديم حلول ذات جودة عالية وخدمة عملاء استثنائية",
    27:"هدفنا الأسمى هو تقديم حلول تكنولوجية متفوقة ومبتكرة تلبي تحديات عملائنا. نحن نعمل جنبًا إلى جنب مع الشركات والمؤسسات لفهم تمامًا احتياجاتهم وتوفير حلول مخصصة تعزز الكفاءة وتحسن الأداء وتمكِّنهم من التفوق في بيئة الأعمال المتنوعة والمتطورة.",
    28:"اهم البرمجيات المستخدمة في عملنا- ساب سوفت برو",
    29:"متوسط سعر النظام هو 500 دولار إلى 2000 دولار، ومتوسط سعر موقع الويب هو 200 دولار إلى 500 دولار، ومتوسط سعر تطبيق الويب هو 700 دولار إلى 1500 دولار، ومتوسط سعر تطبيق اندرويد للجوال هو 600 دولار إلى 3000 دولار.",
    30:"م/احمد الزبر",
    31:"مؤسس شركة ساب سوفت برو",
    32:"ابقى على تواصل",
    33:"ارسال ",
    34:" 771143849 967+",
    35:"صنعاء شارع القاهرة",
    36:"حقوق النشر والتصميم بواسطة @ ساب سوفت برو - 2024",
    37:"العودة إلى الأعلى",
    38:" 776402091 967+",
    39:" 771767919 967+",
    40:"نطام الصيدليات",
    41:"نظام ادارة المعاهد",
    42:"نظام ادارة المحطات",
    43:"تفاصيل ",
    44:"التطبيقات التالية",
    45:"دعونا نعمل معًا على مشروعك القادم",
    46:"",
    47:"",
    48:"",
   
  },
    en: {
      home: "Home",
    
      english: "EN",
      arabic: "AR",
      1:"Services",
      2:"About Us",
      3:"Project",
      4:"Review",
      5:"Contact",
      6:"SAP Soft Pro",
      7:"Systems, WebApp Development, MobileApp Development  and integrated solutions",
      8:"Web App Development",
      9:"Development",
      10:"Systems Development",
      11:"Mobile App Development",
      12:"Integrated Solutions",
      13:"Our Vision",
      14:"Our Mission",
      15:"Our Goal",
      16:"Software",
      17:"At SAP Soft Pro, we seek to be the leading and trusted company in providing integrated technology solutions. We believe that technology can be a driving force for change and improvement, and we strive to transform this power into innovative and intelligent solutions that enhance business operations and contribute to the success of our customers.",
      18:"  Who are we.",
      19:"We are SAP Soft Pro, and we consider ourselves leaders in the field of developing systems and applications and providing integrated solutions to our customers. We combine deep experience and continuous innovation to meet diverse business needs and help achieve their goals efficiently and effectively.",
      20:"Name",
      21:"Eng/Mas'ad Fayez",
      22:"Phone Number",
      23:"Email Address",
      24:"Information",
      25:"General Manager.",
      26:"Our mission is to provide innovative and powerful technological solutions that help our customers achieve their goals and exceed their expectations. We develop and implement integrated systems and applications that meet the needs of diverse businesses, from small enterprises to large corporations and government institutions. We ensure excellent user experience and strive to achieve customer satisfaction by providing quality solutions and exceptional customer service",
      27:" Our ultimate goal is to provide superior and innovative technological solutions that meet our customers' challenges. We work alongside businesses and organizations to fully understand their needs and provide customized solutions that enhance efficiency, improve performance and enable them to excel in a diverse and evolving business environment.",
      28:"The most important software used in our work - SAP Soft Pro.",
      29:"The average price of a system is $500 to $2000, the average price of a website is $200 to $500,The average price of a web app is $700 to $1,500, the average price of an Android mobile app is $600 to $3,000.",
      30:"Eng/Ahmed Al-Zabr",
      31:"Founder of SAP Soft Pro.co",
      32:"Get In Touch",
      33:"Send Message",
      34:"+697 771143849",
      35:"  Sanaa, Cairo Street",
      36:"Copyright & Design By @Sap Soft Pro - 2024",
      37:"Back To Top",
      38:"+967 776402091",
      39:"+967 771767919",
      40:"Pharmacy system",
      41:"Institute management system",
      42:"Station management system",
    43:"Project Details",
    44:"Next Project",
    45:"Let's Work Together On Your Next Project!",
    46:"",
    47:"",
    48:"",
     

    },
    
  };

/*const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "ar"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
*/


const languageButton = document.getElementById("languageButton");
languageButton.addEventListener("click", () => {
  toggleLanguage();
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "ar";
  setLanguage(language);
});

const toggleLanguage = () => {
  const currentLanguage = localStorage.getItem("lang") || "ar";
  const newLanguage = currentLanguage === "ar" ? "en" : "ar";
  setLanguage(newLanguage);
  localStorage.setItem("lang", newLanguage);
};




const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    let translationValue = translations[language][translationKey];
    
    if (translationKey === "english") {
      translationValue = language === "ar" ? "EN": "AR";
    }
    
    element.textContent = translationValue;
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};