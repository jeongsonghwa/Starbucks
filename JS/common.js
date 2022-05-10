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

//올해출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 