document.addEventListener("DOMContentLoaded", function() {
    requestGetUrl();
});

function requestGetUrl() {
    request("/getUrl", (json) => {
        document.getElementById("mainFrame").setAttribute('src', json.url)
    });
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