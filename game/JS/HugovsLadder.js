function hugovsladders (hero) {
    
    var centerXH = hero.offsetLeft + hero.offsetWidth / 2;
    var ladders = document.querySelectorAll('.ladder');
    
ladders.forEach(function (ladder) {
    if (Math.abs(centerXH - (ladder.offsetLeft + ladder.offsetWidth/2)) <= 10);
 })
    
     
}
