$(document).ready(function(){
    $("tr:even").css("background", "red"); // 홀수번째
    $("tr:odd").css("background", "orange"); // 짝수번째
    $("td:first").css("background", "yellow"); // 첫번째
    $("td:last").css("background", "green"); // 마지막
    $(":header").css("background", "blue"); // h1 ~ h6 전체 적용
    $("li:eq(0)").css("background", "navy"); // eq(0) : 0번 인덱스 선택
    $("li:gt(0)").css("background", "purple"); // gt(0) : 0번 인덱스 이후 적용
    $("li:lt(3)").css("border", "4px solid gray"); // lt(3) : 인덱스 번호가 3보다 작은 것들에 적용
    $(":root").css("background", "lightgray"); // html 전체에 적용
    //실행함수(매개변수가 없는 함수)
    (function upDown(){
        $("h2").slideToggle(2000, upDown);  //콜백함수,재기함수
    })();

    //움직이는 요소 선택
    $(":animated").css("border", "4px solid darkred");
})