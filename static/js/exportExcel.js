function getXlsFromTbl(inTblId, fileName) {
    try {
        var allStr = "";
        var curStr = "";
        //alert("getXlsFromTbl"); 
        if (inTblId != null && inTblId != "" && inTblId != "null") {
            curStr = getTblData(inTblId);
        }
        if (curStr != null) {
            allStr += curStr;
        } else {
            alert("\u4f60\u8981\u5bfc\u51fa\u7684\u8868\u4e0d\u5b58\u5728\uff01");
            return;
        }
        var fileName = getExcelFileName(fileName);
        doFileExport(fileName, allStr);
    } catch (e) {
        alert("\u5bfc\u51fa\u53d1\u751f\u5f02\u5e38:" + e.name + "->" + e.description + "!");
    }
}

function getTblData(inTbl) {
    var rows = 0;
    var curTbl = document.getElementById(inTbl);
    var outStr = "";
    if (curTbl != null) {
        for (var j = 0; j < curTbl.rows.length; j++) {
            //alert("j is " + j); 
            for (var i = 0; i < curTbl.rows[j].cells.length; i++) {
                //alert("i is " + i);
                if (i == 0 && rows > 0) {
                    outStr += " C";
                    rows -= 1;
                }
                if (isNaN(curTbl.rows[j].cells[i].innerText) && curTbl.rows[j].cells[i].innerText != "") {
                    outStr += curTbl.rows[j].cells[i].innerText + "\t";
                } else {
                    outStr += "'" + curTbl.rows[j].cells[i].innerText + "\t";
                }
                if (curTbl.rows[j].cells[i].colSpan > 1) {
                    for (var k = 0; k < curTbl.rows[j].cells[i].colSpan - 1; k++) {
                        outStr += " \t";
                    }
                }
                if (i == 0) {
                    if (rows == 0 && curTbl.rows[j].cells[i].rowSpan > 1) {
                        rows = curTbl.rows[j].cells[i].rowSpan - 1;
                    }
                }
            }
            outStr += "\r\n";
        }
    } else {
        outStr = null;
        alert(inTbl + "\u4e0d\u5b58\u5728!");
    }
    return outStr;
}

function getExcelFileName(fileName) {
    var d = new Date();
    var curYear = d.getYear();
    var curMonth = "" + (d.getMonth() + 1);
    var curDate = "" + d.getDate();
    var curHour = "" + d.getHours();
    var curMinute = "" + d.getMinutes();
    var curSecond = "" + d.getSeconds();
    if (curMonth.length == 1) {
        curMonth = "0" + curMonth;
    }
    if (curDate.length == 1) {
        curDate = "0" + curDate;
    }
    if (curHour.length == 1) {
        curHour = "0" + curHour;
    }
    if (curMinute.length == 1) {
        curMinute = "0" + curMinute;
    }
    if (curSecond.length == 1) {
        curSecond = "0" + curSecond;
    }
    fileName += "_" + curYear + curMonth + curDate + "_" + curHour + curMinute + curSecond + ".csv";
    return fileName;
}

function doFileExport(inName, inStr) {
    var xlsWin = null;
    if (!!document.all("glbHideFrm")) {
        xlsWin = glbHideFrm;
    } else {
        var width = 800;
        var height = 400;
        var openPara = "left=" + (window.screen.width / 2 - width / 2) + ",top=" + (window.screen.height / 2 - height / 2) + ",scrollbars=no,width=" + width + ",height=" + height;
        xlsWin = window.open("", "_blank", openPara);
    }
    xlsWin.document.write(inStr);
    //alert(inStr);
    xlsWin.document.close();
    xlsWin.document.execCommand("Saveas", true, inName);
    xlsWin.close();
}

