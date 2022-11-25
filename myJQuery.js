$(function(){
    var $select = $("#");
    for (i=3;i<=20;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

$(function(){
    var $select = $("");
    for (i=1;i<=5;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});