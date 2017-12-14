
//自适应
"user strict"
//全局变量
var myScroll,
    banner_swiper,
    ing = {//正在执行的状态
        resize: false,//页面重置尺寸
        update: false,//更新数据
        side: false//弹出层
    },
    url_base = "../baby/data/",
    url_update = "update.json?" + Math.random()

//获取数据并加载
function update() {
    ing.update = true;
    $("#refresh").css({ "transform": "translate(0, 90px)" }).addClass("cir");
    var ajaxurl = url_base + url_update;
    $.ajax({
        url: ajaxurl,
        type: "get",
        dataType: "json",
        success: function (e) {
            if (e.result == "1") {
                var data = e.data;
                if (data.length > 0) {
                    $("#wrapper").css("background-image", "url(stylesheel/img/line.jpg)");
                    $("#scroller").html("");
                    var sumHeight = {
                        "true": [0],
                        "false": [0]
                    };
                    var isl = true;
                    for (var i = 0; i < data.length; i++) {
                        var $li = $("<li data-id='" + data[i].id + "'></li>");
                        var $tip = $("<div class='tip'></div>");

                        var tip_con = "";
                        tip_con += "<div class='tip_hd'>";
                        switch (data[i].name) {
                            case "喂奶":
                                tip_con += "<img src='stylesheel/img/wn_smart.png' />"
                                break;
                            case "臭臭":
                                tip_con += "<img src='stylesheel/img/cc_smart.png' />"
                                break;
                            case "药":
                                tip_con += "<img src='stylesheel/img/y_smart.png' />"
                                break;
                            default:
                                tip_con += "<img src='stylesheel/img/qy_smart.png' />"
                                break;
                        }
                        tip_con += "<span>" + data[i].date + "</br>" + data[i].time + "</span>"
                        tip_con += "</div>";
                        tip_con += "<div class='tip_bd'>" + data[i].detail + "</div>"

                        $tip.append(tip_con)
                        var $clr = $("<div class='clr'></div>")
                        $li.append($clr);
                        $li.append($tip);
                        $("#scroller").append($li);

                        if (eval(sumHeight[isl].join('+')) <= eval(sumHeight[!isl].join('+')) + 40) {
                            isl = isl
                        } else {
                            isl = !isl
                        }
                        $li.attr("data-l", isl);
                        var hei = eval(sumHeight[isl].join('+'));
                        if (!isl) {
                            hei = hei + 40;
                        }

                        $clr.css("top", hei + "px");
                        $tip.css("top", hei + "px");

                        sumHeight[isl].push(parseInt($tip.outerHeight()) + 20);

                        $li.css({ "-webkit-animation": "fadein .2s linear " + .2 * i + "s forwards" })

                        if (i == data.length - 1) {
                            $li.css("height", Math.max(eval(sumHeight[isl].join('+')), eval(sumHeight[!isl].join('+'))))
                        }

                    }

                } else {
                    $("#wrapper").css("background-image", "");
                    $("#scroller").html("<li style='opacity: 1;text-align:center;line-height:3rem;'>暂无数据，向下滑屏尝试刷新。</li>");
                }
                setTimeout(function () {
                    myScroll.refresh();
                    $("#refresh").removeClass("cir");
                    $("#refresh").transition({ y: "0px" }, 800)
                }, 200 * Math.max(data.length, 4))
            } else {
                alert("数据更新失败，请稍后再试。")
                setTimeout(function () {
                    myScroll.refresh();
                    $("#refresh").removeClass("cir");
                    $("#refresh").transition({ y: "0px" }, 800)
                }, 800)

            }

        }
    })
}

//重置页面尺寸
function rehtmlsize() {
    ing.resize = true;
    var win_w = $(window).width();
    $("html").css("font-size", Math.min(win_w, 768) / 640 * 100 + "px");

    if (myScroll) {
        myScroll.refresh();
    } else {
        myScroll = new IScroll("#wrapper", { probeType: 3 });
        update();
        myScroll.on('scroll', function () {
            var _h = this.y >> 0;
            if (!ing.update) {
                if (_h < 90) {
                    $("#refresh").css({ "transform": "translate(0, " + _h + "px)" })
                }
                $("#refresh img").css({ "transform": "rotate(" + -_h * 50 + "deg)" })
            }
        });
        myScroll.on('refresh', function () {
            ing.update = false;
        })
        $("#wrapper").on("touchend", function () {
            var me = this;
            if (myScroll.y > 90 && !ing.update) {
                update()
            }
        })
    };
    if (banner_swiper) {
        banner_swiper.update();
    } else {
        banner_swiper = new Swiper('#banner_swiper', {
            pagination: '#banner_swiper .swiper-pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 2000
        });
    };
    ing.resize = false;
}


function Inputnum(dom) {
    this.$dom = $(dom);
    this.$input = $(dom).find("input");
    this.val = this.$input.val();
    this.init();
}
Inputnum.prototype.init = function () {
    var me = this;

    me.$dom.on("click", "[data-type='0']", function () {
        if (me.val <= 0) {
            return
        }
        me.val--;
        me.$input.val(me.val);
    })
    me.$dom.on("click", "[data-type='1']", function () {
        me.val++;
        me.$input.val(me.val);
    })

}

$(function () {
    rehtmlsize();
    $(window).resize(function () {//窗口改变
        rehtmlsize();//重置页面尺寸
    });

    var nav_name;
    $(".nav").on("click", "li", function () {
        var me = this;
        $(".nav li").removeClass("on");
        $(me).addClass("on");
        nav_name = $(me).attr("data-name");
        if (!ing.side) {
            ing.side = true;
            $("#side-page").show().stop(true, true).transition({ "opacity": 1 });
            $("#side-page .side-dialog[data-name=" + nav_name + "]").stop(true, true).transition({ x: "0rem" }, "600", "snap")
        } else {
            $("#side-page .side-dialog").css({ "transform": "translate(5rem, 0)", "transition": "none" })
            $("#side-page .side-dialog[data-name=" + nav_name + "]").stop(true, true).transition({ x: "0rem" }, "600", "snap");
        }
    })
    $("#side-page").on("click", ".side-bg", function () {
        if (ing.side) {
            $("#side-page .side-dialog[data-name=" + nav_name + "]").stop(true, true).transition({ x: "5rem" }, "ease")
            $("#side-page").stop(true, true).transition({ "opacity": 0 }, function () {
                $(this).hide();
                $(".nav li").removeClass("on");
                ing.side = false;
            });
        }
    })

    $("#side-page").on("click", ".side-ft_btn", function () {
        if (ing.side) {
            console.log($(this).attr("data-name"));
            $("#side-page .side-dialog[data-name=" + nav_name + "]").stop(true, true).transition({ x: "5rem" }, "ease")
            $("#side-page").stop(true, true).transition({ "opacity": 0 }, function () {
                $(this).hide();
                ing.side = false;
                $(".nav li").removeClass("on");
                //$.ajax post提交成功后回调update()
                update();
            });
        }
    })



    for (var i = 0; i < $(".side-inputBox_number").length; i++) {
        new Inputnum($(".side-inputBox_number")[i]);
    }

})