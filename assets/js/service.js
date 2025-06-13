

const servicesRo = [
   {
       title: "REPARAȚIE FARURI",
       content: "Înlocuirea farurilor defecte cu altele noi, uneori este foarte costisitoare, de aceea reparația auto-optică este avantajoasă."
   },
   {
       title: "INSTALARE XENON, LED, BILED",
       content: "Instalare xenon, implant Angel Eyes, schimbarea lentilei, xenon, bixenon, LED, BiLED, dynamic drive, proiecte de tuning."
   },
   {
       title: "CURĂȚARE INTERIOR EXTERIOR",
       content: "Cu timpul farurile își pierd din proprietăți și fluxul luminos scade considerabil, de aceea vă propunem mai multe metode de curățare."
   },
   {
       title: "REGLAREA UNGHIULUI DE ILUMINARE",
       content: "Reglarea unghiului de iluminare a farurilor. Noi vă ajutăm să rezolvați orice problemă."
   },
   {
       title: "SCHIMBAREA STICLEI",
       content: "Deseori, după accidente sau în urma unor incidente, reparația sticlei farurilor este imposibilă, ca rezultat apare necesitatea schimbării acesteia."
   },
   {
       title: "REPARĂM ORICE DEFECT",
       content: "Reparația reflectoarelor, corectorilor de reglare, schimbarea lentilei, reparația estetică a farurilor și stopurilor (lampă spate)."
   }
];

const servicesRu = [
  {
    title: "РЕМОНТ ФАР",
    content: "Замена повреждённых фар на новые может быть очень дорогой, поэтому ремонт оптики – более выгодное решение."
  },
  {
    title: "УСТАНОВКА XENON, LED, BILED",
    content: "Установка ксенона, ангельские глазки, замена линз, LED, BiLED, бикисенон, тюнинг-проекты и многое другое."
  },
  {
    title: "ЧИСТКА ВНУТРИ И СНАРУЖИ",
    content: "Со временем фары теряют прозрачность и световой поток снижается. Мы предлагаем несколько способов очистки."
  },
  {
    title: "РЕГУЛИРОВКА УГЛА СВЕТА",
    content: "Профессиональная регулировка угла наклона фар для безопасного и правильного освещения дороги."
  },
  {
    title: "ЗАМЕНА СТЕКЛА ФАРЫ",
    content: "После ДТП или повреждений замена стекла фары часто является необходимой. Мы подберем и установим новое."
  },
  {
    title: "РЕМОНТИРУЕМ ЛЮБЫЕ НЕИСПРАВНОСТИ",
    content: "Ремонт отражателей, корректоров, замена линз, косметический ремонт фар и задних фонарей."
  }
];

const plusServicesRo = [
  {
    title: "Montaj profesional de lentile Bi-LED",
    description: "Obține o iluminare puternică și uniformă cu lentile Bi-LED de ultimă generație, montate cu precizie și garanție.",
    id: 1,
  },
  {
    title: "Instalare Angel Eyes",
    description: "Transformă-ți mașina cu inelele Angel Eyes pentru un look modern și distinctiv, exact ca la modelele premium.",
    id: 2,
  },
  {
    title: "Reparații faruri de orice complexitate",
    description: "Indiferent de problema farului – crăpături, fisuri, aburire – avem soluția potrivită pentru orice marcă sau model.",
    id: 3,
  },
  {
    title: "Reparații electrice faruri",
    description: "Diagnosticăm și remediem rapid orice defecțiune electrică: becuri, conectori, unități de control sau reglaj automat.",
    id: 4,
  },
  {
    title: "Reparația reflectoarelor",
    description: "Refacem performanța iluminării prin restaurarea sau înlocuirea reflectoarelor arse sau deteriorate.",
    id: 5,
  },
  {
    title: "Înlocuirea sticlei de protecție",
    description: "Schimbăm sticla farului cu una nouă, perfect etanșată, redând aspectul original și protecția completă.",
    id: 6,
  },
  {
    title: "Polișare faruri",
    description: "Înlăturăm zgârieturile și stratul mat pentru a reda claritatea farurilor, îmbunătățind vizibilitatea și estetica.",
    id: 7,
  },
  {
    title: "Acoperire cu lac protector",
    description: "Protejăm farurile împotriva razelor UV, zgârieturilor și îngălbenirii prin aplicarea unui lac profesional de protecție.",
    id: 8,
  },
];

const plusServicesRu = [
  {
    title: "Профессиональный монтаж Bi-LED линз",
    description: "Мощное и равномерное освещение с Bi-LED линзами последнего поколения, установленных точно и с гарантией.",
    id: 1,
  },
  {
    title: "Установка Angel Eyes",
    description: "Преобразите внешний вид автомобиля с помощью световых колец Angel Eyes — современно и эффектно, как у премиум-моделей.",
    id: 2,
  },
  {
    title: "Ремонт фар любой сложности",
    description: "Трещины, запотевание, повреждения — мы решим любую проблему с фарами для любых марок и моделей.",
    id: 3,
  },
  {
    title: "Ремонт электрических элементов фар",
    description: "Быстрая диагностика и устранение неисправностей: лампочки, разъёмы, блоки управления или автоматическая регулировка.",
    id: 4,
  },
  {
    title: "Ремонт отражателей",
    description: "Восстанавливаем эффективность света путём замены или реставрации повреждённых или выгоревших отражателей.",
    id: 5,
  },
  {
    title: "Замена защитного стекла",
    description: "Меняем стекло фары на новое, герметичное и надёжное — возвращаем первоначальный вид и полную защиту.",
    id: 6,
  },
  {
    title: "Полировка фар",
    description: "Удаляем царапины и мутный слой, восстанавливая прозрачность фар и улучшая как видимость, так и внешний вид.",
    id: 7,
  },
  {
    title: "Покрытие защитным лаком",
    description: "Наносим профессиональный лак для защиты фар от UV-лучей, царапин и пожелтения.",
    id: 8,
  },
];

const testiRo = [
  {
    name: "Ion Țurcanu",
    review: "Am dus farurile pentru polisare și rezultatul a fost peste așteptări. Arată ca noi! Recomand cu toată încrederea.",
  },
  {
    name: "Tatiana Rusu",
    review: "Foarte profesioniști! Mi-au schimbat lentilele Bi-LED și acum văd perfect noaptea. Lucrează curat și rapid.",
  },
  {
    name: "Sergiu Munteanu",
    review: "Am avut o problemă electrică la farul stâng. Au diagnosticat repede și au rezolvat fără să schimbe tot blocul optic. Bravo!",
  },
  {
    name: "Natalia Bălan",
    review: "Personal amabil, prețuri corecte și rezultate excelente. Am mers pe recomandare și nu regret deloc.",
  },
];
const testiRu = [
  {
    name: "Ион Цуркану",
    review: "Сдал фары на полировку — результат превзошёл все ожидания. Выглядят как новые! Рекомендую от всей души.",
  },
  {
    name: "Татьяна Русу",
    review: "Очень профессиональные ребята! Поменяли линзы на Bi-LED — теперь ночью видно отлично. Работают чисто и быстро.",
  },
  {
    name: "Сергей Мунтяну",
    review: "Была проблема с электрикой в левой фаре. Быстро нашли неисправность и устранили её без замены всей фары. Молодцы!",
  },
  {
    name: "Наталья Балан",
    review: "Приветливый персонал, честные цены и отличный результат. Пришла по рекомендации и осталась довольна.",
  },
];



const servicesContainer = document.querySelector(".service-container");
const plusServiceContainer = document.querySelector(".plus-services-container");
const testiContainer = document.querySelector(".testi-container");



const RenderServices = ()=>{
  let cardHTML = "";
  if (document.querySelector(".langInfo").innerHTML === "Румынский"){
  let i = 1;
  servicesRu.forEach(({title, content})=>{
  cardHTML += `  <div class="col-lg-4 pt-4">
            <div class="service-block--style1 h-100 d-flex flex-column">
              <div class="service-block__content">
                <div class="service-block__icon background-image" style="background-image: url(&quot;../assets/img/shapes/shape-1.svg&quot;);">
                  <img src="../assets/img/icons/icon-2-${i}.svg" alt="icon">
                </div>
                <h3 class="service-block__title h5"><a href="#" data-i18n="servicesTitle_${i}">${title}</a></h3>
                <p class="service-block__text" data-i18n="servicesText_${i}">${content}</p>
                <a href="tel:078682298" class="vs-btn style13" data-i18n="contactUs">Связаться с нами</a>
              </div>
            </div>
          </div>`;
          i++
  })
  }else if(document.querySelector(".langInfo").innerHTML === "Română"){
    let i = 1;
servicesRo.forEach(({title, content})=>{
cardHTML += `  <div class="col-lg-4 pt-4">
          <div class="service-block--style1 h-100 d-flex flex-column">
            <div class="service-block__content">
              <div class="service-block__icon background-image" style="background-image: url(&quot;assets/img/shapes/shape-1.svg&quot;);">
                <img src="assets/img/icons/icon-2-${i}.svg" alt="icon">
              </div>
              <h3 class="service-block__title h5"><a href="#" data-i18n="servicesTitle_${i}">${title}</a></h3>
              <p class="service-block__text" data-i18n="servicesText_${i}">${content}</p>
              <a href="tel:078682298" class="vs-btn style13" data-i18n="contactUs">Contactează-ne</a>
            </div>
          </div>
        </div>`;
        i++
})
  }
  servicesContainer.innerHTML = cardHTML;
}



const RenderServicesPlus = ()=>{
  let cardHTML = "";
  if (document.querySelector(".langInfo").innerHTML === "Румынский"){
 
plusServicesRu.forEach(({title, description, id})=>{
  cardHTML += `<div class="col-lg-6">
          <div class="process-block--style1">
            <span class="process-block__number">0${id}</span>
            <div class="process-block__content">
              <h2 class="process-block__title" data-i18n="muchServicesTitle_${id}">${title}</h2>
              <p class="process-block__text" data-i18n="muchServicesText_${id}">${description}</p>
            </div>
          </div>
        </div>`;
  })
  }else if(document.querySelector(".langInfo").innerHTML === "Română"){
plusServicesRo.forEach(({title, description, id})=>{
cardHTML += `<div class="col-lg-6">
          <div class="process-block--style1">
            <span class="process-block__number">0${id}</span>
            <div class="process-block__content">
              <h2 class="process-block__title" data-i18n="muchServicesTitle_${id}">${title}</h2>
              <p class="process-block__text" data-i18n="muchServicesText_${id}">${description}</p>
            </div>
          </div>
        </div>`;
       
})
  }
  plusServiceContainer.innerHTML = cardHTML;
  
}



const RenderTesti = ()=>{
  let cardHTML = "";
let j = 1;

  if (document.querySelector(".langInfo").innerHTML === "Румынский"){
 
testiRu.forEach(({name, review})=>{
  cardHTML += `   <div class="col-xl-3 col-lg-6 ">
                        <div class="client-block--style5">
                            <div class="client-block__content pt-4">
                                <div class="client-block__rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fal fa-star"></i>
                                </div>
                                <p class="client-block__text" data-i18n="testiReview_${j}">“${review}”
                                </p>
                                <h5 class="client-block__name" data-i18n="testiName_${j}">${name}</h5>
                            </div>
                        </div>

                    </div>`;
  })
  }else if(document.querySelector(".langInfo").innerHTML === "Română"){
testiRo.forEach(({name, review})=>{
cardHTML += `   <div class="col-xl-3 col-lg-6 ">
                        <div class="client-block--style5">
                            <div class="client-block__content pt-4">
                                <div class="client-block__rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fal fa-star"></i>
                                </div>
                                <p class="client-block__text" data-i18n="testiReview_${j}">“${review}”
                                </p>
                                <h5 class="client-block__name" data-i18n="testiName_${j}">${name}</h5>
                            </div>
                        </div>

                    </div>`;
       
})
  }
  
  testiContainer.innerHTML = cardHTML;
}

RenderServices();
RenderServicesPlus();
RenderTesti();