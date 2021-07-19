// 在导航栏后新增提示框
alertDiv = "<div class='alert alert-danger'>\
        <span class='glyphicon glyphicon-exclamation-sign'></span>\
        您已进入不为人知的神秘区域。请您输入密钥来查看隐藏的内容。\
        <form onsubmit='return false;'>\
            <div class='input-group'>\
                <input id='input-Pas' class='form-control' placeholder='输入密钥…'>\
                <span class='input-group-btn'>\
                    <button type='button' id='button-Pas' class='btn btn-default'>解密</button>\
                </span>\
            </div>\
        </form>\
    </div>";
$("nav.navbar").after(alertDiv);

// 读取语录文件2
$.ajax({
    url: 'https://paandaa.gitee.io/yghfans/js/Quotes2.json',
    async: false,
    cache: false,
    success: function (data) {
        quote2 = data;
    }
});

// 填充输入框
function getCookie() {
    var cookie = document.cookie.split("; ");
    for (i in cookie) {
        j = cookie[i].split("=");
        if (j[0] == "deKey") { return j[1]; }
    }
    return "";
}
$("#input-Pas").val(getCookie());

function decrypt(message, key) {
    deC = CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8);
    if (deC == '') { deC = "<i>[等待解密中]</i>"; }
    return deC;
}

function decrypting() {
    key = $("#input-Pas").val();
    var dat = new Date();
    dat.setTime(dat.getTime() + 2592000000);
    document.cookie = "deKey=" + key + "; expires=" + dat.toGMTString();
    loadContent(key);
    MathJax.typeset();
}

$("#button-Pas").click(function () { decrypting(); })
$("#input-Pas").keyup(function () { if (event.which == 13) { decrypting(); } })