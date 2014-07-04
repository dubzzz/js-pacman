var uid = "";
var current_best_score = 0;
var all_scores = new Array();

function getScores() {
	FB.api('/me?fields=id', function(response) {
		uid = response.id;
		FB.api('/1429099524039083/scores?fields=score', function(response) {
			all_scores = response.data;
			var highscores_div = document.getElementById("highscores");
			highscores_div.innerHTML = "";
			for (var i=0 ; i!=all_scores.length ; i++) {
				if (all_scores[i].user.id == uid) {
					current_best_score = all_scores[i].score;
					document.getElementById("bestscore").innerHTML = current_best_score;
				}
				var scoreline = document.createElement("tr");
				var scoreline_rank = document.createElement("td");
				scoreline_rank.innerHTML = (i+1);
				scoreline.appendChild(scoreline_rank);
				var scoreline_name = document.createElement("td");
				scoreline_name.innerHTML = all_scores[i].user.name;
				scoreline.appendChild(scoreline_name);
				var scoreline_score = document.createElement("td");
				scoreline_score.innerHTML = all_scores[i].score;
				scoreline.appendChild(scoreline_score);
				highscores_div.appendChild(scoreline);
			}
		});
	});
}
