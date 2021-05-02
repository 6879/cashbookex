$(function() {
    $(document).ready(function(){
      $('#icon1').click(function(){
        $('.one').toggleClass('flaticon-minus')
        $('.two').removeClass('flaticon-minus')
      });
      $('#icon2').click(function(){
        $('.two').toggleClass('flaticon-minus')
        $('.one').removeClass('flaticon-minus')
      });
      $('#icon3').click(function(){
        $('.three').toggleClass('flaticon-minus')
        $('.four').removeClass('flaticon-minus')
      });
      $('#icon4').click(function(){
        $('.four').toggleClass('flaticon-minus')
        $('.three').removeClass('flaticon-minus')
      });
      $('#icon5').click(function(){
        $('.five').toggleClass('flaticon-minus')
        $('.six,.seven').removeClass('flaticon-minus')
      });
      $('#icon6').click(function(){
        $('.six').toggleClass('flaticon-minus')
        $('.five,.seven').removeClass('flaticon-minus')
      });
      $('#icon7').click(function(){
        $('.seven').toggleClass('flaticon-minus')
        $('.six,.five').removeClass('flaticon-minus')
      });
      $('#icon8').click(function(){
        $('.eight').toggleClass('flaticon-minus')
      });
      $('#icon9').click(function(){
        $('.nine').toggleClass('flaticon-minus')
        $('.ten').removeClass('flaticon-minus')
      });
      $('#icon10').click(function(){
        $('.ten').toggleClass('flaticon-minus')
        $('.nine').removeClass('flaticon-minus')
      });
      $('#icon11').click(function(){
        $('.eleven').toggleClass('flaticon-minus')
        $('.twelve').removeClass('flaticon-minus')
      });
      $('#icon12').click(function(){
        $('.twelve').toggleClass('flaticon-minus')
        $('.eleven').removeClass('flaticon-minus')
      });

      $('#icon13').click(function(){
        $('.thirteen').toggleClass('flaticon-minus')
        $('.fourtheen,.fifteen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon14').click(function(){
        $('.fourtheen').toggleClass('flaticon-minus')
        $('.thirteen,.fifteen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon15').click(function(){
        $('.fifteen').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon16').click(function(){
        $('.sixteen').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon17').click(function(){
        $('.seventeen').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon18').click(function(){
        $('.eighteen').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.seventeen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon19').click(function(){
        $('.nineteen').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.seventeen,.eighteen,.twenty,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon20').click(function(){
        $('.twenty').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty-one,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon21').click(function(){
        $('.twenty-one').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-two,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon22').click(function(){
        $('.twenty-two').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-three,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon23').click(function(){
        $('.twenty-three').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-four').removeClass('flaticon-minus')
      });
      $('#icon24').click(function(){
        $('.twenty-four').toggleClass('flaticon-minus')
        $('.thirteen,.fourtheen,.fifteen,.sixteen,.seventeen,.eighteen,.nineteen,.twenty,.twenty-one,.twenty-two,.twenty-three').removeClass('flaticon-minus')
      });


      $('#notice').on({
            'click':function(){
                $('#notic-show').toggle(300);
                $('#user-show,#profile-show').hide(300);
            },
       });
      $('#profile').on({
            'click':function(){
              $('#profile-show').toggle(200);
              $('#user-show,#notic-show').hide(200);
            },
       });
      $('#user').on({
            'click':function(){
              $('#user-show').toggle(200);
              $('#profile-show,#notic-show').hide(200);
            },
       });
      $('.app-main').on({
            'click':function(){
              $('#user-show,#profile-show,#notic-show').hide(200);
            },
       });
      $('.app-sidebar').on({
            'click':function(){
              $('#user-show,#profile-show,#notic-show').hide(200);
            },
       });


  });
});

 $('#navbar li').hover(function(){
	$('#dropdownmenu').toggle(200);
});