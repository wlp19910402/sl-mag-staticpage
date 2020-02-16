// JavaScript Document
//loading

// check全选
function checkOwner () {
  if (document.getElementById("checkOwner").checked == true) {
    $(".lpcheck-td").prop("checked", true);
  } else {
    $(".lpcheck-td").prop("checked", false);
  }
}

function initialFun (date) {
  var y = date.substring(0, 4);
  var m = date.substring(4, 6);
  var d = date.substring(6, 8);
  return new Date(y + "/" + m + "/" + d);
}

function getOptionValue () {
  var $select = $(".lpsearch-box .lpsearch-selectBox select");
  var arrOptionIndex = [];
  $select.each(function () {
    var $pts = $(this).find('option');
    $pts.each(function (index) {
      if ($(this).prop('selected')) {
        arrOptionIndex.push(index)
      }
    })
  })
  return arrOptionIndex;
}

var optsIndex = getOptionValue();

function resetFun1 () {
  $('#pageOrgId').val('');
  $('input:checked').prop('checked', false);
  $("#queryOrgIdShow").text('--请选择--');
  $(".lpsearch-box .lpsearch-input[type='text']").val('');
  var $select = $(".lpsearch-box .lpsearch-selectBox select");
  for (var i = 0; i < $select.length; i++) {
    $select[ i ].options[ optsIndex[ i ] ].selected = true;
  }
  $(".form-control").val('');
  $('.form_datetime').val('');
}

function resetFun () {
  $('#pageOrgId').val('');
  $('input:checked').prop('checked', false);
  $("#queryOrgIdShow").text('--请选择--');
  $(".lpsearch-box .lpsearch-input[type='text']").val('');
  var $select = $(".lpsearch-box .lpsearch-selectBox select");
  for (var i = 0; i < $select.length; i++) {
    $select[ i ].options[ 0 ].selected = true;
  }
  $(".form-control").val('');
  $('.form_datetime').val('');
  $("tr[data-toggle='distpicker']").distpicker('reset');
}

/*
*@autor：wangliping
*Desccription:页面加载，菜单回显，根据每个页面的pageTitle的值进行判断是哪个菜单
*Created on 2017年12月12日
*Modified date 2017年12月12日
*/
function menuFun () {
  //菜单默认
  $('.lpsearch-td-wranIcon').popover('toggle');//！！！提示信息
  $('.lpsearch-td-wranIcon').popover('hide');//！！！提示信息

  $('.lpscrolly-content').on('scroll', function () {
    var bodyScroll = $('.lpscrolly-content').scrollTop();
    $(".popover[role='tooltip']").each(function () {
      var popoverId = $(this).attr("id");
      var popoverIcon = $(".lpsearch-td-wranIcon[aria-describedby='" + popoverId + "']");
      var menuYloc = popoverIcon.offset().top;
      var lpcontentBoxTop = $(".lpcontent-box").offset().top;
      var offsetTop = menuYloc - bodyScroll - lpcontentBoxTop + 80 + "px";
      $(this).css({ top: offsetTop });
    })
  })

  // $('.lpsearch-td-wranIcon').on('click', function () {
  //   var menuYloc = $(".popover").offset().top;
  //   $('.lpscrolly-content').on('scroll', function () {
  //     var offsetTop = menuYloc - $('.lpscrolly-content').scrollTop() + "px";
  //     $(".popover").animate({ top: offsetTop }, { duration: 0, queue: false });
  //   });
  // });
  var menuVal = $("#pageTitle").val();
  if (menuVal != "" && menuVal != null) {
    var $currentMenu = $(".lppanel-collapse a[lp-menu='" + menuVal + "']");
    $(".lppanel-collapse").removeClass("in");
    $(".lppanel-collapse a").removeClass("lppanel-collapse-active");
    $currentMenu.addClass("lppanel-collapse-active");
    $(".lppanel-heading").removeClass("lppanel-heading-active");
    if ($currentMenu.parent().is("div")) {
      $currentMenu.parent().addClass("in");
    } else {
      $currentMenu.parent().parent().addClass("in");
    }

    $currentMenu.parent(".lppanel-collapse").prev(".lppanel-heading").addClass("lppanel-heading-active");
    $currentMenu.parent(".lppanel-collapse").prev(".lppanel-heading").find(".lpmenu-ui-icon").removeClass("lpmenu-ui-icon-left").addClass("lpmenu-ui-icon-down");
  }

  /*
   *@autor：wangliping
   *Desccription:菜单点击折叠样式
   *Created on 2018年4月1日
   *Modified date 2018年4月3日
   */
  $('.collapse').on('hidden.bs.collapse', function () {
    $(this).prev(".lppanel-heading").find(".lpmenu-ui-icon").removeClass("lpmenu-ui-icon-down").addClass("lpmenu-ui-icon-left");
  });
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).prev(".lppanel-heading").find(".lpmenu-ui-icon").removeClass("lpmenu-ui-icon-left").addClass("lpmenu-ui-icon-down");
  });
  //点击空白处隐藏机构弹出框
  $(document).bind("click", function (e) {
    var target = $(e.target);
    if (target.attr("id") != "lptreeBox" && target.attr("id") != "lptreeselectDown" && target.attr("id") != "queryOrgIdShow" && !target.hasClass("switch")) {
      $('.lpztree-box').hide();
    }
  })
  /*
   *@autor：wangliping
   *Desccription:点击菜单出发的样式
   *Created on 2018年4月1日
   *Modified date 2018年4月3日
   */
  $(".lppanel-collapse a").click(function () {
    $("lppanel-collapse a").removeClass("lppanel-collapse-active");
    $(this).addClass("lppanel-collapse-active");
    $(".lppanel-collapse").removeClass("in");
    $(this).parent(".lppanel-collapse").addClass("in");
    $(".lppanel-collapse a").removeClass("lppanel-collapse-active");
    $(this).addClass("lppanel-collapse-active");
    $(".lppanel-heading").removeClass("lppanel-heading-active");
    $(this).parent(".lppanel-collapse").prev(".lppanel-heading").addClass("lppanel-heading-active");
    $(this).parent(".lppanel-collapse").prev(".lppanel-heading").find(".lpmenu-ui-icon").removeClass("lpmenu-ui-icon-left").addClass("lpmenu-ui-icon-down");
  });
  var form_datetime = $(".form_datetime");
  $('.lpsearch-input,.lpsearch-selectBox-full,.lpsearch-input-full,.lpsearch-select,.lpsearch-select-full,.lpcheckbox-box,.lpsearch-select-div-full,select,div,input,td').poshytip({
    content: 'a',
    className: 'tip-yellow',
    showOn: 'none',
    alignTo: 'target',
    alignX: 'right',
    alignY: 'center',
    offsetX: 5,
    timeOnScreen: 2000
  });
  form_datetime.poshytip({
    content: '请输入日期！',
    className: 'tip-yellow',
    showOn: 'none',
    alignTo: 'target',
    alignX: 'right',
    alignY: 'center',
    offsetX: 5,
    timeOnScreen: 2000
  });
}

/*
*@autor：wangliping
*Desccription:菜单收起的
*Created on 2017年12月12日
*Modified date 2017年12月12日
*/
var MenuNum = 0;

function menuBoxToggle () {
  if (MenuNum == 0) {
    MenuNum = 1
    $(".lpmenu-box").animate({ "width": "15px" });
    $(".lpmenu-boxbg").animate({ "width": "15px" });
    $(".lpmenu-content-box").hide();
    $(".lpmenu-contraction").animate({ "left": "0px" });
    $(".lpcontent-box").animate({ "width": $(window).width() - 75 + "px", "left": "45px" })
  } else {
    MenuNum = 0
    $(".lpmenu-box").animate({ "width": "260px" });
    $(".lpmenu-boxbg").animate({ "width": "260px" });
    $(".lpmenu-content-box").show();
    $(".lpmenu-contraction").animate({ "left": "245px" });
    $(".lpcontent-box").animate({ "width": $(window).width() - 300 + "px", "left": "280px" })
  }
}

function contentWith () {
  if (MenuNum == 0) {
    $(".lpcontent-box").css({ "width": $(window).width() - 300 + "px", "left": "280px" })
  } else {
    $(".lpcontent-box").css({ "width": $(window).width() - 75 + "px", "left": "45px" })
  }
}

/*
*@autor：wangliping
*Desccription:操作提示
*Created on 2018年3月22日
*Modified date 2018年3月22日
*/
function commonWarnFun (ems) {
  $('#commonWarn').modal('show');
  $("#commonWarnText").text("确定要" + ems + "吗？");
  $("#commonWarnYes").attr("onClick", "YesFun('" + ems + "')")
}

function YesFun (content) {
  $('#Loading').show();
  setTimeout(function () {
    $('#LoadingBlack').modal('hide');
    $('#Loading').hide();
    $(".lpoperate-tipbox").slideDown();
    $(".lpoperate-tip-text").text(content + "成功");
    setTimeout(function () {
      $(".lpoperate-tipbox").slideUp();
    }, 3000)
  }, 2000);
}

/*
*@autor：wangliping
*Desccription:保存成功倒计时
*Create
*Modified date 2018年3月22日
*/
$("#jumpSec").text("5");
var jumpSec = 5;

function jumpSecFun () {
  if (jumpSec > 0) {
    jumpSec = jumpSec - 1;
  }
  $("#jumpSec").text(jumpSec);
}
function queryListReturnResult () {
  if ($("#errorMessReturnResult").val() != null && $("#errorMessReturnResult").val() != "") {
    var arr = $("#errorMessReturnResult").val().split(',');
    saveOperate(arr[ 0 ], arr[ 1 ])
  }
}
function saveOperate (operate, text) {
  $('#LoadingBlack').modal('show');
  $('#Loading').show();
  var operateFunId = ""
  if (operate === 'true') {
    operateFunId = "lpsearchOperateSuccess";
  } else if (operate === 'false') {
    operateFunId = "lpsearchOperateFail";
  }
  setTimeout(function () {
    $('#LoadingBlack').modal('hide');
    $('#Loading').hide();
    $("#" + operateFunId).find(".lpoperate-tip-text").text(text);
    $("#" + operateFunId).slideDown();
    setTimeout(function () {
      $("#" + operateFunId).slideUp();
    }, 1000);
  }, 200);

}

function saveSuccess (url) {
  $('#LoadingBlack').modal('show');
  $('#Loading').show();
  setTimeout(function () {
    $('#LoadingBlack').modal('hide');
    $('#Loading').hide();
    $("#lpsearchOperateSuccessJump").show()
    $("#lpsearchOperateSuccessJump").find("a").attr("href", url);
    $("#lpsearchOperateSuccess").find(".lpoperate-tip-text").text("保存成功")
    $("#lpsearchOperateSuccess").slideDown();
    setInterval("jumpSecFun()", 1000);
    setTimeout(function () {
      jumpSec = 5;
      $("#lpsearchOperateSuccess").slideUp();
      $(location).attr("href", url)
    }, 4000);
  }, 2000)
}

function saveFail () {
  $('#LoadingBlack').modal('show');
  $('#Loading').show();
  setTimeout(function () {
    $("#lpsearchOperateFail").find(".lpoperate-tip-text").text("保存失败")
    $('#LoadingBlack').modal('hide');
    $('#Loading').hide();
    $("#lpsearchOperateFail").slideDown();
    setTimeout(function () {
      $("#lpsearchOperateFail").slideUp();
    }, 4000);
  }, 2000)
}

function cancelSuccess () {
  setTimeout(function () {
    $('#LoadingBlack').modal('hide');
    $('#Loading').hide();
    clearInterval(jumpSecFun());
    $("#lpsearchOperateSuccessJump").hide()
    $("#lpsearchOperateSuccess").find(".lpoperate-tip-text").text("删除成功")
    $("#lpsearchOperateSuccess").slideDown();
    setTimeout(function () {
      jumpSec = 5;
      $("#lpsearchOperateSuccess").slideUp();
    }, 4000);
  }, 2000)
  $('#LoadingBlack').modal('show');
  $('#Loading').show();
}

function cancelFail () {
  $('#LoadingBlack').modal('show');
  $('#Loading').show();
  setTimeout(function () {
    $("#lpsearchOperateFail").find(".lpoperate-tip-text").text("删除失败")
    $('#LoadingBlack').modal('hide');
    $('#Loading').hide();
    $("#lpsearchOperateFail").slideDown();
    setTimeout(function () {
      $("#lpsearchOperateFail").slideUp();
    }, 4000);
  }, 2000)
}

//tree
/*
*@autor：wangliping
*Desccription:机构数
*Created on 2018/4/9
*Modified date 2018/4/9
*/
function filter (treeId, parentNode, childNodes) {
  if (!childNodes) return null;
  for (var i = 0, l = childNodes.length; i < l; i++) {
    childNodes[ i ].name = childNodes[ i ].name.replace(/\.n/g, '.');
  }
  return childNodes;
}

function lpTree (setting) {
  var t = $("#tree");
  $.fn.zTree.init(t, setting);
  demoIframe = $("#testIframe");
  demoIframe.bind("load", loadReady);
}

var orgId = $("#pageOrgId").val();
//用来判断机构数是否是回显
var isEcho = true;
var setting = {
  view: {
    dblClickExpand: false,
    showLine: true,
    selectedMulti: false
  },
  data: {
    simpleData: {
      enable: true,
      idKey: 'id',
      pIdKey: 'pId'
    }
  },
  async: {
    enable: true,
    url: "../org/getbyporgid",
    autoParam: [ "id" ],
    otherParam: [ "selectedOrgId", orgId ],
    dataFilter: filter
  },
  callback: {
    beforeClick: function (treeId, treeNode) {
      $("#pageOrgId").val(treeNode.id);
      $("#queryOrgIdShow").text(treeNode.name);
      $('.lpztree-box').toggle();
      return true;
    },
    onAsyncSuccess: function (event, treeId, newNode, msg) {
      var loginStr = new RegExp('doctype html');
      var toLogin = loginStr.test(msg);
      if (toLogin) {
        window.location.href = "login";
      }
      if (isEcho) {
        var orgId = $("#pageOrgId").val();
        var treeObj = $.fn.zTree.getZTreeObj("tree");
        var selectedNode = treeObj.getNodesByParam("id", orgId, null);
        if (selectedNode.length > 0) {
          treeObj.expandNode(selectedNode[ 0 ], true, true);
          treeObj.selectNode(selectedNode[ 0 ]);
          var selectName = selectedNode[ 0 ].name;
          $("#queryOrgIdShow").text(selectName);
        }
        isEcho = false
      }
    },
    onAsyncError: function (event, treeId, trrNode, XMLHttpRequest, textStatus, errorThrown) {
      var loginStr = new RegExp('doctype html');
      var toLogin = loginStr.test(XMLHttpRequest.responseText);
      if (toLogin) {
        window.location.href = "../login";
      }
    }
  }
};

function loadReady () {
  var bodyH = demoIframe.contents().find("body").get(0).scrollHeight,
    htmlH = demoIframe.contents().find("html").get(0).scrollHeight,
    maxH = Math.max(bodyH, htmlH), minH = Math.min(bodyH, htmlH),
    h = demoIframe.height() >= maxH ? minH : maxH;
  if (h < 530) h = 530;
  demoIframe.height(h);
}

var demoIframe;

$(function () {
  contentWith();
  menuFun();
});
$(window).resize(function () {
  contentWith();
});


/*
*@autor：wangliping
*Desccription:上传图片
*Create
*Modified date 2019年11月06日
*/
function loadUpPricture (pricture, prictureSrc) {
  var $thisParent = pricture.parent().parent();
  if (prictureSrc == '') {
    pricture.parent(".pictureBtnBox").find(".pictureBtn").hide();
  } else {
    pricture.parent().parent().find(".updateLoadingBox").show();//显示loading
    setTimeout(function () {
      $thisParent.find(".updateLoadingBox").hide();
      $thisParent.find(".pictureViewBtn").text("修改图片");//修改按钮文字
      $thisParent.find(".pictureClose").show();//删除按钮显示
      $thisParent.find(".pictureImg").attr("src", prictureSrc);//图片赋值路径，显示图片
      $thisParent.find(".pictureBox").removeClass("prictureBoxUnll");//移除图片不存在的情况
    }, 500)
  }
}


/*
*@autor：wangliping
*Desccription:删除图片
*Create
*Modified date 2019年11月06日
*/
function canclePricture (cancleThis) {
  $(cancleThis).parent(".pictureBtnBox").find(".picturefile").val('');
  $(cancleThis).parent(".pictureBtnBox").parent(".pictureConent").find(".pictureImg").attr("src", '');
  $(cancleThis).parent(".pictureBtnBox").find(".pictureBtn").hide();
  $(cancleThis).parent(".pictureBtnBox").find(".pictureViewBtn").text("上传图片");
  $(cancleThis).parent().parent().parent().parent().parent().find(".hiddenInput").find("input[name='merImg']").val("");
  $(cancleThis).parent(".pictureBtnBox").parent(".pictureConent").find(".pictureBox").addClass("prictureBoxUnll");
}

/*
*@autor：wangliping
*Desccription:遍历每一个图片是否为空
*Create
*Modified date 2019年11月06日
*/
function earchImg () {
  $(".pictureConentBox").each(function () {
    var ImgSrc = $(this).find(".pictureImg").attr("src");
    if (ImgSrc === "" || ImgSrc === null) {
      $(this).find(".picturefile").val('');
      $(this).find(".pictureImg").attr("src", '');
      $(this).find(".pictureBtn").hide();
      $(this).find(".pictureViewBtn").text("上传图片");
      $(this).find(".pictureBox").addClass("prictureBoxUnll");
    } else {
      $(this).find(".pictureViewBtn").text("修改图片");//修改按钮文字
      $(this).find(".pictureClose").show();//删除按钮显示
      $(this).find(".pictureImg").attr("src", ImgSrc);//图片赋值路径，显示图片
      $(this).find(".pictureBox").removeClass("prictureBoxUnll");//移除图片不存在的情况
    }
  })
}
function getObjectURL (file) {
  var url = null;
  if (window.createObjectURL != undefined) {
    url = window.createObjectURL(file)
  } else if (window.URL != undefined) {
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
    url = window.webkitURL.createObjectURL(file)
  }
  return url
};



//yyyy-mm-dd类型的字符串转添加相应的天数，返回新的日期
function getNewDay (dateTemp, days) {
  var dateTemp = dateTemp.toString().split("-");
  var nDate = new Date(dateTemp[ 1 ] + '-' + dateTemp[ 2 ] + '-' + dateTemp[ 0 ]);
  var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
  var rDate = new Date(millSeconds);
  var year = rDate.getFullYear();
  var month = rDate.getMonth() + 1;
  if (month < 10) month = "0" + month;
  var date = rDate.getDate();
  if (date < 10) date = "0" + date;
  return (year + '-' + month + '-' + date);
}
