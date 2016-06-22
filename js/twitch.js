$(document).ready(function() {


var twitchId = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var api = "https://api.twitch.tv/kraken/channels/";
var streamApi = "https://api.twitch.tv/kraken/streams/";

for (i = 0; i < twitchId.length; i++ ) {
var user = "";
    user = twitchId[i];
  call = streamApi + twitchId[i];

getOnline(call, user);


}


function getOnline(call, user){

  $.getJSON(call, function(ok) {
  var isOnline = ok.stream;

   if (isOnline) {

   appendDropOn(user);

   }
   else {
     appendDropOff(user);
   }

  });

}

function appendDropOn(user){

$(".dropdown-menu").append("<li id='target'><span class='glyphicon glyphicon-off on' aria-hidden='true'></span> " + user + "</li>");

}

function appendDropOff(user){

$(".dropdown-menu").append("<li class ='liOff disabled' id='target'><span class='glyphicon glyphicon-off off' aria-hidden='true'></span> " + user + "</li>");

}


$("ul").click(function(name) {
$( ".img-responsive" ).remove();


  name = $(name.target).text();

  var call = api + name.trim();

  $.getJSON(call, function(ok) {

if (ok.profile_banner) {
 $(".banner").append("<img src=" + ok.profile_banner +  " class='img-responsive center-block img-rounded' alt='banner' />");
}
  });



});







});
