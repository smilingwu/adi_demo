$(document).ready(function(){
	$('.no-active').hover(function() {
        $(this).find('p').addClass('p-hover');
    }, function() {
        $(this).find('p').removeClass('p-hover');
    });
	//wrap-box固定在顶部
	//var $warp_box_height=$('.wrap-box').height();
	$(window).scroll(function(event) {
	     var scroll_h = $(window).scrollTop();
	     if (scroll_h >=0) {
	         $('body').addClass('fixed_header');
	         $('.list-section').addClass('mt131');
	         $('.wrap-box').addClass('container-fluid p0');
	         $('.row.wrapper.white-bg').addClass('p4');
	     } 
	 });
	//  加载loading,2秒后自动消失
	$('#loadBtn').click(function(){
		console.log($('.loading'));
		$('.loading').show(300);
	});
	clearInterval(tiemr);
	var tiemr=setInterval(function(){
		$('.loading').hide();
	},2000);
	//没有填写信息获得焦点弹出提示
	$('.cr-no').focus(function(){
		if($('input[type="text"]').val()==""){
			$('.warning').show();
		}
	});
	$(".cr-no").blur(function(){
    	$('.warning').hide();
	});
	//弹出层
	$('#Rejected').click(function(){
		$('.popup').show(300);
	})
	$('#Cancel').click(function(){
		$('.popup').hide();
	});
	//弹出层内容提示失去焦点弹出
	$(".popupContent").blur(function(){
    	if($('textarea[name="textarea"]').val()==""){
			alert("请输入内容！");
		}
	});
	//显示当前页面所处的状态
	if($('#detail-page')){
		$('.detail-item').find('.shape-pur').addClass('shape-bottom');
		$('.shape-text').css('color','#f74f4c');
	}
	//点击相关图片在另一窗口显示原图
	$(".img-item").find('a').click(function(){
	     var id=$(this).attr("id");//获取图片的id;
	     window.open("img/"+id+ ".jpg","","toolbar=no,scrollbars=no,menubar=no");//打开一个新的窗口，在新的窗口显示图片的本来大小
	  });
})
