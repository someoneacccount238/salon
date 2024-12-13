function playPause(btn) {
    $(document).ready(function() {
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
    mon_fri: { ru: "Пн - пт", en: "Mon - Fri" },
    sat: { ru: "Сб", en: "Sat" },
    sun: { ru: "Вс", en: "Sun" },
    menu_item2: { ru: "О нас", en: "About us" },
    menu_item3: { ru: "Прайс", en: "Price list" },
    search: { ru: "Я ищу...", en: "I search for..." },

    phone_call: { ru: "Хотите, перезвоним Вам за 30 секунд?", en: "Would you like us to call you in 30 seconds?" },
    rating: { ru: "Рейтинг организации в Google", en: "Organization's Google rating" },
    title1: { ru: "BEAUTY STUDIO", en: "BEAUTY STUDIO" },
    action: { ru: "Онлайн-запись", en: "Book Appointment" },
    action2: { ru: "запишитесь за 1 минуту", en: "book in 1 minute" },
    title2: {
        ru: "ЗАПИШИСЬ НА СТРИЖКУ В КИЕВЕ",
        en: "MAKE AN APPOINTMENT IN KYIV",
    },
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
    products: { ru: "Средства", en: "Products" },
    products_title: {
        ru: "Лучшие средства по уходу за ногтями",
        en: "Top Nail Care Products",
    },
    products_description: {
        ru: "Купите все, что вам нужно, в нашем салоне.",
        en: "Buy everything you need in our salon.",
    },
    learn_more: { ru: "УЗНАТЬ ПОДРОБНЕЕ", en: "LEARN MORE" },
    sale_title: { ru: "скидка", en: "50%" },
    sale_amount: { ru: "50%", en: "off" },
    sale_description: {
        ru: "При всех бронированиях до 25.12.",
        en: "On all bookings before 12/25.",
    },
    reviews_subtitle: { ru: "Отзывы", en: "Reviews" },

    reviews_title: {
        ru: "НАШИ КЛИЕНТЫ О НАС",
        en: "OUR CLIENTS ABOUT US"
    },
    reviews_description: {
        ru: "Мы так благодарны за каждый оставленный вами отзыв!",
        en: "We are so grateful for each review you leave!"
    },
    review_person1: { ru: "Щербак Оксана", en: "Oksana Scherbak" },
    review_person2: {
        ru: "Желиба Светлана",
        en: "Svetlana Zheliba"
    },
    review_person3: { ru: "Устинова Светлана", en: "Svetlana Ustinova" },
    review1: { ru: "Мне понравилось посещение Beauty Studio. Это новый, современный и стерильный салон с одноразовыми инструментами, что для меня очень важно. Я чувствовала себя в безопасности и наслаждалась своим свежим маникюром по вполне доступной цене. Большое спасибо Софии!", en: "I enjoyed my visit to Beauty Studio. It's a new, modern, and sterile salon with one-use tools whic is very important to me. I felt safe and love my fresh manicure for quite an affordable price. Many thanks to Sofiya!" },
    review2: { ru: "У меня снова остались прекрасные впечатления от посещения Beauty Studio. Просто отличный салон! Как всегда, я насладилась расслабляющей и комфортной атмосферой, а также отличным обслуживанием. Мне сделали качественный гелевый педикюр и массаж стоп. Большое спасибо!", en: "I had a superb experience at Beauty Studio again. Just an excellent salon! As always, I enjoyed relaxing and comfortable atmosphere along with great service. Got a well-done gel perdicure and feet massage. Thanks a lot!" },
    review3: { ru: "София была очень приветлива и профессиональна! Я пришла пораньше, но она сразу же приступила к работе с моими ногтями. Всего за час я сделала полный маникюр с покрытием shellac. Я была впечатлена такой качественной и быстрой работой.", en: "Sofiya was so friendly and professional! I arrived early but she started to work with my naiuls immediately. In just an hour, I had a full shellac manicure. I was impressed by such a high-quality and fast work." },
    review1_details: {
        ru: "Мастер маникюра: София",
        en: "Nail master: Sofiya"
    },
    date1: { ru: "15 сентября, 2024", en: "September 15, 2024" },
    date2: { ru: "5 ноября, 2024", en: "November 5, 2024" },
    date3: { ru: "22 марта, 2024", en: "March 22, 2024" },
    contacts: { ru: "Контакты", en: "Contacts" },
    contact_us_now: {
        ru: "СВЯЖИТЕСЬ С НАМИ ПРЯМО СЕЙЧАС",
        en: "CONTACT US NOW"
    },
    contacts_description: {
        ru: "Не забудьте записаться на прием, чтобы получить лучший сервис!",
        en: "Don't forget to book an appointment to get the best service!"
    },
    address: { ru: "Адрес", en: "Аddress" },
    address_line: { ru: "Киев, ул. Сечевых Стрельцов, 14-А , 10003 ", en: "Kiev, 14-A Sichevykh Streltsov str. , 10003" },
    phone: { ru: "Телефон", en: "Phone" },
    email: { ru: "E-mail", en: "Email" },
    footer: { ru: "Уход, которого вы заслуживаете.", en: "Nail care you deserve." },
    services: {
        ru: "Сервисы ",
        en: "Services"
    },
    about: { ru: "О нас", en: "About" },
    manicure: { ru: "Маникюр", en: "Manicure" },
    hairstyles: { ru: "Прически", en: "Hairstyles" },
    testimonials: { ru: "Отзывы", en: "Testimonials" },
    created_by: { ru: "© Сделано", en: "© Created by" },
    all_rights_reserved: { ru: "Все права защищены", en: "All rights Reserved" }
};

// simple function to write the info to the page
function get_i18n(item) {
    var lang = "ru";
    document.write(translation[item][lang]);
}