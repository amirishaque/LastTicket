$("a[href^='mailto:']").click(function (e) {
    e.preventDefault();
    var href = $(this).attr("href"),
        target = $(this).attr("target");
    window.open(href, target || "_self")
}), $(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active"), $(".menusflex").toggleClass("active"), $("body").toggleClass("close-scroll-all")
    })
}), document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    window.addEventListener("scroll", function () {
        window.scrollY > 100 ? header.classList.add("header-active") : header.classList.remove("header-active")
    })
}), document.addEventListener("DOMContentLoaded", function () {
    var searchToggle = document.getElementById("search-toggle"),
        searchBox = document.getElementById("search-click"),
        searchOverlay = document.getElementById("wrapper");
    searchToggle.addEventListener("click", function (event) {
        searchBox.classList.toggle("show-search"), searchToggle.classList.toggle("search-icon-choose"), searchOverlay.classList.toggle("search-overlay")
    })
});
var btn = $("#scroll-top-l");
$(window).scroll(function () {
    $(window).scrollTop() > 300 ? btn.addClass("show-scroll-top-btn") : btn.removeClass("show-scroll-top-btn")
}), btn.on("click", function (e) {
    e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300")
}), $(".accordion-item:first-child .accordion-header").addClass("active-accord"), $(".accordion-item:first-child .accordion-content").slideDown(), $(".accordion-header").on("click", function () {
    var $this = $(this),
        $parentCol = $this.closest(".accordion-item"),
        $allHeadings = $(".accordion-header"),
        $allLists = $(".accordion-content");
    $allHeadings.not($this).removeClass("active-accord"), $this.toggleClass("active-accord"), $allLists.not($parentCol.find(".accordion-content")).slideUp();
    var $currentList = $parentCol.find(".accordion-content");
    $currentList.is(":visible") ? $currentList.slideUp() : ($allLists.slideUp(), $currentList.slideDown())
});

function numberOnly(id) {
    var element = document.getElementById(id);
    element.value = element.value.replace(/[^0-9]/gi, "")
}
$(document).ready(function () {
    function updateHeights() {
        var heights = $(".blog-post .article-title").map(function () {
                return $(this).height()
            }).get(),
            maxHeight = Math.max.apply(null, heights);
        $(".blog-post .article-title").css("min-height", maxHeight + "px")
    }
    updateHeights(), $(window).on("resize", function () {
        updateHeights()
    })
});