//var timer = 0;
//var perc = 0;
//
//function animate() {
//    perc++;
//    updateBar(perc);
//    if(perc < 1000) {
//        timer = setTimeout(animate, 50);
//    }
//}
//
//function updateBar(per) {
//    $('#progress').css("width", per);
//    $('#pbar').text(per);
//}
//
//$(document).ready(function() {
//    $('#bar').click(function() {
//        clearTimeout(timer);
//        perc = 0;
//        animate();
//    });
//    $('#myBtn').fadeOut("slow");
//});
$(document).ready(function() {
    $("myBtn").fadeOut("slow");
});

