var uid = "";
var current_best_score = 0;
var all_scores = new Array();

function getScores() {
	FB.api('/me?fields=id', function(response) {
		uid = response.id;
		FB.api('/1429099524039083/scores', function(response) {
			all_scores = response.data;
			for (var i=0 ; i!=all_scores.length ; i++) {
				if (all_scores[i].user.id == uid) {
					current_best_score = all_scores[i].score;
					document.getElementById("bestscore").innerHTML = current_best_score;
				}
			}
		});
	});
}
