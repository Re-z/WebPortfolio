$('document').ready(function(){

	var imgWidth='948';
    var currentSlide = 2;// ? чего это не локальная переменная?
    var sliderMargin = $('.slider__item').length * imgWidth;


        //Move right/left functions
        function sliderMoveLeft() 
        
		{
            if(currentSlide===1) 
            {
                currentSlide=5;//$('.slider__item').length;
                $('#slider').animate(
                {
                    'margin-left': '-'+ (sliderMargin-imgWidth)
                }, 1000);
                return;
            }
            currentSlide--;

            $('#slider').animate(
                {
                    'margin-left': '+='+imgWidth
                }, 1000);
        }
       

        function sliderMoveRight() 

		{
            if(currentSlide===$('.slider__item').length) 
            {
                currentSlide=1;
                $('#slider').animate(
                {
                    'margin-left': 0
                }, 1000);
                return;
            }
            currentSlide++;

            $('#slider').animate(
                {
                    'margin-left': "-="+imgWidth
                }, 1000);
        }


        //Slider buttons activate
        $('.slider__btn_left').click(sliderMoveLeft);
        $('.slider__btn_right').click(sliderMoveRight);
        

        //Appear and disappear slider buttons
        $('.slider-wrapper').mouseenter(function()
        {
            $('.slider__btn').css({display: 'block'})
        }).mouseleave(function()
        {
            $('.slider__btn').css({display: 'none'})
        });


        //Radio buttons
	    $('.slider__radio-label').click(function()
	    {
       if($('.slider__radio-label').hasClass('slider__radio-label_checked'))
       	{
           $('.slider__radio-label').removeClass('slider__radio-label_checked');
           $(this).addClass('slider__radio-label_checked');
	    }
	    });

    	$('#radio1').click(function ()
        {
            currentSlide=1;
            $('#slider').animate(
                    {
                        'margin-left': 0
                    },1000)
        });

    	$('#radio2').click(function ()
        {
            currentSlide=2;
            $('#slider').animate(
                    {
                        'margin-left': "-"+imgWidth*(currentSlide-1)
                    },1000)
        });

    	$('#radio3').click(function ()
        {
            currentSlide=3;
            $('#slider').animate(
                    {
                        'margin-left': "-"+imgWidth*(currentSlide-1)
                    },1000)
        });

   		$('#radio4').click(function ()
        {
            currentSlide=4;
            $('#slider').animate(
                    {
                        'margin-left': "-"+imgWidth*(currentSlide-1)
                    },1000)
        });

    	$('#radio5').click(function ()
        {
            currentSlide=5;
            $('#slider').animate(
                    {
                        'margin-left': "-"+imgWidth*(currentSlide-1)
                    },1000)
        });
        //Radio finished

   		 //start minislider
	    $('.mini-slider-wrapper').hover(function() {
	        $('.mini-slider__pop-up').fadeToggle(400)
	    });

        //right/left buttons animation
        var minSlCurSlide=1;
        var minSlimgWidth=465;


        $('.mini-slider__btn_left').click(function(){
             if(minSlCurSlide===1)
            {
                minSlCurSlide=5;
                $('#mini-slider').animate(
                        {
                            'margin-left': '-'+minSlimgWidth*(minSlCurSlide-1)
                        },1000);
                return;
            }
            minSlCurSlide--;
            $('#mini-slider').animate(
                    {
                        'margin-left': '+=465px'
                    }, 1000);
        });


        $('.mini-slider__btn_right').click(function()
        {
            if(minSlCurSlide===5)
            {
                minSlCurSlide=1;
                $('#mini-slider').animate({
                    'margin-left': 0
                }, 1000);
                return;
            }
            minSlCurSlide++;
            $('#mini-slider').animate({
                    'margin-left': '-=465px'
            },1000)
        })

        /*function radioDep() {
        	if(currentSlide===4) 
        	{
        		$('.slider__radio-label').removeClass('slider__radio-label_checked');
        		$('#radio4__label').addClass('slider__radio-label_checked');
        	}
        }

        radioDep(); -----не пашет */ 



})