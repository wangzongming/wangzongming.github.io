$.fn.LnyTab = function (options) {
    var defaults = {
        curIndex: 0
    }
    options = $.extend({}, defaults, options)
    var $me = this;
    $me.curIndex = options.curIndex;
    tab($me.curIndex)
    $me.on("click", ".tab-btn", function () {
        $me.curIndex = $me.find(".tab-btn").index($(this))
        tab($me.curIndex)
    })
    function tab(index) {
        $me.find(".tab-btn").removeClass("cur").eq(index).addClass("cur");
        $me.find(".tab-con").hide().eq(index).show()
    }


    return $me
}