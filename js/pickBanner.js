function pegarBanner(){
    var divImgCircles = $("#img-circles img");
    divImgCircles.each(function() {
        $(this).click(function(){
            let banClicked = $(this).attr('src');
            let posTamImg = banClicked.indexOf("/150");
            let newBan = banClicked.substring(0, posTamImg) + "/1500/450";
            
            let oldBan = $("#banner").attr('src');
            let posTamOldBan = oldBan.indexOf("/1500");
            oldBan = oldBan.substring(0, posTamOldBan) + "/150/150";
            $(this).attr("src", oldBan);
            $("#banner").attr("src", newBan);
        });
    });
}

pegarBanner();