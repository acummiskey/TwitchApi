$(document).ready(function() {


var twitchId = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var api = "https://api.twitch.tv/kraken/channels/";

for (i = 0; i < twitchId.length; i++ ) {
  call = api + twitchId[i];
  var twit = [];
  twit = $.getJSON(call);

  console.log(json);
}










});
