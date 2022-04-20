document.addEventListener("DOMContentLoaded", function() {
    checkRedirect();
    requestGetUrl("/getUrl", json => document.getElementById("mainFrame").setAttribute('src', json.url));
});

function checkRedirect() {
    var url = location.href;
    var parameters = getUrlParameters(url);

    if(parameters.isRedirect == "true") {
        requestGetUrl("/getVideoId", json => window.location.href = json.url);
    }
}

function requestGetUrl(path, callback) {
    request(path, (json) => callback(json));
}

function request(url, callback) {
	var xhr = new XMLHttpRequest();
		
	xhr.addEventListener("load", function() {
		var json = JSON.parse(xhr.responseText);
		if(callback) callback(json);
	});
	
	xhr.open("GET", url, true);
	xhr.send();
}

function getUrlParameters(url) {
	var result = {};
	var part = parameterPart();
	var parameters = part.split("&");
	
	for(var i = 0; i < parameters.length; i++) {
		var tokens = parameters[i].split("=");
		
		if(tokens.length < 2) continue;
		
		result[tokens[0]] = tokens[1];
	}
	
	return result;
	
	
	function parameterPart() {
		var tokens = url.split("?");
		return tokens.length > 1 ? tokens[1] : "";
	}
}