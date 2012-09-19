
var aCode;
var q; var a; var z; var w; var s; var x; var e; var d; var c; 
var r; var f; var v; var t; var g; var b; var y; var h; var n; 
var u; var j; var m; var i; var k; var o; var l; var p;

var qq; var aa; var zz; 

var ww; var ss; var xx; 

var start;


$(function() {

	var encode = $('.main').attr('id');


	// Extract "GET" parameters from a JS include querystring
	function getParams(script_name) {
	  // Find all script tags
	  var scripts = document.getElementsByTagName("script");
	  
	  // Look through them trying to find ourselves
	  for(var i=0; i<scripts.length; i++) {
	    if(scripts[i].src.indexOf("/" + script_name) > -1) {
	      // Get an array of key=value strings of params
	      var pa = scripts[i].src.split("?").pop().split("&");

	      // Split each key=value into array, the construct js object
	      var p = {};
	      for(var j=0; j<pa.length; j++) {
	        var kv = pa[j].split("=");
	        p[kv[0]] = kv[1];
	      }
	      return p;
	    }
	  }
	  
	  // No scripts match
	  return {};
	}

	if( encode == 'start' )
	{
		q = ''; a = true; z = ''; w = ''; s = ''; x = ''; e = ''; d = ''; c = ''; 
		r = ''; f = ''; v = ''; t = ''; g = ''; b = ''; y = ''; h = ''; n = ''; 
		u = ''; j = ''; m = ''; i = ''; k = ''; o = ''; l = ''; p = '';

		qq = 1; aa = 1; zz = 1; 

		ww = true; ss = true; xx = true; 
		start = true;
	}
	else
	{
		q = 'error'; a = 'error'; z = 'error'; w = 'error'; s = 'error'; x = 'error'; e = 'error'; d = 'error'; c = 'error'; 
		r = 'error'; f = 'error'; v = 'error'; t = 'error'; g = 'error'; b = 'error'; y = 'error'; h = 'error'; n = 'error'; 
		u = 'error'; j = 'error'; m = 'error'; i = 'error'; k = 'error'; o = 'error'; l = 'error'; p = 'error';
		
		start  = 'Not licensed.';

		qq = 0; aa = 0; zz = 0; 

		ww = false; ss = false; xx = false; 
		start = false;
	} 

});

var encode64 = (function(){
	return function(callback){
		aCode = callback;
	};

})();