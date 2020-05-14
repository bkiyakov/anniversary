const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2019, 5, 15);
const currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() + 1);


console.log(Math.round(Math.abs(currentDate - firstDate) / oneDay) - 1);
console.log(currentDate.getDate() + " " + currentDate.getMonth() + " " + currentDate.getFullYear());


$(document).ready(function(){
    $("#animateDate").click(function(){
        $(".count").prop('Counter',0).animate({
            //Counter: Math.round(Math.abs((firstDate - secondDate) / oneDay))
            Counter: Math.round(Math.abs(currentDate - firstDate) / oneDay) - 1
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});