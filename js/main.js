// 读取语录文件
$.ajax({
    url: 'https://paandaa.gitee.io/yghfans/js/Quotes.json',
    async: false,
    cache: false,
    success: function (data) {
        quote = data;
    }
});

// MathJax 插件设置
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['^', '^']]
    },
    svg: {
        fontCache: 'global'
    }
};

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

/* header = "<nav class='navbar navbar-default'>\
    <div class='container-fluid'>\
        <div class='navbar-header'>\
            <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#Nav'>\
                <span class='sr-only'>Toggle navigation</span>\
                <span class='icon-bar'></span>\
                <span class='icon-bar'></span>\
                <span class='icon-bar'></span>\
            </button>\
            <a class='navbar-brand' href='index.html'><img alt='Brand' src='favicon.ico' width='20' height='20'></a>\
            <a class='navbar-brand' href='index.html'>国洪应援站</a>\
        </div>\
            <div class='collapse navbar-collapse' id='Nav'>\
                <ul class='nav navbar-nav' id='NavUl'>\
                    <li><a href='quote.html'>语录</a></li>\
                    <li><a href='list.html'>目录</a></li>\
                    <li><a href='faq.html'>FAQ</a></li>\
                </ul>\
                <form class='navbar-form navbar-right' onsubmit='return false;'>\
                    <div class='form-group'>\
                        <input id='input-No' type='number' class='form-control' placeholder='输入语录编号…'>\
                    </div>\
                    <button type='button' id='button-No' class='btn btn-default'>前往</button>\
                </form>\
            </div>\
        </div>\
</nav>"; */
footer = "<div class='well well-sm'>\
    <center style='color: gray'>\
        Made by Water.<br />\
        Last Updated: 2020/12/29</center>\
</div>";

// $(".container").prepend(header);
$(".container").append(footer);

$("#button-No").click(function () {
    window.location.href = "quote.html?no=" + $("#input-No").val();
})

$("#input-No").keyup(function () {
    if (event.which == 13) {
        window.location.href = "quote.html?no=" + $("#input-No").val();
    }
})