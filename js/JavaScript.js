$(function(){
	
	
		/* popUp */
	$(".header h5").click(function(){
		$("#popUp").show();
	});
	
	$(".close a").click(function(){
		$("#popUp").hide();
	});
	
	
		/* slide */

		$(".slide01 li").each(function(aa){ //나열
				$(this).css("left",1100*aa);
			});  //0:1100 1:2200 2:3300 4:4400 
		
	 		setInterval(function(){ 
				$(".slide01 li").each(function(){  
					var nowLeft = parseInt($(this).css("left")); // 현재 이미지의 왼쪽 위치값을 읽어온다.
					var moveLeft = nowLeft - 1100;
					
						$(this).animate({left:moveLeft},1100, function(){
						if(moveLeft<=-1100){       // if(moveLeft<=-2400){
							$(this).css("left",3300); //     $(this).css("left",1200);
							

						}
					}); 
					
					
				});
			},4400);
			
			

});  // $(function(){   끝