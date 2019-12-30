//格式化时间 y-m-d
function format(date) {
    var y = date.substring(0, 4);
    var m = date.substring(4, 6);
    var d = date.substring(6);
    return y + '-' + m + '-' + d;
}

function one2two(num) {
    num = num > 10 ? num : "0" + num;
    return num;
}

//获取上一年的今天
function getMinDate() {
    var curDate = new Date(),
        startMinY = curDate.getFullYear() - 1,
        startMinM = one2two(curDate.getMonth() + 1),
        startMinD = one2two(curDate.getDate()),
        startMinTime = startMinY + '-' + startMinM + '-' + startMinD;
    return startMinTime;
}

function today() {
    var today = new Date(),
        tYear = today.getFullYear(),
        tMonth = today.getMonth() + 1,
        tDate = today.getDate(),
        Jtoday = {
            tYear: tYear,
            tMonth: tMonth,
            tDate: tDate
        };
    return Jtoday;
}

/**
 * 不可跨月
 * lhgcalendar时间插件限制只能选择1个月
 * @d  获取到的开始时间
 *将最后获得的结束时间与开始时间存放在input中
 */
function addMoth(d) {
    var ds = d.split('-');
    var ds1 = parseInt(ds[1]);
    var ds2 = parseInt(ds[2]);
    var cond1 = parseInt(ds[0]) % 4 == 0;  //条件1：年份必须要能被4整除
    var cond2 = parseInt(ds[0]) % 100 != 0;  //条件2：年份不能是整百数
    var cond3 = parseInt(ds[0]) % 400 == 0;
    if (ds1 == 2) {
        if (cond1 && cond2 || cond3) { //如果是闰年，选择后面的时间可以到月末
            ds2 = 29
        } else {
            ds2 = 28
        }
    } else if (ds1 == 4 || ds1 == 6 || ds1 == 9 || ds1 == 11) {

        ds2 = 30
    } else {
        ds2 = 31
    }
    if (ds1 < 10) {
        ds1 = '0' + ds1;//月份小于10加0
    }
    if (ds2 < 10) {
        ds2 = '0' + ds2;
    }
    if (ds[0] == today().tYear && parseInt(ds1) == today().tMonth && parseInt(ds2) > today().tDate) {

        ds2 = today().tDate < 10 ? '0' + today().tDate : today().tDate;
    }
    return ds[0] + '-' + ds1 + '-' + ds2;

}

function reduceMoth(d) {
    var ds = d.split('-');
    return ds[0] + '-' + ds[1] + '-' + '0' + 1;
}

/**
 * 可跨月
 * lhgcalendar时间插件限制只能选择1个月
 * @d  获取到的开始时间
 * @m  要限制的时间的长度（月）
 *将最后获得的结束时间与开始时间存放在input中
 */
function addMoth1(d, m) {
    var ds = d.split('-');
    var ds1 = parseInt(ds[1]) + m;
    var ds2 = parseInt(ds[2]);
    d = new Date(ds[0], ds1, ds[2]);
    var cond1 = parseInt(ds[0]) % 4 == 0;  //条件1：年份必须要能被4整除
    var cond2 = parseInt(ds[0]) % 100 != 0;  //条件2：年份不能是整百数
    var cond3 = parseInt(ds[0]) % 400 == 0;
    if (cond1 && cond2 || cond3) { //如果是闰年，选择后面的时间可以到月末
        if (ds2 == 29) {
            ds2 = 31
        }
    } else {
        if (ds2 == 28) {
            ds2 = 31
        }
    }
    if (ds1 < 10) {
        ds1 = '0' + ds1;//月份小于10加0
    }
    if (ds1 > 12) {//跨年年份+1
        ds1 = ds1 - 12;
        ds[0] = parseInt(ds[0]) + 1;
        var cond1 = parseInt(ds[0]) % 4 == 0;  //条件1：年份必须要能被4整除
        var cond2 = parseInt(ds[0]) % 100 != 0;  //条件2：年份不能是整百数
        var cond3 = parseInt(ds[0]) % 400 == 0;
        if (cond1 && cond2 || cond3) {
            if (ds1 == 2) {//如果到2月，闰年最大29，平年28
                ds2 = 29
            }
        } else {
            if (ds1 == 2) {
                ds2 = 28
            }
        }
        if (ds1 < 10) {
            ds1 = '0' + ds1;
        }
    }
    if (ds2 < 10) {
        ds2 = '0' + ds2;
    }

    if (ds[0] > today().tYear || ds[0] == today().tYear && parseInt(ds1) > today().tMonth) {
        ds[0] = today().tYear;
        ds1 = today().tMonth < 10 ? '0' + today().tMonth : today().tMonth;
        ds2 = today().tDate < 10 ? '0' + today().tDate : today().tDate;

    } else if (ds[0] == today().tYear && parseInt(ds1) == today().tMonth && parseInt(ds2) > today().tDate) {
        ds2 = today().tDate < 10 ? '0' + today().tDate : today().tDate;
    }

    return ds[0] + '-' + ds1 + '-' + ds2;
}

//如果开始选择结束日期，给结束日期减去1个月
function reduceMoth1(d, m) {
    var ds = d.split('-');
    if (parseInt(ds[1]) == 2) {//如果选择的是2月，开始时间可以选到前一年1月30
        ds[2] = 30
    }
    var ds1 = parseInt(ds[1]) - m;
    var ds2 = parseInt(ds[2]);

    if (ds1 >= 1 && ds1 < 10) {
        ds1 = '0' + ds1;
    }

    if (ds1 < 1) {//跨年，开始时间年份-1，月份+12
        ds[0] = parseInt(ds[0]) - 1;
        ds1 = ds1 + 12;
    }

    if (ds2 < 10) {
        ds2 = '0' + ds2;
    }
    var cond1 = parseInt(ds[0]) % 4 == 0;  //条件1：年份必须要能被4整除
    var cond2 = parseInt(ds[0]) % 100 != 0;  //条件2：年份不能是整百数
    var cond3 = parseInt(ds[0]) % 400 == 0;
    if (cond1 && cond2 || cond3) {//如果开始时间到闰年2月可选择29，平年28
        if (parseInt(ds1) == 2) {
            ds2 = 29
        }
    } else {
        if (parseInt(ds1) == 2) {
            ds2 = 28
        }
    }
    return ds[0] + '-' + ds1 + '-' + ds2;
}