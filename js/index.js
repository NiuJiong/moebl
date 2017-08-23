$(function() {
	//	合作商家滚动
	//	li长度
	var lis = $(".consociation .rolllllll ul li").length;
	//	li宽度
	var liwidth = $(".consociation .rolllllll ul li").width();
	//	ul父级宽度
	var rollwidth = $(".consociation .rolllllll").width();
	//	console.log(rollwidth);
	//	每次滚动的长度
	//	var linubs= Math.floor(rollwidth/(liwidth+34)) *(liwidth+34);
	//	console.log(linubs);
	//	li总长度
	var changdu = lis * liwidth + (lis - 1) * 34;
	//	滚动原始数值
	var left = 0;
	//  可滚动最大距离
	var num = Math.floor(changdu / rollwidth) * rollwidth;

	$(".consociation .left").click(function() {
		$(".consociation .right").removeClass("active");
		$(this).addClass("active");
		if(left >= 0) {
			left = 0
		} else {
			left = left + rollwidth;
		}
		$(".consociation .rolllllll ul").css("margin-left", left);
	});

	$(".consociation .right").click(function() {
		$(".consociation .left").removeClass("active");
		$(this).addClass("active");
		if(left <= -num) {
			left = -num;
		} else {
			left = left - rollwidth;
		}
		$(".consociation .rolllllll ul").css("margin-left", left);
	});




	//	是否微信
	var ua = navigator.userAgent.toLowerCase();
	var u = navigator.userAgent;
//	ios微信不弹出电话提示
	
		if(ua.match(/MicroMessenger/i) == "micromessenger" && !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
			$("slide .three").addClass("active");
		}else{
			$("slide .three").click(function() {
				$(".bigtan").addClass("active");
			});
		}
	$(".bigtan .quxiao").click(function() {
		$(".bigtan").removeClass("active");
	});
	$("slide .one").click(function() {	
		if(ua.match(/MicroMessenger/i) == "micromessenger") {
			if($(".wapim").hasClass("active")) {
				$(".wapim").removeClass("active");
			} else {
				$(".wapim").addClass("active");
			}
		}else{
			if($(this).find(".buzou").hasClass("active")) {
				$(this).find(".buzou").removeClass("active");
			} else {
				$(this).find(".buzou").addClass("active");
			}
		}
	});
});