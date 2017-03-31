

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.navbar-default');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > 100) {
          $('.navbar-default').css('background-color', '#000');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
});


/*----------------------------Angular code--------------------------------------------------------------*/


var app=angular.module('mod_one',[]);

app.controller('ctrl_one',function ($scope,$http) {
	
	$http.get('scrape').then(function(response){
		console.log(response.data);
		$scope.details=response.data;
	});

	$http.get('scrape_one').then(function(response){
		console.log(response.data);
		$scope.details=response.data;
	});

});

