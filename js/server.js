var http = require("http");
var fs = require("fs");
var mime = require("mime");
var request = require('request');

var HOST = "https://www.googleapis.com/youtube/v3/search";
var KEY = "AIzaSyDs6we2WHPWUkuOgSXn0BtVZ5-EetkdJpo";

var server = http.createServer(function(request, response) {
	console.log("요청 URL: ", request.url);
	
	var urlPath = getUrlPath(request.url);
	var filepath = getFilePath(urlPath);
	var contentType = mime.getType(filepath);
	var parameter = getUrlParameters(request.url);
	
	switch(urlPath) {
		case "/getUrl":
            getVideoUrlJson((error, json) => {
                if(error) return;

                jsonResponse(response, json);
            });
            return;
	}
		
	if(isText(contentType))	fs.readFile(filepath, "utf-8", content);
	else fs.readFile(filepath, content);
	
	function content(error, data) {
		if(error) {
			response.writeHead(404, {
				"content-type": "text/plain; charset=utf-8"
			});
				
			response.end("File Not Found");
		}
		else {
			response.writeHead(200, {
				"content-type": contentType + (isText(contentType) ? "; charset=utf-8" : ""),
				"cache-control": isText(contentType) ? "no-cache" : "max-age=31536000"
			});
				
			response.end(data);
		}
	}
});

server.listen(9000);
console.log("서버 on");

function getVideoUrlJson(callback) {
    request(HOST + "?key=" + KEY + "&part=snippet&channelId=UCbCQDFbLpkurWc4_0R5-pEA&type=video&order=date&maxResults=1&videoDuration=medium", (error, response, body) => {
        body = '{"kind": "youtube#searchListResponse", "etag": "JDLMl_Jq623tXroNanffh_FkZSI", "nextPageToken": "CAEQAA", "regionCode": "KR","pageInfo": {"totalResults": 176,"resultsPerPage": 1},"items": [{"kind": "youtube#searchResult", "etag": "nrfGihl5430yQT-h7-fTjN6jHLc", "id": {"kind": "youtube#video", "videoId": "siACigYbkgo"},"snippet": {"publishedAt": "2022-04-17T03:00:30Z", "channelId": "UCbCQDFbLpkurWc4_0R5-pEA", "title": "응애가 되었습니다 - [2022년 3월 설백 핫클립 모음!]", "description": "설백 #핑맨 ✿설백 유튜브 구독하기✿ - https://bit.ly/2Oqe86N ✿설백의 트위치 생방송✿ - http://twitch.tv/snow_hite ✿설백의 이메일✿ ...", "thumbnails": {"default": {"url": "https://i.ytimg.com/vi/siACigYbkgo/default.jpg", "width": 120,"height": 90},"medium": {"url": "https://i.ytimg.com/vi/siACigYbkgo/mqdefault.jpg", "width": 320,"height": 180},"high": {"url": "https://i.ytimg.com/vi/siACigYbkgo/hqdefault.jpg", "width": 480,"height": 360}},"channelTitle": "YouTube설백", "liveBroadcastContent": "none", "publishTime": "2022-04-17T03:00:30Z"}}]}';

        if(!body) return;

        var json = JSON.parse(body);
        var items = json.items;

        if(items.length < 1) return;

        var videoId = items[0].id.videoId;
        var videoUrl = "https://www.youtube.com/embed/" + videoId;
        var json = {
            url: videoUrl
        }

        callback(error, json);
    });
}

function jsonResponse(response, data) {
	response.writeHead(200, {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "no-cache"
	});
		
	response.end(JSON.stringify(data));
}

function getUrlPath(url) {
	var index = url.indexOf("?");
	return index < 0 ? url : url.substr(0, index);
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

function getFilePath(urlPath) {
	if(urlPath == "/") return "snowWhiteCafe.html";
	
	return urlPath.substr(1, urlPath.length - 1);
}

function isText(contentType) {
	return contentType == "text/html" || contentType == "text/css" || contentType == "application/javascript";
}