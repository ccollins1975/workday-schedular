$("#date").text(moment().format("MMMM Do YYYY"))
$("#time").text(moment().format('LT'))
$("#hour").text(moment().format('HH'))
$("#timedate").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

var currentHour = moment().format('HH')

function wrap() {
    for (let i = 9; i < 18; i++) {
        if (i < currentHour) {
            $("#hour" + i).addClass("past")
        } else if (i === currentHour) {
            $("#hour" + i).addClass("present")
            $("#hour" + i).removeClass("past")
        } else {
            $("#hour" + i).addClass("future")
            $("#hour" + i).removeClass("present")
            $("#hour" + i).removeClass("past")
        }

    }
}



$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).siblings(".description").attr("id");
        console.log(value, time);
        localStorage.setItem(time, value);
    });

    var timeCheck = setInterval(wrap, 2000);

    $("#hour9").val(localStorage.getItem("hour9"));
    $("#hour10").val(localStorage.getItem("hour10"));


});