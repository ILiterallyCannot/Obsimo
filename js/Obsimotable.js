! function(t) {
    var e = localStorage.counter;

    function i(i) {
        var o = t(this).attr("data-id");
        t(this).toggleClass("active"), t(this).is(".active") ? (e++, t('<button class="remove" value="' + this.value + '" data-id="kurssinimi' + e + '">' + this.textContent + "</button>").appendTo("#selectedcourses"), t(this).attr("data-id", "kurssinimi" + e), Cookies.set("kurssinimi" + e, this.textContent, {
            expires: 1
        })) : (Cookies.remove(o, this.textContent), t(this).removeAttr("data-id"), t(".remove[data-id=" + o + "]").remove())
    }

    function o(e, i) {
        var o = "blur(" + i + "px)";
        t(e).css({
            filter: o,
            webkitFilter: o,
            mozFilter: o,
            oFilter: o,
            msFilter: o,
            transition: "all 0.5s ease-out",
            "-webkit-transition": "all 0.5s ease-out",
            "-moz-transition": "all 0.5s ease-out",
            "-o-transition": "all 0.5s ease-out"
        })
    }
    t(function() {
        "use strict";
        var e = "kurssinimi",
            s = 0;
        t.each(document.cookie.split(/; */), function() {
            var i = this.split("=");
            if (i[0].substr(0, e.length).toUpperCase() == e.toUpperCase()) {
                var o = decodeURI(i[1]),
                    a = decodeURI(i[0]);
                t("button").attr("data-id");
                t("button:contains(" + o + ")").toggleClass("active"), s++, t('<button class="remove" value="' + this.value + '" data-id="' + a + '">' + o + "</button>").appendTo("#selectedcourses"), t("button:contains(" + o + ")").attr("data-id", a)
            }
        }), localStorage.setItem("counter", s), "false" != localStorage.guest ? (t(".addcoursebtn, .savebtn").prop("disabled", !0), t(".addcoursebtn, .savebtn").css("background-color", "grey")) : (t(".addcoursebtn, .savebtn").prop("disabled", !1), t(".addcoursebtn, .savebtn").css("background-color", "#80AECA")), t("#coursedescriptions").resizable(), t("#coursedescriptions").draggable(), t(".hidebasiccourse").hide(), t(".selectedcourses").on("click", ".remove", function() {
            var e = t(this).attr("data-id");
            Cookies.remove(e, this.textContent), t(".btn[data-id=" + t(this).attr("data-id") + "]").removeClass("active"), t(this).remove()
        }), t(".btn, .tvt").on("click", i), t(".btn, .tvt, .perus").hover(function() {
            t("#coursedescriptions").height(t("#thedescription").html(t(this).val()).height())
        }), t(".btn").mouseleave(function() {
            t("#coursedescriptions").height("")
        }), t("#tvtbtn").click(function() {
            o(".obsimotable", 20), o(".home", 20), o("#perustable", 20), o("#gradtable", 20), o(".h1", 5), t("#tvttable").transition({
                top: "20%"
            }, 1e3), t(".back").transition({
                top: "75%",
                left: "75%"
            }, 1e3)
        }), t(".useradded").click(function() {
            o(".obsimotable", 20), o(".home", 20), o("#perustable", 20), o("#gradtable", 20), o(".h1", 5), t("#useradded").transition({
                top: "25%"
            }, 1e3), t(".back").transition({
                top: "75%",
                left: "75%"
            }, 1e3)
        }), t(".userstudypaths").click(function() {
            o(".obsimotable", 20), o(".home", 20), o("#perustable", 20), o("#gradtable", 20), o(".h1", 5), t("#userstudypaths").transition({
                top: "25%"
            }, 1e3), t(".back").transition({
                top: "75%",
                left: "75%"
            }, 1e3)
        }), t(".back").click(function() {
            t("#tvttable, #useradded, #userstudypaths, .help, .feedbackcontainer, .feedback, #feedback, .addcoursecontainer, .addcourse, #addcourse").transition({
                top: "150%"
            }, 1e3), t(".back").transition({
                top: "200%",
                left: "60%"
            }, 1e3), t(".shield").transition({
                top: "200%"
            }, 1e3), o(".obsimotable", 0), o(".home", 0), o("#perustable", 0), o("#showbtn", 0), o("#hidebtn", 0), o("#coursedescriptions", 0), o("#gradtable", 0), o(".h1", 0)
        }), t(".helpbtn").click(function() {
            t(".help").transition({
                top: "50%"
            }, 1e3), t(".shield").transition({
                top: "50%"
            }, 1e3), t(".back").transition({
                top: "60%",
                left: "70%"
            }, 1e3), o(".obsimotable", 20), o(".home", 20), o("#perustable", 20), o("#showbtn", 20), o("#hidebtn", 20), o("#gradtable", 20), o(".h1", 5)
        }), t(".feedbackbtn").click(function() {
            t(".feedbackcontainer, .feedback, #feedback, .shield").transition({
                top: "50%"
            }, 1e3), t(".back").transition({
                top: "60%",
                left: "70%"
            }, 1e3), o(".obsimotable", 20), o(".home", 20), o("#perustable", 20), o("#showbtn", 20), o("#hidebtn", 20), o("#coursedescriptions", 20), o("#gradtable", 20), o(".h1", 5)
        }), t(".addcoursebtn").click(function() {
            t(".addcoursecontainer, .addcourse, #addcourse").transition({
                top: "50%"
            }, 1e3), t(".shield").transition({
                top: "50%"
            }, 1e3), t(".back").transition({
                top: "80%",
                left: "80%"
            }, 1e3), o(".obsimotable", 20), o(".home", 20), o("#perustable", 20), o("#showbtn", 20), o("#hidebtn", 20), o("#coursedescriptions", 20), o("#gradtable", 20), o(".h1", 5)
        }), t(".basiccoursebtn").click(function() {
            t(this).hide(), t(".hidebasiccourse").show(), t("#gradtable").transition({
                left: "85%"
            }, 1e3), t("#perustable").transition({
                left: "5%"
            }, 1e3)
        }), t(".hidebasiccourse").click(function() {
            t(this).hide(), t(".basiccoursebtn").show(), t("#gradtable").transition({
                left: "140%"
            }, 1e3), t("#perustable").transition({
                left: "-20%"
            }, 1e3)
        }), t(".savebtn").click(function() {
            o(".h1", 5), o(".home", 20), o(".obsimotable", 20), o("#perustable", 20), o("#gradtable", 20), t(".confirm").transition({
                top: "35%"
            }, 1e3)
        }), t(".no").click(function() {
            o(".h1", 0), o(".obsimotable", 0), o(".home", 0), o("#perustable", 0), o("#coursedescriptions", 0), o("#gradtable", 0), t(".confirm").transition({
                top: "200%"
            }, 1e3)
        }), t("#showbtn").click(function() {
            t(this).hide(), t("#hidebtn").show(), t("#coursedescriptions").transition({
                top: "5%"
            }, 1e3)
        }), t("#hidebtn").click(function() {
            t(this).hide(), t("#showbtn").show(), t("#coursedescriptions").transition({
                top: "-150%"
            }, 1e3)
        })
    })
}(jQuery);