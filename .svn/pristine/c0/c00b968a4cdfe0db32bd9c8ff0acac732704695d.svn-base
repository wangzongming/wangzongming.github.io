
//返回顶部
var timer='';
$('.go-top img').on('click',function(){
  var m = $('body').height()-200;
  timer=setInterval(function(){
    if(m<=0){
      clearInterval(timer);
      return;
    }
    $(window).scrollTop(m-=30);

  },15)
})

//下拉菜单
var down_menu = false;
$('.header-r img').eq(1).click(function(){
  if(down_menu){
      $('.down_menu').hide();
      down_menu = !down_menu;
  }else{
     $('.down_menu').show()
     down_menu = !down_menu;
  }
 
})

//返回箭头
$('.leftArr-img').click(function(){
  history.back();
})

//tab  //行业咨询 
$('.industry-tab div').on('click',function(){
  $(this).addClass('blue').siblings().removeClass('blue');
  var i =  $(this).data('index');
  if(i=='0'){
    $('.industry-industry').hide();
    $('.industry-company').show();
  }else{
    $('.industry-industry').show();
    $('.industry-company').hide();
  }
})

//tab  ///产品类别 
$('.valve-tab div').on('click',function(){
  $(this).addClass('blue').siblings().removeClass('blue');
  var i =  $(this).data('index');
  if(i=='0'){
    $('.valve-industry').hide();
    $('.valve-company').show();
  }else{
    $('.valve-industry').show();
    $('.valve-company').hide();
  }
})
$('.valve1-tab').on('click','div',function(){
  $(this).addClass('blue').siblings().removeClass('blue');
  var i =  $(this).data('index');
  if(i=='0'){
    $('.valve1-industry').hide();
    $('.valve1-company').show();
  }else{
    $('.valve1-industry').show();
    $('.valve1-company').hide();
  }
})
$('.valve2-tab div').on('click',function(){
  $(this).addClass('blue').siblings().removeClass('blue');
  var i =  $(this).data('index');
  if(i=='0'){
    $('.valve2-industry').hide();
    $('.valve2-company').show();
  }else{
    $('.valve2-industry').show();
    $('.valve2-company').hide();
  }
})




//下载tab
$('.down-tab-ul li').on('click',function(){
  $(this).addClass('blue').siblings().removeClass('blue');
  var i = $(this).data('index');
  $('.download-tab-con').hide()
  $('.download-tab-con').eq(i).show();
})
