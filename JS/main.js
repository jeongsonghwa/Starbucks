// 클래스가 search인 요소를 찾아서 searchE1변수에 할당
const searchEl = document.querySelector('.search');
//효율을 위해 searchE1에서 input을 찾는것으로 변경함
const searchInputEl = searchEl.querySelector('input');

// 문제: 돋보기 아이콘을 클릭하면 input요소 선택이 안됨
// 해결: input요소를 꼭 선택해야하는 것이 아니라 input요소가 소속되어있는 div 아무꺼나 클릭하면 focus 되게 js를 통해 구현
// 함수기능:js를통해서 focus가 가능한 input요소에 focus를 강제적으로 지정
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

//search에 focus되면 2번째 함수가 실행이 된다.
//input에 focus되면 class가 search인 div요소에 focused클래스를 추가하겠다.
//css를 통해서 선택이되면 파일할수 있따.
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    //html에 속성을 지정한다.
    //searhINput에 html속성을 지정할 때 사용
    searchInputEl.setAttribute('placeholder', '통합검색');
});


//focus가 제거되었을 때 
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


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

window.addEventListener('scroll' , _.throttle(function(){
    console.log(Window.scrollY);

    if(window.scrollY > 500){
        // gsap.to(요소,지속시간,옵션);
       gsap.to(badgeEl, .6, {
           opacity: 0,
           display: 'none'
       });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));


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
