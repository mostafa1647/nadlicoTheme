"use strict";
$(document).ready(() => {
    // main-slider - owl carousel
    $('#main-slider .owl-carousel').owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        //Basic Speeds
        autoplaySpeed : 800,
        dotsSpeed : 800,
        rewindSpeed : 1000,
        //Autoplay
        autoplay : true,
        autoplayTimeout: 5000,
        autoplayHoverPause : true,
        // Navigation
        nav : true,
        navText : ["<i class=\"fas fa-chevron-right\"></i>","<i class=\"fas fa-chevron-left\"></i>"],
        rewind : false,
        loop: true,
        dots: false,
        rtl: true
    });
    $('#half-page-slider .owl-carousel').owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        //Basic Speeds
        autoplaySpeed : 800,
        dotsSpeed : 800,
        rewindSpeed : 1000,
        //Autoplay
        autoplay : true,
        autoplayTimeout: 5000,
        autoplayHoverPause : true,
        // Navigation
        nav : true,
        navText : ["<i class=\"fas fa-chevron-right\"></i>","<i class=\"fas fa-chevron-left\"></i>"],
        rewind : false,
        loop: true,
        dots: false,
        rtl: true
    });
    $('#newest-products-slider .owl-carousel, #comments-slider .owl-carousel').owlCarousel({
        rtl:true,
        autoplay : true,
        autoplayTimeout: 5000,
        autoplayHoverPause : true,
        autoplaySpeed : 800,
        dotsSpeed : 800,
        rewind : false,
        nav: true,
        navText : ["<i class=\"fas fa-chevron-right\"></i>","<i class=\"fas fa-chevron-left\"></i>"],
        loop: true,
        dots: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2,
                nav:false
            },
            768:{
                items:3,
                nav:true
            },
            992:{
                items:4,
                nav:true
            },
            1200:{
                items:4,
                nav:true
            }
        }
    });
    $('#brands-slider .owl-carousel').owlCarousel({
        rtl:true,
        autoplay : true,
        autoplayTimeout: 5000,
        autoplayHoverPause : true,
        autoplaySpeed : 800,
        dotsSpeed : 800,
        rewind : false,
        nav: true,
        navText : ["<i class=\"fas fa-chevron-right\"></i>","<i class=\"fas fa-chevron-left\"></i>"],
        loop: true,
        dots: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0:{
                items:2,
                nav:false
            },
            576:{
                items:3,
                nav:false
            },
            768:{
                items:4,
                nav:true
            },
            992:{
                items:5,
                nav:true
            },
            1200:{
                items:7,
                nav:true
            }
        }
    });

    // timers
    var verificationCodeTimer = null;
    if($("#verificationCodeTimer").length) {
        verificationCodeTimer = getTimeAfterNow(0, 1, 30);
    }
    setInterval(function() { makeTimer([
        {selector: "homePageTimer", time: "29 April 2020 9:56:00 UTC+3:30"},
        {selector: "momentDiscountProductsTimer", time: "30 April 2020 9:56:00 UTC+3:30"},
        {selector: "momentDiscountProductsTimer1", time: "30 April 2020 8:56:00 UTC+3:30"},
        {selector: "wonderfulOffersTimer", time: "Sat May 30 2020 13:52:03  UTC+3:30"},
        {selector: "verificationCodeTimer", time: verificationCodeTimer}
    ]); }, 1000);
    // products-7 page
    $("#sidebarCategoriesTreeExpandBtn").length && sidebarCategoriesTreeFun($("#sidebarCategoriesTreeExpandBtn"));
    $(".toggle-btn").length && $(".toggle-btn").on("click", (e) => {
        $($(e)[0].target.closest(".card")).find(".content").slideToggle("slow");
        $($(e)[0].target).closest("button").toggleClass("clickTriggered");
    });
    $("#rangeSlider .slider-input").jRange({
        from: 500000,
        to: 3000000,
        showLabels: false,
        showScale: false,
        format: (value, pointer) => {
            let str = ``;
            let num = value;
            if(value >= 0 && value <= 999) {
                num = value;
                str = `${num}`;
            } else if(value > 999 && value <= 999999) {
                num = Math.floor(value / 1000);
                str = `${num} هزار`
            } else if(value > 999999 && value <= 999999999) {
                num = Math.floor(value / 1000000);
                let num2 = Math.floor((value / 1000) % 1000);
                num2 ? str = `${num} میلیون و ${num2} هزار` : str = `${num} میلیون`;
            }
            if(pointer === "high") {
                $("#rangeMaxPrice").length && $("#rangeMaxPrice").html(str);
            } else if(pointer === "low") {
                $("#rangeMinPrice").length && $("#rangeMinPrice").html(str);
            }
            return str;
        },
        width: window.innerWidth >= 1200 ? 200 : 170,
        step: 500,
        theme: "theme-nadlin",
        isRange: true,
        snap: false,
        disable: false,
    });
    $("#lightGallery").lightGallery({
        thumbnail: true,
        addClass: "ltr"
    });
    $(".card-count").length && cardCountFun(".card-count");
    $("#userRating").rating({
        emptyStar: '<i class="far fa-star"></i>',
        filledStar: '<i class="fas fa-star"></i>',
        min: 0,
        max: 5,
        step: 0.5,
        stars: 5,
        displayOnly: true,
        showCaption: false,
        size: 'sm'
    });
    $(".commentRating").rating({
        emptyStar: '<i class="far fa-star"></i>',
        filledStar: '<i class="fas fa-star"></i>',
        min: 0,
        max: 5,
        step: 0.5,
        stars: 5,
        displayOnly: true,
        showCaption: false,
        size: 'xs'
    });
    $("#transactionsTable").DataTable({
        language: {
            "sEmptyTable":     "هیچ داده‌ای در جدول وجود ندارد",
            "sInfo":           "نمایش _START_ تا _END_ از _TOTAL_ ردیف",
            "sInfoEmpty":      "نمایش 0 تا 0 از 0 ردیف",
            "sInfoFiltered":   "(فیلتر شده از _MAX_ ردیف)",
            "sInfoPostFix":    "",
            "sInfoThousands":  ",",
            "sLengthMenu":     "نمایش _MENU_ ردیف",
            "sLoadingRecords": "در حال بارگزاری...",
            "sProcessing":     "در حال پردازش...",
            "sSearch":         "",
            "sSearchPlaceholder": "جستجو",
            "sZeroRecords":    "رکوردی با این مشخصات پیدا نشد",
            "oPaginate": {
                "sFirst":    "برگه‌ی نخست",
                "sLast":     "برگه‌ی آخر",
                "sNext":     "بعدی",
                "sPrevious": "قبلی"
            },
            "oAria": {
                "sSortAscending":  ": فعال سازی نمایش به صورت صعودی",
                "sSortDescending": ": فعال سازی نمایش به صورت نزولی"
            }
        },
    });
    $('[data-toggle="tooltip"]').tooltip({
        placement:"bottom"
    });
    //dashboard chart
    var ctx = $('#lastBoughtChart');
    if(ctx.length) {
        Chart.defaults.global.defaultFontFamily = "iranyekanFaNum, iranyekan, IRANSansFaNum ,IRANSans, tahoma, serif, sans-serif";
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
                datasets: [{
                    label: 'تومان',
                    data: [25000, 45500, 39000, 65000, 50000, 80000],
                    backgroundColor: "#F74943",
                    borderColor: "#F74943",
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            stepSize: 10000
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    }
    $("#loginVerificationCode").keyup((e) => {
        let target = e.target;
        let maxLen = $(target).data().maxlength;
        let curLen = target.value.length;
        if(curLen >= maxLen) {
            $(target).next("input").length ? $(target).next("input").focus() : $(e.currentTarget).submit();
        } else if(curLen === 0) {
            $(target).prev("input").focus();
        }
    });
});
function makeTimer(timers) {
    var endTime, now, timeLeft, days, hours, minutes, seconds;
    $(timers).each((index, elem) => {
        endTime = new Date(elem.time);
        endTime = (Date.parse(endTime) / 1000);
        now = new Date();
        now = (Date.parse(now) / 1000);
        timeLeft = endTime - now;
        days = Math.floor(timeLeft / 86400);
        hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $(`#${elem.selector} #days`).length && $(`#${elem.selector} #days`).html(days);
        $(`#${elem.selector} #hours`).length && $(`#${elem.selector} #hours`).html(hours);
        $(`#${elem.selector} #minutes`).length && $(`#${elem.selector} #minutes`).html(minutes);
        $(`#${elem.selector} #seconds`).length && $(`#${elem.selector} #seconds`).html(seconds);
    });
}
const sidebarCategoriesTreeFun = (e) => {
    if($("#sidebarCategoriesTree").length) {
        var originalHeight = $("#sidebarCategoriesTree > ul").height();
        if(originalHeight > 165) {
            $("#sidebarCategoriesTree > ul").css({
                height: "165px"
            });
            e.on("click", (event) => {
                if($(event.target).hasClass("clicked")) {
                    $("#sidebarCategoriesTree > ul").css({height: '165px'});
                    $(event.target).removeClass("clicked").html("مشاهده همه");
                } else {
                    $("#sidebarCategoriesTree > ul").css({height: originalHeight + "px"});
                    $(event.target).addClass("clicked").html("بستن");
                }
            })
        } else {
            $(e).parent().hide();
        }
    }
};
const tabFun = (elem) => {
    $(".tab-title").removeClass("active");
    $(elem).addClass("active");
    $(".tab-content").css("display", "none");
    $("#" + elem.dataset.target).css("display", "block");
};
const cardCountFun = (sel) => {
    let value;
    $(sel + " .increase .increase-btn").click((e) => {
        value = $(e.target).closest(sel).find(".value");
        value.html(parseInt(value.html()) + 1);
    });
    $(sel + " .reduce .reduce-btn").click((e) => {
        value = $(e.target).closest(sel).find(".value");
        (value.html() > 0) ? value.html(parseInt(value.html()) - 1) : null;
    });
};
const getTimeAfterNow = (hour, minute, second) => {
    let d = new Date();
    d.setHours(d.getHours() + hour);
    d.setMinutes(d.getMinutes() + minute);
    d.setSeconds(d.getSeconds() + second);
    // return d.toDateString().concat(" " + d.toTimeString().slice(0, 8));
    return d.toString();
};