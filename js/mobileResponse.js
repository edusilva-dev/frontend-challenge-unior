$(document).ready(function() {
    verificaDimensaoDocumento();
});

function verificaDimensaoDocumento(){
    if($(window).width() <= 700){
        let listIcon = $("#list-icon");
        let menuList = $("#menu-list");
        let menuItem = $(".list-group-item");
        let flag = false;
        
        listIcon.show();
        listIcon.click(function(){
            if(flag == false){
                menuList.show();
                flag = true;
                menuItem.each(function() {
                    $(this).click(function() {
                        console.log($(this).text());
                        menuList.hide();
                        flag = false;
                    });
                });
            }else{
                menuList.hide();
                flag = false;
            }
        });
    }
}