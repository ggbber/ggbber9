

//current position
var neirongyingyongpos = 0;
//number of slides
var neirongyingyongtotalSlides = $('#neirongyingyong-wrap ul li').length;
//get the slide width
var neirongyingrongsliderWidth = $('#neirongyingyong-wrap').width();


$(document).ready(function(){


    /*****************
     BUILD THE SLIDER
     *****************/
    //set width to be 'x' times the number of slides
    $('#neirongyingyong-wrap ul#yingyongslider').width(neirongyingrongsliderWidth*neirongyingyongtotalSlides);

    //next slide
    $('#neirongyingyongnext').click(function(){
        neirongyingyongslideRight();
    });

    //previous slide
    $('#neirongyingyongpre').click(function(){
        neirongyingyongslideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
     ************************/
        //automatic slider
    var neirongyingyongautoSlider = setInterval(neirongyingyongslideRight, 3000);

    //for each slide
    $.each($('#neirongyingyong-wrap ul li'), function() {
        // //set its color
        // var c = $(this).attr("data-color");
        // $(this).css("background",c);

        //create a pagination
        var li = document.createElement('li');
        $('#neirongyingyongextra-wrap ul').append(li);
    });

    //counter
    neirongyingyongcountSlides();

    //pagination
    neirongyingyongextra();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#neirongyingyong-wrap').hover(
        function(){ $(this).addClass('active'); clearInterval(neirongyingyongautoSlider); },
        function(){ $(this).removeClass('active'); neirongyingyongautoSlider = setInterval(neirongyingyongslideRight, 3000); }
    );



});//DOCUMENT READY



/***********
 SLIDE LEFT
 ************/
function neirongyingyongslideLeft(){
    neirongyingyongpos--;
    if(neirongyingyongpos==-1){ neirongyingyongpos = neirongyingyongtotalSlides-1; }
    $('#neirongyingyong-wrap ul#yingyongslider').css('left', -(neirongyingrongsliderWidth*neirongyingyongpos));

    //*> optional
    neirongyingyongcountSlides();
    neirongyingyongextra();
}


/************
 SLIDE RIGHT
 *************/
function neirongyingyongslideRight(){
    neirongyingyongpos++;
    if(neirongyingyongpos==neirongyingyongtotalSlides){ neirongyingyongpos = 0; }
    $('#neirongyingyong-wrap ul#yingyongslider').css('left', -(neirongyingrongsliderWidth*neirongyingyongpos));

    //*> optional
    neirongyingyongcountSlides();
    neirongyingyongextra();
}




/************************
 //*> OPTIONAL SETTINGS
 ************************/
function neirongyingyongcountSlides(){
    $('#neirongyingyongcounter').html(neirongyingyongpos+1 + ' / ' + neirongyingyongtotalSlides);
}

function neirongyingyongextra(){
    $('#neirongyingyongextra-wrap ul li').removeClass('active');
    $('#neirongyingyongextra-wrap ul li:eq('+neirongyingyongpos+')').addClass('active');
}