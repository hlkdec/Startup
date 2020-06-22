$(document).ready(function(){
	$('.slider').slick({
		// centerPadding: '15px',
		infinite: true,
        slidesToShow: 4,
        rows:1,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed:1000,
        lazyLoad:'progressive',
        responsive:[{
        	breakpoint: 1041,
        	settings:{
        		slidesToShow:3,
        		slidesToScroll: 1
        	}
        },{
        	breakpoint:787,
        	settings:{
        		slidesToShow:2,
        		slidesToScroll: 1
        	}
        },{
        	breakpoint:550,
        	settings:{
        		slidesToShow:1,
        		slidesToScroll:1
        	}
        }]
	});
	$('.preslider').slick({
		infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        // autoplay:true,
        autoplaySpeed:5000,
        fade:true,
        speed:600,
        dots:true,
        lazyLoad:'progressive',
        
	})
});
$('.dDMenu_icon').on('click',function(){
	$('.nav').slideToggle();
});

