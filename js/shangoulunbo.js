/**
 * Created by Jason on 2018/3/15.
 */



//current position
var shangoupos = 0;
//number of slides
var shangoutotalSlides = $('#shangouwrap ul li').length;
//get the slide width
var shangousliderWidth = $('#shangouwrap').width();


$(document).ready(function(){


    /*****************
     BUILD THE SLIDER
     *****************/
    //set width to be 'x' times the number of slides
    $('#shangouwrap ul#shangouul').width(shangousliderWidth*shangoutotalSlides);
    // alert($('#shangouwrap ul#shangouul').width(shangousliderWidth*shangoutotalSlides));

    //next slide
    $('#rightgo').click(function(){

        shangouslideRight();
        // alert("right");
    });

    //previous slide
    $('#leftgo').click(function(){

        shangouslideLeft();
        // alert("left");
    });



    /*************************
     //*> OPTIONAL SETTINGS
     ************************/
        //automatic slider
    var shangouautoSlider = setInterval(shangouslideRight, 3000);

    //for each slide
    $.each($('#shangouwrap ul li'), function() {
        //create a pagination
        var li = document.createElement('li');
        $('#shangouextrawrap ul').append(li);
    });

    //pagination
    shangouextrawrap();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#shangouwrap').hover(
        function(){ $(this).addClass('active'); clearInterval(shangouautoSlider); },
        function(){ $(this).removeClass('active'); shangouautoSlider = setInterval(shangouslideRight, 3000); }
    );



});//DOCUMENT READY



/***********
 SLIDE LEFT
 ************/
function shangouslideLeft(){
    shangoupos--;
    if(shangoupos==-1){ shangoupos = shangoutotalSlides-1; }
    $('#shangouwrap ul#shangouul').css('left', -(shangousliderWidth*shangoupos));

    //*> optional

    shangouextrawrap();
}


/************
 SLIDE RIGHT
 *************/
function shangouslideRight(){
    shangoupos++;
    if(shangoupos==shangoutotalSlides){ shangoupos = 0; }
    $('#shangouwrap ul#shangouul').css('left', -(shangousliderWidth*shangoupos));

    //*> optional

    shangouextrawrap();
}




/************************
 //*> OPTIONAL SETTINGS
 ************************/

function shangouextrawrap(){
    $('#shangouextrawrap ul li').removeClass('active');
    $('#shangouextrawrap ul li:eq('+shangoupos+')').addClass('active');
}