 params: {
            format: 'json',
            json_callback: 'JSON_CALLBACK'
      },


        headers: {
        "Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
		"Access-Control-Allow-Origin":"*"
      	}	



      	google maps:AIzaSyCE8plIrw_yfi3HHtCTqTHXX9xjmPOiuVk





/*
  $http.get("https://maps.googleapis.com/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000&key=AIzaSyCE8plIrw_yfi3HHtCTqTHXX9xjmPOiuVk").then(function(response){
    console.log(response.data);
    $scope.details = response.data;
  });

  $http({
    method: 'GET',
    headers: { 'X-Auth-Token': 'fe0821a0096f4db4983ed782fcabf141' },
    url: 'http://api.football-data.org/v1/competitions/?season=2016'      
  }).then(function(response) {  
    $scope.details2 = response.data;
    console.log(response);
  }, function errorCallback(response) {
    console.log('Error: ' + response);
  }); 

});




  
  
  $scope.search = "Sherlock Holmes";

  $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full").then(function(response){
  console.log(response.data);
  $scope.details = response.data;
  });
  
  */

  /*
  $scope.search2 = "star-movies-action";

  $http.jsonp("http://www.indian-tv-schedule-api.appspot.com/schedule?channel=" + $scope.search2 + "&date=2017-02-23&indent=").then(function(response){ 
    //console.log(response.data); 
    $scope.details = response.data;
    });
  */
  /*
  $http({
      method: 'get',  
      headers: {
          "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Origin":"*"
          },              
      url: "http://www.indian-tv-schedule-api.appspot.com/schedule?channel=star-movies-action&date=2017-02-23&indent=&format=jsonp&callback=JSON_CALLBACK " 
      }).then(function successCallback(response) {
      console.log('Success: ' + response);
      }, function errorCallback(response) {
      console.log('Error: ' + response);
  });
  

  $http({
    method: 'GET',
    headers: { 'X-Auth-Token': 'fe0821a0096f4db4983ed782fcabf141' },
      url:  'http://api.football-data.org/v1/competitions/354/fixtures/?matchday=22',
    dataType: 'json'    
  }).then(function successCallback(response) {
    console.log('Success: ' + response);
    }, function errorCallback(response) {
    console.log('Error: ' + response);
  }); 
*/









      	<h1 class="title">Tele Table</h1>

	<div class="actual">
		<div class="col-md-4">
			<h2>Enter the channel name:</h2>
			<br>
			<input class="form-control" type="text" name="channel" placeholder="Channel Name">
			    <br>
				<button type="button" class="btn btn-secondary">Search</button>
		</div>
		<div class="col-md-8">
			<br><br>
			
			<h3 ng-repeat="s in shows">
				{{s}}							
			</h3>
			
			<p>{{ details.timeZoneName}}</p>
		</div>
	</div>








	.actual{
	margin-top: 30px;
	margin-left: 150px;
}

.actual h3
{

	margin-top: 30px;
	margin-left: 50px;
	border: 2px solid;
	border-collapse: none;
	size: 10px;
}

<section ng-app="tt"  ng-controller="ctrlone" class="panel home">
<h1 class="title">Tele Table</h1>

	<div class="actual">
		<div class="col-md-4">
			<h2>Enter the channel name:</h2>
			<br>
			<input class="form-control" type="text" name="channel" placeholder="Channel Name">
			    <br>
				<button type="button" class="btn btn-secondary">Search</button>
		</div>
		<div class="col-md-8">
			<br><br>
			
			<h3 ng-repeat="s in shows">
				{{s}}							
			</h3>
			
			<h3 ng-repeat="d2 in details2">
				{{d2.caption}}							
			</h3>
			<p>{{ details.timeZoneName}}</p>


		</div>
	</div>
</section>	

nav {
  background-image: url("i1.jpg");
}






 <section class="news-index-structure">
		    
		    <div class="box-table">
		        <div class="box-cell" style="padding: 40px 20px 0;">
		    		<div class="gcards-grid" style="margin-bottom: 50px;">
		                <div class="gcard half">
		            		<a href="/story/match-preview-la-liga-round-24-atletico-madrid-vs-barcelona">
		                    <div class="gcard-image-fixed">
		                        <img src="https://grup14.com/thumbs/600x300c/2017-02/match-preview-liga-atletico-de-madrid-fcbarcelona.jpg">
		                    </div>
		                    
		                    <div class="gcard-info">
		                        <div class="gcard-title">
		                            <h3>Match Preview - La Liga Round 24 - Atlético Madrid vs Barcelona</h3>
		                        </div>
		                        <div class="gcard-teaser">
		                          <p></p><p dir="ltr">Barcelona travel to Madrid on Sunday afternoon knowing a win will see them go top of La Liga for a few hours at least with Real Madrid not playing until later on Sunday.</p><p></p>
		                        </div>
		                	</div>
		            		</a>
		    			</div>
					</div>		       
		     </div>
		     </div>
			</section>



			/***using boot strap cards**/
			 <div class="card text-center" style="margin-top: 50px; margin-left: 150px; height: 22rem; width: 20.09rem;">
		  <img class="card-img-top" src="https://www.w3schools.com/w3css/img_fjords.jpg" alt="Norway" style="width: 20rem;"alt="Card image cap">
		  <div class="card-block">
		    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		  </div>
		</div>


		/** gcard full*/
		.gcard.big {
  width: 48%;
  max-width: 48%;
  position: relative; }
  @media (max-width: 767px) {
    .gcard.big {
      width: 100%;
      max-width: 100%;
      height: auto; } }
  .gcard.big:hover .gcard-image p {
    opacity: .8; }
  .gcard.big .gcard-image {
    position: relative;
    height: 250px;
    width: 100%; }
    .gcard.big .gcard-image p {
      color: white;
      font-size: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%); }
  .gcard.big .gcard-info {
    position: relative; }
    .gcard.big .gcard-info .gcard-category {
      color: #0C1C2B;
      text-transform: uppercase;
      font-size: .6em;
      margin: 0;
      padding: 10px 0 20px; }
    .gcard.big .gcard-info .gcard-title {
      font-size: .6em; }
    .gcard.big .gcard-info .gcard-teaser {
      font-size: 1.1em;
      line-height: 1.8em; }

.gcard.full {
  -webkit-box-flex: 2;
  -moz-box-flex: 2;
  box-flex: 2;
  -webkit-flex: 2 0 100%;
  -moz-flex: 2 0 100%;
  -ms-flex: 2 0 100%;
  flex: 2 0 100%;
  max-width: 100%;
  position: relative;
  background-color: #f4f4f5;
  margin: 2% 0;
  background: #FFFFFF; }
  @media (max-width: 767px) {
    .gcard.full {
      width: 100%;
      height: auto; } }
  .gcard.full .gcard-image {
    position: absolute;
    width: 100%;
    height: 100%; }
  .gcard.full .gcard-info {
    position: relative;
    padding: 30px 30px 30px;
    margin-bottom: 60px; }
    @media (max-width: 1200px) {
      .gcard.full .gcard-info {
        padding: 20px 20px 25px;
        margin-bottom: 50px; } }
    @media (max-width: 920px) {
      .gcard.full .gcard-info {
        padding: 30px 30px 30px;
        margin-bottom: 60px; } }
    .gcard.full .gcard-info .gcard-title h1 {
      font-size: 1.7em;
      font-weight: 400; }
  .gcard.full .gcard-transfers {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 20px 0;
    border-top: 2px solid rgba(0, 0, 0, 0.05);
    text-transform: uppercase;
    font-weight: 700;
    line-height: 100%;
    box-sizing: content-box; }
    @media (max-width: 1200px) {
      .gcard.full .gcard-transfers {
        padding: 15px 0; } }
    @media (max-width: 1050px) {
      .gcard.full .gcard-transfers {
        padding: 15px 0; } }
    @media (max-width: 920px) {
      .gcard.full .gcard-transfers {
        padding: 20px 0; } }
    @media (max-width: 400px) {
      .gcard.full .gcard-transfers {
        padding: 20px 0; } }
    .gcard.full .gcard-transfers.listing p {
      margin-left: 30px; }
      @media (max-width: 1200px) {
        .gcard.full .gcard-transfers.listing p {
          margin-left: 20px; } }
      @media (max-width: 920px) {
        .gcard.full .gcard-transfers.listing p {
          margin-left: 30px; } }
    .gcard.full .gcard-transfers p {
      display: inline-block;
      margin: 0 20px 0px 0; }
      @media (max-width: 1200px) {
        .gcard.full .gcard-transfers p {
          margin: 0 12px 0 0; } }
      @media (max-width: 920px) {
        .gcard.full .gcard-transfers p {
          margin: 0 20px 0 0; } }
      @media (max-width: 400px) {
        .gcard.full .gcard-transfers p {
          font-size: 14px;
          margin: 0 10px 0 30px; } }
    .gcard.full .gcard-transfers .circles {
      display: inline-block;
      position: relative; }
      .gcard.full .gcard-transfers .circles.blue .circle {
        background: #42B4E6; }
      .gcard.full .gcard-transfers .circles.green .circle {
        background: #2DAD39; }
        .gcard.full .gcard-transfers .circles.green .circle:nth-child(4) {
          background: rgba(0, 0, 0, 0.1); }
      .gcard.full .gcard-transfers .circles.yellow .circle {
        background: #FFBA14; }
        .gcard.full .gcard-transfers .circles.yellow .circle:nth-child(4), .gcard.full .gcard-transfers .circles.yellow .circle:nth-child(3) {
          background: rgba(0, 0, 0, 0.1); }
      .gcard.full .gcard-transfers .circles.red .circle {
        background: #CA243E; }
        .gcard.full .gcard-transfers .circles.red .circle:nth-child(4), .gcard.full .gcard-transfers .circles.red .circle:nth-child(3), .gcard.full .gcard-transfers .circles.red .circle:nth-child(2) {
          background: rgba(0, 0, 0, 0.1); }
      .gcard.full .gcard-transfers .circles .circle {
        width: 12px;
        height: 12px;
        border-radius: 50px;
        background: rgba(0, 0, 0, 0.1);
        margin: 5px 7px 0px;
        display: inline-block;
        position: relative; }
        @media (max-width: 1050px) {
          .gcard.full .gcard-transfers .circles .circle {
            margin: 5px 4px 0px; } }
