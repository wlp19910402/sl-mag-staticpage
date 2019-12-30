function trId() {
  //添加序号
  var listId = 0;
  $("#lplist-table").find("tbody").first().children("tr").each(function () {
    listId++;
    $(this).children("td").eq(0).text(listId);
  });
}