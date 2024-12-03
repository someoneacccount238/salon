function playPause(btn) {
  $(document).ready(function () {
    var myVideo = document.getElementById("video");

    if (myVideo.paused) {
      myVideo.play();
      btn.innerHTML = "&#9646;&#9646";
    } else {
      myVideo.pause();
      btn.style.fontSize = "20px";
      btn.innerHTML = "&nbsp;&#9655;&nbsp;";
    }
  });
}

var translation = {
  menu_item1: { ru: "Часы работы", en: "Work hours" },
  mon_fri:{ru:"Пн - пт", en:"Mon - Fri"},
  sat:{ru:"Сб", en:"Sat"},
  sun:{ru:"Вс", en:"Sun"},
  menu_item2: { ru: "О нас", en: "About us" },
  menu_item3: { ru: "Прайс", en: "Price list" },
  search: { ru: "Я ищу...", en: "I search for..." },
  title1: { ru: "Салон красоты", en: "Beauty salon" },
  title2: { ru: "В Киеве", en: "In Kyiv" },
  services__text_italic: { ru: "Наши услуги", en: "Our services" },
  services__text_large: { ru: " Популярные услуги", en: "Feautured services" },
  services__text_description: {
    ru: " Все виды процедур для вас ",
    en: "All kinds of procedures for your hands and feet.",
  },
  service1: { ru: "Прически", en: "Hairstyle" },
  from: { ru: "от", en: "from" },
  currency: { ru: "грн.", en: "uah" },
  service2: { ru: "Маникюр", en: "Manicure" },
  service3: { ru: "Макияж", en: "Make up" },
  about_us__text_italic: { ru: "О нас", en: "About us" },
  about_us__text_large: {
    ru: " ДОБРО ПОЖАЛОВАТЬ В BEAUTY STUDIO! ",
    en: "WELCOME TO BEAUTY STUDIO!",
  },
  about_us__text_description1: {
    ru: "Beauty Studio - это идеальное место, где можно получить высококачественный уход за ногтями и спа-услуги в чистой и уютной атмосфере. ",
    en: "Beauty Studio is a perfect place to get high-quality nail care and spa services in a clean and welcoming atmosphere.",
  },
  about_us__text_description2: {
    ru: "Наши лицензированные мастера маникюра всегда в курсе последних тенденций и по-настоящему заботятся о своих клиентах. Мы также предлагаем бесплатный Wi-Fi, расслабляющую музыку и бесплатное печенье и напитки, чтобы сделать ваше пребывание еще более приятным. ",
    en: "Our licensed nail artists are always aware of the latest trends and truly care about their clients. We also offer free Wi-Fi, relaxing music, and complimentary cookies and beverages to make your experience more enjoyable.",
  },

  call_us: { ru: "Звоните нам прямо сейчас!", en: "Call us now!" },
  features_list__text_white1: {
    ru: "Стерильные инструменты",
    en: "Sterile Tools",
  },
  features_list__text_white2: {
    ru: "Квалифицированный персонал ",
    en: "Expert Staff",
  },
  features_list__text_white3: { ru: "Более 100 цветов ", en: "100+ Colors" },
  features_list__text_white4: { ru: "Известные бренды ", en: "Famous Brands" },
  features_list__text_description1: {
    ru: "У нас есть одноразовые пилочки и стерилизаторы сухим способом. ",
    en: "We have one-use files and dry-heat sterilizers.",
  },
  features_list__text_description2: {
    ru: "Наши мастера ногтевого сервиса работают быстро и безопасно. ",
    en: "Our nail masters work fast and safely.",
  },
  features_list__text_description3: {
    ru: "Вы можете выбрать любой лак для ногтей, который вам нравится. ",
    en: "You can choose any nail polish you like.",
  },
  features_list__text_description4: {
    ru: "Нашими партнерами являются Luxio, OPI, Essie и другие. ",
    en: "Our partners are Luxio, OPI, Essie, etc.",
  },
  team__text_italic: { ru: "Команда", en: "Team" },
  team__text_large: { ru: " Наши мастера ", en: "MASTERS" },
  team__text_description: {
    ru: " Наши феи маникюра, педикюра и прически позаботятся о вас. ",
    en: "Our fairies of manicure, pedicure and hairstyles will take care of you.",
  },
  worker1_name: { ru: "Рябова Регина", en: "Regina Ryabova" },
  worker1_job: { ru: "Владелец и администратор", en: "Owner & Administrator" },
  worker2_name: { ru: "Яковенко Софья", en: "Sofiya Yakovenko" },
  worker2_job: {
    ru: "Лицензированный мастер по маникюру ",
    en: "Licensed Nail Technician",
  },
  worker3_name: { ru: "Овчаренко Янина", en: "Yanina Ovcharenko" },
  worker3_job: {
    ru: "Лицензированный парикхмахер",
    en: "Licensed Hair Stylist",
  },
};

// simple function to write the info to the page
function get_i18n(item, lang) {
  document.write(translation[item][lang]);
}
