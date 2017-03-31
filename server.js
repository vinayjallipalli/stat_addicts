var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app=express();

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.render('public/index.html');
});

app.get('/scrape', function(req, res){            
	request('https://grup14.com/stories/matchdays?page_ncategory_matchdays=1', function (error, response, html) {
		if (!error && response.statusCode == 200) 
		{
			var $ = cheerio.load(html);
			var title=[];	
			var teaser=[];	
			var link=[];
			var result = [];			
			
			$('div.gcard-title').each(function(i, element){											
				title[i]=$(this).children().text();								
			});
			//console.log(title);							

			$('div.gcard-teaser').each(function(i,element){
				teaser[i]=$(this).children().text();										
			});
			//console.log(teaser);
			
			$('div.gcard-image-fixed').each(function(i,element){
				link[i] ='https://grup14.com'+$(this).children().attr('src');				
			});
			//console.log(link);						
			
			for (i = 0; i < title.length; i++) { 
			    result.push({a:link[i], b:title[i] , c: teaser[i] });			  
			}

			res.contentType('application/json');
			res.send(JSON.stringify(result));

		}
	});        
});


app.get('/scrape_one', function(req, res){            
	request('http://www.goal.com/en-india/', function (error, response, html) {
		if (!error && response.statusCode == 200) 
		{
			var $ = cheerio.load(html);
			var title_one=[];	
			var teaser_one=[];	
			var link_one=[];
			var result_one = [];						
			var n=0;

			$('a.image-wrapper').each(function(i, element){															
				
				title_one[i]=$(this).next().next().attr('data-title');
				teaser_one[i]=$(this).next().next().attr('data-description');
				link_one[i] =$(this).next().next().attr('data-image');				
			});
																			
			for (i = 0; i < title_one.length; i++) { 
			    result_one.push({a:link_one[i], b:title_one[i] , c: teaser_one[i] });			  
			}

			res.contentType('application/json');
			res.send(JSON.stringify(result_one ));

		}
	});        
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
