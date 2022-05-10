


// 화면의 스크롤값이 일정값 이상 커지면 뱃지가 사라짐 : ver.CSS
// const badgeEl = document.querySelector('header .badges');
// //우리가 보고있는 화면 자체 = window
// //-.throttle(우리가 사용하고싶은 함수, 시간) 
// window.addEventListener('scroll' , _.throttle(function(){
//     console.log(Window.scrollY);
//     //화면이 스크롤될 때 마다 scrollY가 갱신된다.
//     if(window.scrollY > 500){
//         //배지 숨기기 
//         badgeEl.style.display = 'none';
//     } else {
//         //배지 꺼내기
//         badgeEl.style.display = 'block';
//     }
// //300 = 0.3s : 0.3초마다 기능이 수행되도록 제한을 걸었다. 
// }, 300));



const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll' , _.throttle(function(){
    console.log(Window.scrollY);

    if(window.scrollY > 500){
        //배지 숨기기
        // gsap.to(요소,지속시간,옵션);
       gsap.to(badgeEl, .6, {
           opacity: 0,
           display: 'none'
       });
       //버튼보이기
       gsap.to('#to-top',.2,{
        x: 0
    });
    } else {
        //배지보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //버튼숨기기
        gsap.to('#to-top',.2,{
            x: 100
        });
    }
}, 300));

toTopEl.addEventListener('click',function(){
    gsap.to(window, .7, {
        scrollTo: 0
    })
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
// fadeE1을 개별로 가지고나와 각각의 항목에 function을 넣음
fadeEls.forEach(function (fadeEl,index) {
    gsap.to(fadeEl, 1, {
        // 순차적 delay를 위해서
        delay: (index+1)* .7,
        opacity: 1
    });
});

// new를 사용하여 js의 생성자 생성
// new Swiper( 선택자, 옵션 )
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    // 스와이퍼에는 가로가 기본값으로 명시되어있어서 입력 안해줘도됨
    // direction: 'horizontal',
    slidesPerView : 3, //한번에 보여줄 슬라이드 갯수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay:{
        delay: 1000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부        
    },
    navigation: {
        prevEl: '.promotion .swiper-prev', //이전버튼
        nextEl: '.promotion .swiper-next'  //다음버튼
    }
});

new Swiper('.awards .swiper-container', {
    // direction: 'horizontal';
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function (){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    }else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay , size){
    // gsap.to(요소 , 시간, 옵션);
    gsap.to(selector, 
        random(1.5, 2.5),
     {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        dealy: random(0, delay)
    });
}


floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic
      .Scene({
          triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
          triggerHook: .8 //
        })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});

