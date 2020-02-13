$('#cssBtn').click(function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    $('#cssText').css('color','rgb('+ r + ',' + g + ',' + b +')');
    $('#cssText').animate({height: 'toggle'})
});