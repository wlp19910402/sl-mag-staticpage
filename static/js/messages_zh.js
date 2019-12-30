(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "../jquery.validate"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {

    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
     */
    $.extend($.validator.messages, {
        required: "这是必填字段",
        remote: "请修正此字段",
        email: "请输入有效的电子邮件地址",
        url: "请输入有效的网址",
        date: "请输入有效的日期",
        isMobile: "你必须填写正确的手机号",
        isMobileSimp: "你必须填写正确的手机号",
        isIdCardNo: "请输入有效身份证号",
        dateISO: "请输入有效的日期 (YYYY-MM-DD)",
        number: "请输入有效的数字",
        digits: "只能输入数字",
        creditcard: "请输入有效的信用卡号码",
        equalTo: "你的输入不相同",
        extension: "请输入有效的后缀",
        maxlength: $.validator.format("最多可以输入 {0} 个字符"),
        minlength: $.validator.format("最少要输入 {0} 个字符"),
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
        range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
        max: $.validator.format("请输入不大于 {0} 的数值"),
        min: $.validator.format("请输入不小于 {0} 的数值"),
        zipcode: "请正确填写邮政编码",
        isChar: "请正确格式的姓名(暂支持汉字)",
        isDigits: "只能输入0-9数字",
        isFourNum: "只能是四位数字",
        same: "新密码不能与原密码重复",
        english: "只能输入字母或数字或空格",
        isZipCode: "请正确填写您的邮政编码",
        ip: "Ip地址格式错误",
        chinese: "只能输入中文",
        isPhone: "请正确填写您的电话号码",
        digitsOrEnglish: "只能输入字母或者数字并且必须为5位",
        digitsOrChinese: "只能输入中文数字或空格",
        positiveInteger: "只能输入正整数",
        ChineseLength: "超出长度限制",
        forbidChinese: "禁止输入中文",
        fullWidth: "超出长度限制",
        halfWidth: "只能输入半角字符"
    });

}));