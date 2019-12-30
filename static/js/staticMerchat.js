function trId () {
  //添加序号
  var listId = 0;
  $("#lplist-table").find("tbody").first().children("tr").each(function () {
    listId++;
    $(this).children("td").eq(0).text(listId);
  });
}


//二级菜单中的新增和编辑页面中的，所属类型切换显示不同的内容
function belongTypeFun () {
  var menuType = $("#menuType").val();
  $(".belongType").hide();
  if (menuType === "自定义") {
    $(".belongType1").show();
  } else if (menuType === "列表") {
    $(".belongType2").show();
  } else if (menuType === "富文本框") {
    $(".belongType3").show();
  }
}