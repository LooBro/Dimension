$("#button_intro").click(function(){
    $("#title_content").text("INTRO");
    $("#underbar").css("width", "141px");
    $("#image_content").prop("src", "image/img1.jpg");
    $("#image_content").css("margin", "70px 0 70px 0");
    $("#content_content").html("<div class=\"contents\">Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work.</div><div class=\"contents\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.<div>")
    openContent();
});
$("#button_work").click(function(){
    $("#title_content").text("WORK");
    $("#underbar").css("width", "127px");
    $("#image_content").prop("src", "image/img2.jpg");
    $("#image_content").css("margin", "70px 0 70px 0");
    $("#content_content").html("<div class=\"contents\">Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</div><div class=\"contents\">Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.<div>");
    openContent();
});
$("#button_about").click(function(){
    $("#title_content").text("ABOUT");
    $("#underbar").css("width", "150px");
    $("#image_content").prop("src", "image/img3.jpg");
    $("#image_content").css("margin", "70px 0 70px 0");
    $("#content_content").html("<div class=\"contents\">Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.<div>");
    openContent();
});
$("#button_contact").click(function(){
    $("#title_content").text("CONTACT");
    $("#underbar").css("width", "220px");
    $("#image_content").prop("src", "");
    $("#image_content").css("margin", "70px 0 0 0");
    $("#content_content").html("<div id=\"fst\"><div><div class=\"title_contact\">NAME</div><input type=\"text\" id=\"input_name\" class=\"input_contact\"></div><div><div class=\"title_contact\">EMAIL</div><input type=\"text\" id=\"input_email\" class=\"input_contact\"></div></div><div><div class=\"title_contact\">MESSAGE</div><input type=\"text\" id=\"input_message\" class=\"input_contact\"></div><div id=\"trd\"><button id=\"button_send\" class=\"button_contact\">SEND MESSAGE</button><button id=\"button_reset\" class=\"button_contact\">RESET</button></div><div id=\"fth\"><div class=\"ico\"><i class=\"fab fa-twitter\"></i></div><div id=\"ico2\" class=\"ico\"><i class=\"fab fa-facebook-f\"></i></div><div id=\"ico3\" class=\"ico\"><i class=\"fab fa-instagram\"></i></div><div class=\"ico\"><i class=\"fab fa-github\"></i></div></div>");
    openContent();
})
$("#button_close").click(function(){
    openMain();
});

function openContent(){
    $("#wrap_main").animate({
        opacity: 0
    }, 300, function(){
        $("#wrap_content_with_padding").css("display", "flex");
        $("#wrap_main").css("display", "none");
        $("#wrap").css("padding", "100px 0");
        $("#wrap_content").animate({
            opacity: 1
        }, 300);
    });
};
function openMain(){
    $("#wrap_content").animate({
        opacity : 0
    }, 500, function(){
        $("#wrap_content_with_padding").css("display", "none");
        $("#wrap_main").css("display", "flex");
        $("#wrap").css("padding", "0");
        $("#wrap_main").animate({
            opacity: 1
        }, 300);
    });
}