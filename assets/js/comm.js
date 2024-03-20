// gnb
$('.click').on('click', function(event) {
  const $subMenu = $(this).find('ul.depth2');
  
  $('ul.depth2').not($subMenu).hide();
  $subMenu.toggle();
  
  event.preventDefault();
});

// aos
AOS.init();

// swiper
var swiper = new Swiper(".main-slide", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop : true,
  loopAdditionalSlides : 1,
});

var swiper = new Swiper(".upcoming-slide", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".news-slide", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".studios-slide", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 왜,, 안 되는데^-^...? inner로 하면 되긴 되는데,,,
// scroll에 따른 header의 색상 변화
$(window).on('scroll', function() {
  if($(window).scrollTop()){
    $('#header').addClass('active');
  }else{
    $('#header').removeClass('active');
  }
});

// sub_롤링 배너1
let roller = document.querySelector('.rolling-list.bt1');
roller.id = 'roller1';

let clone = roller.cloneNode(true)

clone.id = 'roller2';
document.querySelector('.bt-slide.bt1').appendChild(clone);

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.rolling-list.bt1 div').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');

// sub_롤링 배너2
let roller2 = document.querySelector('.rolling-list.bt2');

// 이 요소를 복제합니다.
let clone2 = roller2.cloneNode(true);

// 복제된 요소에 새로운 ID를 할당합니다.
clone2.id = 'roller2';

// bt2 요소에 복제된 요소를 추가합니다.
document.querySelector('.bt-slide.bt2').appendChild(clone2);

// 새롭게 복제된 요소의 left 값을 설정합니다.
document.querySelector('#roller2').style.left = document.querySelector('.rolling-list.bt2 div').offsetWidth + 'px';

// 클래스를 추가합니다.
roller2.classList.add('original');
clone2.classList.add('clone');
