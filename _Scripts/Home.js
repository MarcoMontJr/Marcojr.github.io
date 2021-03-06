$(document).ready(function() {
    $(window).scroll(function() {
        var window_top = $(window).scrollTop() + 12;
        var div_top = $('#nav-anchor').offset().top;
        if (window_top > div_top) {
            $('nav').addClass('stick');
        } else {
            $('nav').removeClass('stick');
        }
    });

    $("nav a").click(function(evn) {
        evn.preventDefault();
        $('html, body').scrollTo(this.hash, this.hash);
    });

    var aChildren = $("nav li").children();
    var aArray = [];
    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }

    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();

        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top;
            var divHeight = $(theID).height();
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });
});

document.getElementById("Tecnologias").addEventListener("click", CreateSublistTech);

function CreateSublistTech() {
    var ol = document.createElement("ol");
    var newList = document.getElementById("Tecnologias").appendChild(ol);

    var subList = ["Front-End", "Back-End", "Database", "Tools"];
    var anchor = ["#Front", "#Back", "#DataBase", "#Tools"];

    var anchorItem = 0;

    for (var cont in subList) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = anchor[anchorItem];
        newList.appendChild(li).appendChild(a).appendChild(document.createTextNode(subList[cont]));
        anchorItem += 1;
    }

    document.getElementById("Tecnologias").removeEventListener("click", CreateSublistTech);
    document.getElementById("Home").addEventListener("click", DestroySublistTech);

    function DestroySublistTech() {
        for (var cont in subList) {
            newList.removeChild(newList.firstElementChild);
            document.getElementById("Tecnologias").addEventListener("click", CreateSublistTech);
        }
    };
}