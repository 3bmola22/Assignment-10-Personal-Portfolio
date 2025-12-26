////////////////
//DarkAndLightMode
var switchMode = document.querySelector("#theme-toggle-button");
switchMode.addEventListener("click", function () {
  mode();
});

function mode() {
  document.querySelector("html").classList.toggle("dark");
  // if (document.querySelector("html").classList.contains("dark")) {
  //   document.querySelector("html").classList.remove("dark");
  // } else {
  //   document.querySelector("html").classList.add("dark");
  // }
  //
}
/////////////////////
////////////////////
//Nav&Tabs
var allProjects = Array.from(document.querySelectorAll(".portfolio-item"));
let portfolioGrid = document.querySelector("#portfolio-grid");

///////////
function choose(dah) {
  cartona = "";
  for (let i = 0; i < allProjects.length; i++) {
    if (allProjects[i].getAttribute("data-category") == dah) {
      cartona += allProjects[i].outerHTML;
    }
  }
  portfolioGrid.innerHTML = cartona;
}
//////

var allBtn = document.querySelector("#allBtn");
allBtn.addEventListener("click", function allView() {
  cartona = "";
  for (let i = 0; i < allProjects.length; i++) {
    cartona += allProjects[i].outerHTML;
  }
  portfolioGrid.innerHTML = cartona;
  updateActiveButton(allBtn);
});

/////////webBtn
var webBtn = document.querySelector("#webBtn");
webBtn.addEventListener("click", function webView() {
  choose("web");
  updateActiveButton(webBtn);
});
//////////
var appBtn = document.querySelector("#appBtn");
appBtn.addEventListener("click", function appView() {
  choose("app");
  updateActiveButton(appBtn);
});
//////////
var designBtn = document.querySelector("#designBtn");
designBtn.addEventListener("click", function designView() {
  choose("design");
  updateActiveButton(designBtn);
});
////////////////
var businessBtn = document.querySelector("#businessBtn");
businessBtn.addEventListener("click", function businessView() {
  choose("ecommerce");
  updateActiveButton(businessBtn);
});

var allBtns = document.querySelectorAll("portfolio-filter");
// taps
function updateActiveButton(dah) {
  if (
    allBtn.classList.contains(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    )
  ) {
    allBtn.classList.remove(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    );
  } else if (
    webBtn.classList.contains(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    )
  ) {
    webBtn.classList.remove(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    );
  } else if (
    appBtn.classList.contains(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    )
  ) {
    appBtn.classList.remove(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    );
  } else if (
    designBtn.classList.contains(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    )
  ) {
    designBtn.classList.remove(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    );
  } else if (
    businessBtn.classList.contains(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    )
  ) {
    businessBtn.classList.remove(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "hover:shadow-lg"
    );
  }
  allBtn.classList.add("dark:bg-slate-800", "dark:text-slate-300");
  dah.classList.add(
    "active",
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "hover:shadow-lg",
    "text-white"
  );
}

////////////////////
///////////////////
///btnUp
var btnUp = document.querySelector("#scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btnUp.style.opacity = "1";
    btnUp.style.visibility = "visible";
  } else {
    btnUp.style.opacity = "0";
    btnUp.style.visibility = "hidden";
  }
});

////////////////
var body = document.querySelector("body");
btnUp.addEventListener("click", function (event) {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  // console.log(event);

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// window.addEventListener("scroll", checkScroll);
//////////////////////////////////
//////Theme mode
var settingsToggle = document.querySelector("#settings-toggle");
var sidebar = document.querySelector("#settings-sidebar");
// console.log(settingsToggle, sidebar);
var gridTheme = document.getElementById("theme-colors-grid");
var closeSide = document.getElementById("close-settings");
closeSide.addEventListener("click", function () {
  sidebar.classList.add("translate-x-full");
});
settingsToggle.addEventListener("click", function ThemeMode() {
  sidebar.classList.toggle("translate-x-full");

  // gridTheme.innerHTML =
});
////////////////////
var fontOptions = document.querySelectorAll(".font-option");
for (var i = 0; i < fontOptions.length; i++) {
  fontOptions[i].addEventListener("click", function () {
    for (var o = 0; o < fontOptions.length; o++) {
      fontOptions[o].classList.remove("active");
    }
    this.classList.add("active");
    // console.log(this.getAttribute("da"));

    document.body.classList.remove("font-tajawal");
    document.body.classList.remove("font-alexandria");
    document.body.classList.remove("font-cairo");
    document.body.classList.add(`font-${this.getAttribute("data-font")}`);
  });
}

///////////////////

////////////////////////
// انتظار تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function () {
  // 1. أبحث عن عنصر الأزرار (grid)
  const themeColorsGrid = document.getElementById("theme-colors-grid");

  // 2. مصفوفة تحتوي على جميع الألوان (8 أزرار)
  const allColors = [
    {
      class: "bg-primary",
      label: "أساسي",
      color: "#6366f1",
      ariaLabel: "لون أساسي أزرق",
    },
    {
      class: "bg-secondary",
      label: "ثانوي",
      color: "#8b5cf6",
      ariaLabel: "لون ثانوي بنفسجي",
    },
    {
      class: "bg-accent",
      label: "مميز",
      color: "#a855f7",
      ariaLabel: "لون مميز أرجواني",
    },
    {
      class: "bg-red",
      label: "أحمر",
      color: "#ef4444",
      ariaLabel: "لون أحمر",
    },
    {
      class: "bg-purple",
      label: "بنفسجي",
      color: "#8b5cf6",
      ariaLabel: "لون بنفسجي",
    },
    {
      class: "bg-orange",
      label: "برتقالي",
      color: "#f97316",
      ariaLabel: "لون برتقالي",
    },
    {
      class: "bg-pink",
      label: "زهري",
      color: "#ec4899",
      ariaLabel: "لون زهري",
    },
    {
      class: "bg-black",
      label: "أسود",
      color: "#000000",
      ariaLabel: "لون أسود",
    },
  ];

  // 3. إنشاء وإضافة جميع الأزرار
  allColors.forEach(function (color) {
    // إنشاء زر جديد
    const button = document.createElement("button");

    // إضافة السمات (classes)
    button.className = `ChangeColor ${color.class}`;

    // إضافة aria-label للوصولية
    button.setAttribute("aria-label", color.ariaLabel);

    // إضافة title لتظهر عند التحويم
    button.title = color.label;

    // إضافة لون الخلفية مباشرة
    button.style.backgroundColor = color.color;

    // إضافة خاصية data-color (اختياري)
    button.setAttribute("data-color", color.label);

    // إضافة حدث النقر
    button.addEventListener("click", function () {
      handleColorClick(color);
    });

    // إضافة الزر إلى الشبكة
    themeColorsGrid.appendChild(button);
  });

  // 4. دالة معالجة النقر على أي زر لون
  function handleColorClick(colorData) {
    // console.log(`تم اختيار اللون: ${colorData.label}`);

    // إزالة التركيز من جميع الأزرار
    document.querySelectorAll(".ChangeColor").forEach(function (btn) {
      btn.style.border = "none";
      btn.style.outline = "none";
    });

    // إضافة تأثير التركيز على الزر المحدد
    event.currentTarget.style.border = "solid 2px lemonchiffon";

    // (اختياري) حفظ اللون المختار
    saveSelectedColor(colorData);

    // (اختياري) تغيير ألوان الصفحة
    changeThemeColors(colorData.color);
  }

  // 5. (اختياري) دالة لحفظ اللون المختار
  function saveSelectedColor(colorData) {
    localStorage.setItem("selectedThemeColor", JSON.stringify(colorData));
  }

  // 6. (اختياري) دالة لتحميل اللون المحفوظ
  function loadSavedColor() {
    const savedColor = localStorage.getItem("selectedThemeColor");
    if (savedColor) {
      const colorData = JSON.parse(savedColor);

      // البحث عن الزر المناسب وتحديده
      const buttons = document.querySelectorAll(".ChangeColor");
      buttons.forEach(function (button) {
        if (button.getAttribute("data-color") === colorData.label) {
          button.style.border = "solid 2px lemonchiffon";
        }
      });

      // تطبيق الألوان المحفوظة
      changeThemeColors(colorData.color);
    }
  }

  // 7. (اختياري) دالة لتغيير ألوان الصفحة
  function changeThemeColors(mainColor) {
    // يمكنك هنا تغيير ألوان CSS أو إضافة classes
    document.documentElement.style.setProperty("--color-primary", mainColor);

    // مثال: تغيير لون بعض العناصر
    document
      .querySelectorAll(".text-primary, .bg-primary")
      .forEach(function (el) {
        if (el.classList.contains("text-primary")) {
          el.style.color = mainColor;
        }
        if (el.classList.contains("bg-primary")) {
          el.style.backgroundColor = mainColor;
        }
      });

    // console.log("تم تغيير ألوان الثيم إلى:", mainColor);
  }

  // 8. (اختياري) إضافة زر إعادة الضبط
  function addResetButton() {
    const resetButton = document.createElement("button");
    resetButton.className = "ChangeColor";
    resetButton.style.backgroundColor = "#ffffff";
    resetButton.style.border = "2px solid #94a3b8";
    resetButton.title = "إعادة الضبط";
    resetButton.setAttribute("aria-label", "إعادة الألوان إلى الإفتراضية");

    // إضافة أيقونة أو نص
    resetButton.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';

    resetButton.addEventListener("click", function () {
      // إزالة التركيز من جميع الأزرار
      document.querySelectorAll(".ChangeColor").forEach(function (btn) {
        btn.style.border = "none";
      });

      // حذف اللون المحفوظ
      localStorage.removeItem("selectedThemeColor");

      // إعادة الألوان للإفتراضية
      document.documentElement.style.removeProperty("--color-primary");

      // console.log("تم إعادة ضبط الألوان");
    });

    // إضافة زر الإعادة بعد الأزرار (اختياري)
    themeColorsGrid.appendChild(resetButton);
  }

  // 9. تشغيل الدوال عند تحميل الصفحة
  loadSavedColor(); // تحميل اللون المحفوظ
  // addResetButton(); // (اختياري) إضافة زر الإعادة

  // 10. (اختياري) إضافة تأثيرات إضافية
  document.querySelectorAll(".ChangeColor").forEach(function (button) {
    // تأثير عند التحويم
    button.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.2s";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });

    // تأثير عند الضغط
    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.95)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1.1)";
    });
  });
});
/////////////////////////////
//////////////////////////////
// carousel
var carouselContainer = document.getElementById("testimonials-carousel");
var nextBtn = document.getElementById("next-testimonial");
var backBtn = document.getElementById("prev-testimonial");
var carouselLocation = 0;

backBtn.addEventListener("click", function () {
  carouselLocation = carouselLocation - 1;

  moveContainer();
});

nextBtn.addEventListener("click", function () {
  carouselLocation = carouselLocation + 1;

  moveContainer();
});
var carouselIndicator = Array.from(
  document.querySelectorAll(".carousel-indicator")
);
for (let i = 0; i < carouselIndicator.length; i++) {
  carouselIndicator[i].addEventListener("click", function move() {
    carouselLocation = i;

    for (let o = 0; o < carouselIndicator.length; o++) {
      carouselIndicator[o].classList.remove("bg-accent");
      carouselIndicator[o].classList.add("dark:bg-slate-600");
    }
    // carouselContainer.style.transform = `translateX(${i * 100}%)`;
    carouselIndicator[i].classList.add("bg-accent");
    carouselIndicator[i].classList.remove("dark:bg-slate-600");
    moveContainer();
  });
}
moveContainer();
function moveContainer() {
  // carouselLocation = 0;
  for (let o = 0; o < carouselIndicator.length; o++) {
    carouselIndicator[o].classList.remove("bg-accent");
    carouselIndicator[o].classList.add("dark:bg-slate-600");

    if (carouselLocation == o) {
      nextBtn.style.visibility = "hidden";
    } else {
      nextBtn.style.visibility = "visible";
    }
    if (carouselLocation == 0) {
      backBtn.style.visibility = "hidden";
    } else {
      backBtn.style.visibility = "visible";
    }
  }
  // carouselContainer.style.transform = `translateX(${i * 100}%)`;
  carouselIndicator[carouselLocation].classList.add("bg-accent");
  carouselIndicator[carouselLocation].classList.remove("dark:bg-slate-600");
  // console.log(carouselLocation);

  var moveCards = carouselLocation * 100;

  carouselContainer.style.transform = `translateX(${moveCards}%)`;
}
//////////////////
//////////////////
var navLinks = document.querySelectorAll("nav a");
var sections = document.querySelectorAll("section");
function navUpdate() {
  var activeId = "";
  sections.forEach(function (section) {
    // console.log(section.id);

    section.getBoundingClientRect();
    if (
      section.getBoundingClientRect().top <= 150 &&
      section.getBoundingClientRect().bottom >= 150
    ) {
      activeId = section.id;
      // console.log(section.id);
    }
  });
  navLinks.forEach(function (navLink) {
    // console.log(navLink.getAttribute("href") == `#${activeId}`);
    navLink.classList.remove("active");
    if (navLink.getAttribute("href") == `#${activeId}`) {
      navLink.classList.add("active");
    }
  });
}
window.addEventListener("scroll", function () {
  navUpdate();
});
