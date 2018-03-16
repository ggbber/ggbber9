/**
 * Created by Jason on 2018/3/13.
 */


window.onload=function(){
    /*倒计时的获取和显示*/
    function current() {
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        $("#hour").html(hour);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
    }
    setInterval(function(){$("#seconds").html(current)},1000);
}

$(window).resize(function() {
});

$(function(){
    /*购物部分的悬浮事件*/
    $("#collectionLi").on("mouseover mouseout",function (event) {
       if(event.type=="mouseover")
       {
           $("#collectionLi").css({
               "backgroundColor":"#ffffff",
               "color":"#ff6702"
           })

           $("#collectionDiv").css({
               "display":"block",
           });
       }
       else if(event.type=="mouseout")
       {
           $("#collectionLi").css({
               "backgroundColor":"",
               "color":""
           })

           $("#collectionDiv").css({
               "display":"none",
           })
       }
    });

    /*中间导航部分的悬浮事件*/
    // $(".middle_nav_collection").on("mouseover mouseout",function (event) {
    //     if(event.type=="mouseover")
    //     {
    //         $(".middle_nav_collection").css({
    //             "display":"block",
    //         })
    //
    //     }
    //     else if(event.type=="mouseout")
    //     {
    //         $(".middle_nav_collection").css({
    //             "display":"none",
    //         })
    //         // $('#xiaomiPart').delay(6000).hide(0);
    //     }
    // });

    /*小米手机部分的悬浮事件*/
    $("#xioamiPhone").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#xiaomiPart").css({
                "display":"block",
            })

        }
        else if(event.type=="mouseout")
        {
            $("#xiaomiPart").css({
                "display":"none",
            })
            // $('#xiaomiPart').delay(6000).hide(0);
        }
    });

    $("#xiaomiPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#xiaomiPart").css({
                "display":"block",
            })

        }
        else if(event.type=="mouseout")
        {
            $("#xiaomiPart").css({
                "display":"none",
            })
            // $('#xiaomiPart').delay(6000).hide(0);
        }
    });

    /*红米手机部分的悬浮事件*/
    $("#hongmiPhone").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#hongmiPart").css({
                "display":"block",
            })

        }
        else if(event.type=="mouseout")
        {
            $("#hongmiPart").css({
                "display":"none",
            })
            // $('#xiaomiPart').delay(6000).hide(0);
        }
    });

    $("#hongmiPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#hongmiPart").css({
                "display":"block",
            })

        }
        else if(event.type=="mouseout")
        {
            $("#hongmiPart").css({
                "display":"none",
            })
            // $('#xiaomiPart').delay(6000).hide(0);
        }
    });

    /*小米电视部分的悬浮事件*/
    $("#miTv").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#miTvPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#miTvPart").css({
                "display":"none"
            })
        }
    });

    $("#miTvPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#miTvPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#miTvPart").css({
                "display":"none",
            })
        }
    });

    /*小米笔记本部分的悬浮事件*/
    $("#notepad").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#notepadPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#notepadPart").css({
                "display":"none",
            })
        }
    });

    $("#notepadPart").on("mouseover mouseout",function (event) {
       if(event.type=="mouseover")
       {
           $("#notepadPart").css({
               "display":"block",
           })
       }
       else if(event.type=="mouseout")
       {
           $("#notepadPart").css({
               "display":"none",
           })
       }
    });

    /*小米盒子部分的悬浮事件*/
    $("#mibox").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#miboxPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#miboxPart").css({
                "display":"none",
            })
        }
    });

    $("#miboxPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#miboxPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#miboxPart").css({
                "display":"none",
            })
        }
    });

    /*小米新品部分的悬浮事件*/
    $("#newproduct").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#newproductPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#newproductPart").css({
                "display":"none",
            })
        }
    });

    $("#newproductPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#newproductPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#newproductPart").css({
                "display":"none",
            })
        }
    });

    /*小米路由器部分的悬浮事件*/
    $("#route").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#routePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#routePart").css({
                "display":"none",
            })
        }
    });

    $("#routePart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#routePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#routePart").css({
                "display":"none",
            })
        }
    });

    /*小米智能硬件部分的悬浮事件*/
    $("#hard").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#hardPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#hardPart").css({
                "display":"none",
            })
        }
    });

    $("#hardPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#hardPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#hardPart").css({
                "display":"none",
            })
        }
    });

    /*手机 电话卡部分的悬浮事件*/
    $("#mobie").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#mobiePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#mobiePart").css({
                "display":"none",
            })
        }
    });

    $("#mobiePart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#mobiePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#mobiePart").css({
                "display":"none",
            })
        }
    });

    /*电视 盒子部分的悬浮事件*/
    $("#tvbox").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#tvboxPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#tvboxPart").css({
                "display":"none",
            })
        }
    });

    $("#tvboxPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#tvboxPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#tvboxPart").css({
                "display":"none",
            })
        }
    });

    /*笔记本部分的悬浮事件*/
    $("#note").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#notePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#notePart").css({
                "display":"none",
            })
        }
    });

    $("#notePart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#notePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#notePart").css({
                "display":"none",
            })
        }
    });

    /*智能家电部分的悬浮事件*/
    $("#zhinengjiaidan").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengjiaidanPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengjiaidanPart").css({
                "display":"none",
            })
        }
    });

    $("#zhinengjiaidanPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengjiaidanPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengjiaidanPart").css({
                "display":"none",
            })
        }
    });

    /*健康 家居部分的悬浮事件*/
    $("#health").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#healthPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#healthPart").css({
                "display":"none",
            })
        }
    });

    $("#healthPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#healthPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#healthPart").css({
                "display":"none",
            })
        }
    });

    /*出行 儿童部分的悬浮事件*/
    $("#walk").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#walkPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#walkPart").css({
                "display":"none",
            })
        }
    });

    $("#walkPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#walkPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#walkPart").css({
                "display":"none",
            })
        }
    });

    /*路由器 随身配件部分的悬浮事件*/
    $("#navroute").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#navroutePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#navroutePart").css({
                "display":"none",
            })
        }
    });

    $("#navroutePart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#navroutePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#navroutePart").css({
                "display":"none",
            })
        }
    });

    /*移动电源 插线板部分的悬浮事件*/
    $("#yidongdianyuan").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#yidongdianyuanPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#yidongdianyuanPart").css({
                "display":"none",
            })
        }
    });

    $("#yidongdianyuanPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#yidongdianyuanPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#yidongdianyuanPart").css({
                "display":"none",
            })
        }
    });

    /*耳机 音箱部分的悬浮事件*/
    $("#erji").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#erjiPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#erjiPart").css({
                "display":"none",
            })
        }
    });

    $("#erjiPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#erjiPart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#erjiPart").css({
                "display":"none",
            })
        }
    });

    /*生活 米兔部分的悬浮事件*/
    $("#life").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#lifePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#lifePart").css({
                "display":"none",
            })
        }
    });

    $("#lifePart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#lifePart").css({
                "display":"block",
            })
        }
        else if(event.type=="mouseout")
        {
            $("#lifePart").css({
                "display":"none",
            })
        }
    });

    /*家电 热门部分悬浮事件*/
    $("#jiadianremen").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });

            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").removeClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
    });

    $("#jiadianremenPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });


            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
        }
    });

    /*家电 电视影音部分悬浮事件*/
    $("#jiandiandianshiyingyin").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"none",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"block",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").removeClass("jiadianactive");
            $("#jiandiandianshiyingyin").addClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
    });

    $("#jiandiandianshiyingyinPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"none",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"block",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").removeClass("jiadianactive");
            $("#jiandiandianshiyingyin").addClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });

            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
    });

    /*家电 电脑部分悬浮事件*/
    $("#jiadiandiannao").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"none",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"block",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").removeClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").addClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
    });

    $("#jiadiandiannaoPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"none",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"block",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").removeClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").addClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
    });

    /*家电 家居悬浮事件*/
    $("#jiandianjiaju").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"none",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"block",
            });
            $("#jiadianremen").removeClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
    });

    $("#jiandianjiajuPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#jiadianremenPart").css({
                "display":"none",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"block",
            });
            $("#jiadianremen").removeClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#jiadianremenPart").css({
                "display":"block",
            });
            $("#jiandiandianshiyingyinPart").css({
                "display":"none",
            });
            $("#jiadiandiannaoPart").css({
                "display":"none",
            });
            $("#jiandianjiajuPart").css({
                "display":"none",
            });
            $("#jiadianremen").addClass("jiadianactive");
            $("#jiandiandianshiyingyin").removeClass("jiadianactive");
            $("#jiadiandiannao").removeClass("jiadianactive");
            $("#jiandianjiaju").removeClass("jiadianactive");
        }
    });

    /*智能 热门悬浮事件*/
    $("#zhinengremen").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            // $("#zhinengremenPart").css({
            //     "display":"none",
            // });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    $("#zhinengremenPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            // $("#zhinengremenPart").css({
            //     "display":"none",
            // });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    /*智能 出行悬浮事件*/
    $("#zhinengchuxing").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengchuxingPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").addClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengchuxingPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    $("#zhinengchuxingPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengchuxingPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").addClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengchuxingPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    /*智能 健康悬浮事件*/
    $("#zhinengjiankang").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengjiankangPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").addClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengjiankangPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    $("#zhinengjiankangPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengjiankangPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").addClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengjiankangPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    /*智能 酷玩悬浮事件*/
    $("#zhinengkuwan").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengkuwanPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").addClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengkuwanPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    $("#zhinengkuwanPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengkuwanPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").addClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengkuwanPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    /*智能 路由器悬浮事件*/
    $("#zhinengluyouqi").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengluyouqiPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengluyouqiPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    $("#zhinengluyouqiPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhinengluyouqiPart").css({
                "display":"block",
            });
            $("#zhinengremen").removeClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhinengluyouqiPart").css({
                "display":"none",
            });
            $("#zhinengremenPart").css({
                "display":"block",
            });
            $("#zhinengremen").addClass("jiadianactive");
            $("#zhinengchuxing").removeClass("jiadianactive");
            $("#zhinengjiankang").removeClass("jiadianactive");
            $("#zhinengkuwan").removeClass("jiadianactive");
            $("#zhinengluyouqi").removeClass("jiadianactive");
        }
    });

    /*搭配 热门悬浮事件*/
    $("#dapeiremen").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    $("#dapeiremenPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    /*搭配 耳机悬浮事件*/
    $("#dapeierji").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeierjiPart").css({
                "display":"block",
            });
            $("#dapeiremen").removeClass("jiadianactive");
            $("#dapeierji").addClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            $("#dapeierjiPart").css({
                "display":"none",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    $("#dapeierjiPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeierjiPart").css({
                "display":"block",
            });
            $("#dapeiremen").removeClass("jiadianactive");
            $("#dapeierji").addClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#dapeierjiPart").css({
                "display":"none",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    /*搭配 电源悬浮事件*/
    $("#dapeidianyuan").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeidianyuanPart").css({
                "display":"block",
            });
            $("#dapeiremen").removeClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").addClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            $("#dapeidianyuanPart").css({
                "display":"none",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    $("#dapeidianyuanPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeidianyuanPart").css({
                "display":"block",
            });
            $("#dapeiremen").removeClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").addClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#dapeidianyuanPart").css({
                "display":"none",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    /*搭配 电池悬浮事件*/
    $("#dapeidianchi").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeidianchiPart").css({
                "display":"block",
            });
            $("#dapeiremen").removeClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").addClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            $("#dapeidianchiPart").css({
                "display":"none",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    $("#dapeidianchiPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#dapeidianchiPart").css({
                "display":"block",
            });
            $("#dapeiremen").removeClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#dapeidianchiPart").css({
                "display":"none",
            });
            $("#dapeiremenPart").css({
                "display":"block",
            });
            $("#dapeiremen").addClass("jiadianactive");
            $("#dapeierji").removeClass("jiadianactive");
            $("#dapeidianyuan").removeClass("jiadianactive");
            $("#dapeidianchi").removeClass("jiadianactive");
        }
    });

    /*配件 热门悬浮事件*/
    $("#peijianremen").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            // $("#peijianremenPart").css({
            //     "display":"none",
            // });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    $("#peijianremenPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            // $("#dapeidianchiPart").css({
            //     "display":"none",
            // });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    /*配件 保护套悬浮事件*/
    $("#peijianbaohutao").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijianbaohutaoPart").css({
                "display":"block",
            });
            $("#peijianremen").removeClass("jiadianactive");
            $("#peijianbaohutao").addClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            $("#peijianbaohutaoPart").css({
                "display":"none",
            });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    $("#peijianbaohutaoPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijianbaohutaoPart").css({
                "display":"block",
            });
            $("#peijianremen").removeClass("jiadianactive");
            $("#peijianbaohutao").addClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#peijianbaohutaoPart").css({
                "display":"none",
            });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    /*配件 贴膜套悬浮事件*/
    $("#peijiantiemo").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijiantiemoPart").css({
                "display":"block",
            });
            $("#peijianremen").removeClass("jiadianactive");
            $("#peijianbaohutao").addClass("jiadianactive");
            $("#peijiantiemo").addClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            $("#peijiantiemoPart").css({
                "display":"none",
            });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    $("#peijiantiemoPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijiantiemoPart").css({
                "display":"block",
            });
            $("#peijianremen").removeClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").addClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#peijiantiemoPart").css({
                "display":"none",
            });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    /*配件 其他悬浮事件*/
    $("#peijianqita").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijianqitaPart").css({
                "display":"block",
            });
            $("#peijianremen").removeClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").addClass("jiadianactive");

        }
        else if(event.type=="mouseout")
        {
            $("#peijianqitaPart").css({
                "display":"none",
            });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    $("#peijianqitaPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#peijianqitaPart").css({
                "display":"block",
            });
            $("#peijianremen").removeClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#peijianqitaPart").css({
                "display":"none",
            });
            $("#peijianremenPart").css({
                "display":"block",
            });
            $("#peijianremen").addClass("jiadianactive");
            $("#peijianbaohutao").removeClass("jiadianactive");
            $("#peijiantiemo").removeClass("jiadianactive");
            $("#peijianqita").removeClass("jiadianactive");
        }
    });

    /*周边 热门器悬浮事件*/
    $("#zhoubianremen").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            // $("#zhoubianremenPart").css({
            //     "display":"none",
            // });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    $("#zhoubianremenPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            // $("#zhoubianremenPart").css({
            //     "display":"none",
            // });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    /*周边 出行器悬浮事件*/
    $("#zhoubianchuxing").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianchuxingPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").addClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianchuxingPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    $("#zhoubianchuxingPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianchuxingPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").addClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianchuxingPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    /*周边 居家悬浮事件*/
    $("#zhoubianjujia").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianjujiaPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").addClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianjujiaPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    $("#zhoubianjujiaPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianjujiaPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").addClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianjujiaPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    /*周边 生活周边悬浮事件*/
    $("#zhoubianshenghuo").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianshenghuoPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").addClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianshenghuoPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    $("#zhoubianshenghuoPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianshenghuoPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").addClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianshenghuoPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    /*周边 箱包悬浮事件*/
    $("#zhoubianxiangbao").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianxiangbaoPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianxiangbaoPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });

    $("#zhoubianxiangbaoPart").on("mouseover mouseout",function (event) {
        if(event.type=="mouseover")
        {
            $("#zhoubianxiangbaoPart").css({
                "display":"block",
            });
            $("#zhoubianremen").removeClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").addClass("jiadianactive");
        }
        else if(event.type=="mouseout")
        {
            $("#zhoubianxiangbaoPart").css({
                "display":"none",
            });
            $("#zhoubianremenPart").css({
                "display":"block",
            });
            $("#zhoubianremen").addClass("jiadianactive");
            $("#zhoubianchuxing").removeClass("jiadianactive");
            $("#zhoubianjujia").removeClass("jiadianactive");
            $("#zhoubianshenghuo").removeClass("jiadianactive");
            $("#zhoubianxiangbao").removeClass("jiadianactive");
        }
    });


});