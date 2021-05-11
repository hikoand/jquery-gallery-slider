$(function () {
  /*script 영역 slide gallery 예*/
  let marginLeftPw;
  $('img.prev').css('display', 'none'); //초기실행 시 prev 버튼 삭제
  console.log($('#navi .page_wrap').css('margin-left'));
  console.log(parseInt($('#navi .page_wrap').css('margin-left')));

  // thumb nail 이미지로 작동하는 스크립트 구현
  $('#navi a').on('click', function () {
    let imgSrc = $(this).attr('href');
    // let mainImg = $("#main img");
    /*string 을 자르는 method를 활용하여 alt 의 값을 추가하시오*/
    $('#main img').before("<img src='" + imgSrc + "' alt='thumb'>");

    if ($('#main img').is(':animated')) {
      //img가 animation이 진행중인지 판단하여 true / false로 반환한다.
      $('#main img').stop(); //기존 작동중인 animation을 중지한다.
      $('#main img').remove(); //img를 모두 삭제
      $('#main').prepend("<img src='" + imgSrc + "' alt=''>"); //클릭이 animation 작동시간보다 빠르게 실행했을 경우 animate를 작동하지 않고 직접 이미지를 변경 시킨다.
    } else {
      $('#main img:last').animate({ opacity: 0 }, 500, function () {
        $(this).remove();
      });
    }
    return false;
  });

  // prev,next 버튼으로 작동하는 스크립트 상수
  const marginNumber = 300;

  $('img.next').click(function () {
    marginLeftPw = $('#navi .page_wrap').css('margin-left');
    $('#navi .page_wrap').animate(
      { marginLeft: parseInt(marginLeftPw) - marginNumber },
      'fast',
      function () {
        // next 버튼을 click 후 animation이 끝난 후 실행 영역
        marginLeftPw = $('#navi .page_wrap').css('margin-left');
        $('img.prev').css('display', 'inline-block');
        if (parseInt(marginLeftPw) == -600) {
          // 3번째 페이지 노출 될때
          $('img.next').css('display', 'none');
        }
      }
    );
    // console.log(marginLeftPw)
  });

  $('img.prev').click(function () {
    marginLeftPw = $('#navi .page_wrap').css('margin-left');
    $('#navi .page_wrap').animate(
      { marginLeft: parseInt(marginLeftPw) + marginNumber },
      'fast',
      function () {
        // next 버튼을 click 후 animation이 끝난 후 실행 영역
        marginLeftPw = $('#navi .page_wrap').css('margin-left');
        $('img.next').css('display', 'inline-block');
        if (parseInt(marginLeftPw) == 0) {
          // 3번째 페이지 노출 될때
          $('img.prev').css('display', 'none');
        }
      }
    );
  });
}); //document ready
