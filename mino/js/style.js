		document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/16+"px"
		window.addEventListener("resize",function(){
			document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/16+"px"
		})
		
		new Swiper(".swiper-container",{
				direction : 'horizontal',
				loop:true,
//				autoplay : 2000,
//				autoplayDisableOnInteraction : false,
				onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				    swiperAnimateCache(swiper); //隐藏动画元素 
				    swiperAnimate(swiper); //初始化完成开始动画
				}, 
				onSlideChangeEnd: function(swiper){ 
				    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				} 
			})
		//alert($("#m_btn").length)
		$("#m_btn").on("touchend",function(){
			
			if($("#aud")[0].paused){
				$("#aud")[0].play();
				$(this).addClass("musicOn")
			}else{
				$("#aud")[0].pause();
				$(this).removeClass("musicOn")
			}
		})