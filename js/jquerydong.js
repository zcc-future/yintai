$(document).ready(function(){
	$(".bannerleft").mouseover(function(){
		index=$(this).index()
		$(".fu").eq(index).css("display","block")
	})
	$(".bannerleft").mouseout(function(){
		index=$(this).index()
		$(".fu").eq(index).css("display","none")
	})
 //选项卡
 $(".wx").mouseover(function(){
	$(".wxk").css("display","block")
	$(this).css("background","white")
	$(".wx img").eq(1).css("display","none")
})
$(".wx").mouseout(function(){
	$(".wxk").css("display","none")
	$(this).css("background","none")
	$(".wx img").eq(1).css("display","block")
})

//微信选项卡
$(".wyt").mouseover(function(){
	$(".wytk").css("display","block")
	$(this).css("background","white")
	$(".wyt img").css("display","none")
})
$(".wyt").mouseout(function(){
	$(".wytk").css("display","none")
	$(this).css("background","none")
	$(".wyt img").css("display","block")
})
//我的银泰选项卡


})