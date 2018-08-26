javascript: ( function() {

cb = function() {
  create_spritz();
};

var script0 = document.createElement('SCRIPT');
script0.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
document.body.appendChild(script0);

var script1 = document.createElement('SCRIPT');
script1.src = 'https://rawgit.com/MikePineda/HackMty2018/master/tracking/build/tracking-min.js';
document.body.appendChild(script1);

var script2 = document.createElement('SCRIPT');
script2.src = 'https://rawgit.com/MikePineda/HackMty2018/master/tracking/build/data/face-min.js';
document.body.appendChild(script2);


var script4 = document.createElement('SCRIPT');
script4.src = 'https://rawgit.com/MikePineda/HackMty2018/master/glance/spritz.js?callback=cb';
script4.onload = cb;
document.body.appendChild(script4);
}

)();
//javascript:(function(){cb=function() { create_spritz(); }; var script=document.createElement('SCRIPT');script.src='https://rawgit.com/MikePineda/HackMty2018/master/glance/spritz.js?callback=cb';script.onload=cb;document.body.appendChild(script);})();

// var script3 = document.createElement('SCRIPT');
// script3.src = 'https://rawgit.com/MikePineda/HackMty2018/master/tracking/assets/stats.min.js';
// document.body.appendChild(script3);
