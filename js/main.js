document.addEventListener("DOMContentLoaded", function() {
    checkRedirect();
	requestData();
	bindEvents();
});

function checkRedirect() {
    var url = location.href;
    var parameters = getUrlParameters(url);

    if(parameters.isRedirect == "true") {
		showBody(false);
		requestGetUrl("/getVideoId", json => window.location.href = json.url);
	}
}

function requestData() {
	var videoDuration = document.getElementById("videoDuration").checked ? "any" : "medium";

	requestGetUrl("/getUrl?videoDuration=" + videoDuration, json => {
        document.getElementById("mainFrame").setAttribute('src', json.url);
        document.getElementById("htmlCode").innerHTML = getHtmlCode(json.url);
    });
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

function bindEvents() {
	document.getElementById("button").addEventListener("click", () => requestData());
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

function showBody(visibility) {
	document.getElementsByTagName("body")[0].style.visibility = visibility ? "visible" : "hidden";
}

function getHtmlCode(url) {
    var html = '<img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE2/MDAxNjUwMzQ5MDY3ODk0.dJNBDMz3M0AigVWG0HuuyVpqWKZa4LjmMdy9wSj77dgg.I4ZUB_IAmeK1tw6LVWpxTu3hUSpQ43fObCJUUpe9oekg.PNG/1.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE2/MDAxNjUwMzQ5MDY3ODk0.dJNBDMz3M0AigVWG0HuuyVpqWKZa4LjmMdy9wSj77dgg.I4ZUB_IAmeK1tw6LVWpxTu3hUSpQ43fObCJUUpe9oekg.PNG/1.png?type=w1080" width="825" height="245" alt="대문이미지" style="width: 825px; height: 245px;"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfNTQg/MDAxNjUwMzQ5MDY4MjAx.j4ogWBKqvi8dklVD4z5kAF0-MSQ0kli-h8x5g6kHIU0g.qlKdF3gBvHgjaZiVPy6zER9ISn3nYa4Gteb2jgOKcpIg.PNG/2.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfNTQg/MDAxNjUwMzQ5MDY4MjAx.j4ogWBKqvi8dklVD4z5kAF0-MSQ0kli-h8x5g6kHIU0g.qlKdF3gBvHgjaZiVPy6zER9ISn3nYa4Gteb2jgOKcpIg.PNG/2.png?type=w1080" width="152" height="165" alt="대문이미지" style="width: 152px; height: 165px;"><a href="https://cafe.naver.com/snowhiteda/2" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjQw/MDAxNjUwMzQ5MDY4NDYz.yvJua2WisoHcBYQhQ7lZxVPePgXYMsD6CgLJSAZ8lPMg.KKtxq-6MPFbjiDfiwBlgER35gUvhBm933srrORnM4PQg.PNG/3.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjQw/MDAxNjUwMzQ5MDY4NDYz.yvJua2WisoHcBYQhQ7lZxVPePgXYMsD6CgLJSAZ8lPMg.KKtxq-6MPFbjiDfiwBlgER35gUvhBm933srrORnM4PQg.PNG/3.png?type=w1080" width="113" height="165" alt="대문이미지" style="width: 113px; height: 165px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfOTcg/MDAxNjUwMzQ5MDY4NzE5.U4E0_oDVaSUOcMQ1NBik51Z_91VUHNgI-GVEnqpwgwUg.BqcvarZyq1v-GKIU8KS6MX5f9WtGMbHuUGPoaOnldy8g.PNG/4.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfOTcg/MDAxNjUwMzQ5MDY4NzE5.U4E0_oDVaSUOcMQ1NBik51Z_91VUHNgI-GVEnqpwgwUg.BqcvarZyq1v-GKIU8KS6MX5f9WtGMbHuUGPoaOnldy8g.PNG/4.png?type=w1080" width="26" height="165" alt="대문이미지" style="width: 26px; height: 165px;"><a href="https://www.twitch.tv/snow_hite" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjkg/MDAxNjUwMzQ5MDY4OTY0.C5IqLbpNzeskgDydPY5F0KbiJ0c4IxeUnfSlAxBftZcg.XtURSVtfVENEs5N7hLQdaDw31pmRW5wxAfxWROmU5K0g.PNG/5.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjkg/MDAxNjUwMzQ5MDY4OTY0.C5IqLbpNzeskgDydPY5F0KbiJ0c4IxeUnfSlAxBftZcg.XtURSVtfVENEs5N7hLQdaDw31pmRW5wxAfxWROmU5K0g.PNG/5.png?type=w1080" width="109" height="165" alt="대문이미지" style="width: 109px; height: 165px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTQ0/MDAxNjUwMzQ5MDY5MjA3.oIbAPSEVU7r5GbfP_aFBNn1Z-C2HmPPUwxLi8EK47kcg.eU0ksFi7KClksezQF5QBk_X6fO5SsaM3r3iOVcBALeAg.PNG/6.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTQ0/MDAxNjUwMzQ5MDY5MjA3.oIbAPSEVU7r5GbfP_aFBNn1Z-C2HmPPUwxLi8EK47kcg.eU0ksFi7KClksezQF5QBk_X6fO5SsaM3r3iOVcBALeAg.PNG/6.png?type=w1080" width="25" height="165" alt="대문이미지" style="width: 25px; height: 165px;"><a href="https://www.youtube.com/channel/UCbCQDFbLpkurWc4_0R5-pEA" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTkg/MDAxNjUwMzQ5MDY5NDgx.nLdCnbAqNs2T2k9q8uvxgSuEEKFvsaBggN3BYT8CCZUg.L7QpDykWQsdINARBk2m7N0Iddg3eO_ahnZsZBqCaUE0g.PNG/7.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTkg/MDAxNjUwMzQ5MDY5NDgx.nLdCnbAqNs2T2k9q8uvxgSuEEKFvsaBggN3BYT8CCZUg.L7QpDykWQsdINARBk2m7N0Iddg3eO_ahnZsZBqCaUE0g.PNG/7.png?type=w1080" width="110" height="165" alt="대문이미지" style="width: 110px; height: 165px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjk4/MDAxNjUwMzQ5MDY5NzE4.OCPv18KBmZMjDElKvzRBtQw8G6ghB2mycYtXS0hpIz4g.kSmuB8koxE2dJfhGXGrtxrKv5q89N02Wywq9uhmczcwg.PNG/8.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjk4/MDAxNjUwMzQ5MDY5NzE4.OCPv18KBmZMjDElKvzRBtQw8G6ghB2mycYtXS0hpIz4g.kSmuB8koxE2dJfhGXGrtxrKv5q89N02Wywq9uhmczcwg.PNG/8.png?type=w1080" width="23" height="165" alt="대문이미지" style="width: 23px; height: 165px;"><a href="https://www.youtube.com/channel/UCQST0zZW1UIHaEvgXwjAjIA" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTQx/MDAxNjUwMzQ5MDcwMTAz.WxwP16ZPeIcKJQ7fNmQB1jOL26u5h8tHyBxMji_xf6Yg.YWX6ADgkULXiiSaW-HKcxjxb4hhiUpCIOdYkfA_FzkYg.PNG/9.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTQx/MDAxNjUwMzQ5MDcwMTAz.WxwP16ZPeIcKJQ7fNmQB1jOL26u5h8tHyBxMji_xf6Yg.YWX6ADgkULXiiSaW-HKcxjxb4hhiUpCIOdYkfA_FzkYg.PNG/9.png?type=w1080" width="112" height="165" alt="대문이미지" style="width: 112px; height: 165px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjgx/MDAxNjUwMzQ5MDcwMzcw.J2n_AKJLqlW6ImUnf89lazVR6H1sJ9UDJPoRWxsNHdAg.fROTDFtOmdEb8RyD2BRC_rLTWOncA_16qc-_LPXfKFEg.PNG/10.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjgx/MDAxNjUwMzQ5MDcwMzcw.J2n_AKJLqlW6ImUnf89lazVR6H1sJ9UDJPoRWxsNHdAg.fROTDFtOmdEb8RyD2BRC_rLTWOncA_16qc-_LPXfKFEg.PNG/10.png?type=w1080" width="155" height="165" alt="대문이미지" style="width: 155px; height: 165px;"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfNDAg/MDAxNjUwMzQ5MDcwNjA1.Rc9NcPHB7VFQos_OsKTqUpn3n10LNJNhOFFWUV0m8ugg.yw4ybrwU06pgdCJYkstmalx-wZCFl7ellDbKLbTwVIAg.PNG/11.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfNDAg/MDAxNjUwMzQ5MDcwNjA1.Rc9NcPHB7VFQos_OsKTqUpn3n10LNJNhOFFWUV0m8ugg.yw4ybrwU06pgdCJYkstmalx-wZCFl7ellDbKLbTwVIAg.PNG/11.png?type=w1080" width="825" height="22" alt="대문이미지" style="width: 825px; height: 22px;"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE3/MDAxNjUwMzQ5MDcwODgw.S401hvG3XH9YqE6F4mkFkbIj06U4VuoDhT0KqrXz3bsg.u7X5p2V4pbRmhowcr8gUB9VyyuUD7Ne-Ga3hZ5FldPgg.PNG/12.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE3/MDAxNjUwMzQ5MDcwODgw.S401hvG3XH9YqE6F4mkFkbIj06U4VuoDhT0KqrXz3bsg.u7X5p2V4pbRmhowcr8gUB9VyyuUD7Ne-Ga3hZ5FldPgg.PNG/12.png?type=w1080" width="190" height="179" alt="대문이미지" style="width: 190px; height: 179px;"><a href="https://fancim.me/celeb/profile.aspx?cu_id=snowhite" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjkz/MDAxNjUwMzQ5MDcxMTQz.Jhr9PsSQss3MmbQKOiiSML-vZfbfk4x1Dd6KTpZvH9cg.NeX5L9kX6LKRCzs3MJbrcLQVVWcKLGR87MKdquYe15Ag.PNG/13.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjkz/MDAxNjUwMzQ5MDcxMTQz.Jhr9PsSQss3MmbQKOiiSML-vZfbfk4x1Dd6KTpZvH9cg.NeX5L9kX6LKRCzs3MJbrcLQVVWcKLGR87MKdquYe15Ag.PNG/13.png?type=w1080" width="119" height="179" alt="대문이미지" style="width: 119px; height: 179px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE1/MDAxNjUwMzQ5MDcxNjYw.BOOTh1qb-XdTLVUsp84qq2xsabGbifInQSuZiyDb5EAg.9Cj-Dlx79lQ1lmg6WsHsCNLwh_oBbpIiM82JfpGnscUg.PNG/14.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE1/MDAxNjUwMzQ5MDcxNjYw.BOOTh1qb-XdTLVUsp84qq2xsabGbifInQSuZiyDb5EAg.9Cj-Dlx79lQ1lmg6WsHsCNLwh_oBbpIiM82JfpGnscUg.PNG/14.png?type=w1080" width="43" height="179" alt="대문이미지" style="width: 43px; height: 179px;"><a href="https://www.instagram.com/snowhiteda/" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjQ4/MDAxNjUwMzQ5MDcxOTI5.2Y4XlZpLwTv1R_Bc3YQOgaU3EK0fQGlhH7ajncJ8KaEg.RYxNSRmUVIvvaOf4Vcwo1qRosG51N33l5DDLnVZlImkg.PNG/15.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjQ4/MDAxNjUwMzQ5MDcxOTI5.2Y4XlZpLwTv1R_Bc3YQOgaU3EK0fQGlhH7ajncJ8KaEg.RYxNSRmUVIvvaOf4Vcwo1qRosG51N33l5DDLnVZlImkg.PNG/15.png?type=w1080" width="119" height="179" alt="대문이미지" style="width: 119px; height: 179px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTgz/MDAxNjUwMzQ5MDcyMTk4.SJjPLyZE-htIbxhheXmTZfLmqZJwx2W-Uuhbw9F0mwwg.geem0UQkjJg4F1Lf6IzjbGPnJlFtB5LLaE2MOV1PywMg.PNG/16.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTgz/MDAxNjUwMzQ5MDcyMTk4.SJjPLyZE-htIbxhheXmTZfLmqZJwx2W-Uuhbw9F0mwwg.geem0UQkjJg4F1Lf6IzjbGPnJlFtB5LLaE2MOV1PywMg.PNG/16.png?type=w1080" width="36" height="179" alt="대문이미지" style="width: 36px; height: 179px;"><a href="https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=5d3543f2973bf" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE4/MDAxNjUwMzQ5MDcyNDI1.PHdcDOmOSHHvDpmOJ40fclFUDjI9U5mtVPvf0o9V1LEg.WZ6jgZ4gyO5zKvxA65uKrXSKtNwil38KIjj79RfRrrwg.PNG/17.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMjE4/MDAxNjUwMzQ5MDcyNDI1.PHdcDOmOSHHvDpmOJ40fclFUDjI9U5mtVPvf0o9V1LEg.WZ6jgZ4gyO5zKvxA65uKrXSKtNwil38KIjj79RfRrrwg.PNG/17.png?type=w1080" width="148" height="179" alt="대문이미지" style="width: 148px; height: 179px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTgw/MDAxNjUwMzQ5MDcyNjgy.09vTC6sRPJubg2yKTAV8tOv-GkI6HYgcAMglHox7fb4g.CZhkFzIB_nfYh0Uw_Rml2oLVnEFsYsy2n5P26QkOedQg.PNG/18.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTgw/MDAxNjUwMzQ5MDcyNjgy.09vTC6sRPJubg2yKTAV8tOv-GkI6HYgcAMglHox7fb4g.CZhkFzIB_nfYh0Uw_Rml2oLVnEFsYsy2n5P26QkOedQg.PNG/18.png?type=w1080" width="170" height="179" alt="대문이미지" style="width: 170px; height: 179px;"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTc1/MDAxNjUwMzQ5MDcyOTIy.pAhNFWeVa4dSMrtCVjgNtJTLAI_UGf8QS84nH_hoQU4g.Hs8BfgERn7xfZDBO1aRySvVF-k1g-C7I9hYpqy19xbsg.PNG/19.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTc1/MDAxNjUwMzQ5MDcyOTIy.pAhNFWeVa4dSMrtCVjgNtJTLAI_UGf8QS84nH_hoQU4g.Hs8BfgERn7xfZDBO1aRySvVF-k1g-C7I9hYpqy19xbsg.PNG/19.png?type=w1080" width="825" height="103" alt="대문이미지" style="width: 825px; height: 103px;"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTkg/MDAxNjUwMzUwMTM4MzI0.E-l9XSzVWuyGBLLd_vW1s_OSg8DEH-1jrYazLdCWQqkg.s51HDZ6Pfof4WhNXAFKg8bBKCaT5nrwU_Xh64rUNhDAg.PNG/20.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTkg/MDAxNjUwMzUwMTM4MzI0.E-l9XSzVWuyGBLLd_vW1s_OSg8DEH-1jrYazLdCWQqkg.s51HDZ6Pfof4WhNXAFKg8bBKCaT5nrwU_Xh64rUNhDAg.PNG/20.png?type=w1080" width="83" height="370" alt="대문이미지" style="width: 83px; height: 370px;"><iframe src="' + url + '" width="660px" height="366px" frameborder="0" scrolling="no" allowfullscreen=""></iframe><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTcx/MDAxNjUwMzUwMTQ1NDYy.ylHbV0q4swrw-TFdAI0nTYo6bd_3Li1MymQv5PuFhvgg.qOrxwqmQ8fLQC7hMvFMRGeCNlDGn_ugl5DswjmOul4Yg.PNG/21.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTcx/MDAxNjUwMzUwMTQ1NDYy.ylHbV0q4swrw-TFdAI0nTYo6bd_3Li1MymQv5PuFhvgg.qOrxwqmQ8fLQC7hMvFMRGeCNlDGn_ugl5DswjmOul4Yg.PNG/21.png?type=w1080" width="82" height="370" alt="대문이미지" style="width: 82px; height: 370px;"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMzgg/MDAxNjUwMzQ5MDczNjk1.bl_efofgjw37e--GiHsaY5VuYjv5rQclEvmeSEg8l8kg.DgQIiVZEXfcrbmFnn2nkOtFgAd2P2LRQaVqYbm7kKkog.PNG/22.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMzgg/MDAxNjUwMzQ5MDczNjk1.bl_efofgjw37e--GiHsaY5VuYjv5rQclEvmeSEg8l8kg.DgQIiVZEXfcrbmFnn2nkOtFgAd2P2LRQaVqYbm7kKkog.PNG/22.png?type=w1080" width="825" height="175" alt="대문이미지" style="width: 825px; height: 175px;"><a href="https://cafe.naver.com/snowhiteda?iframe_url=/SimpleArticleList.nhn%3Fsearch.clubid=30568913%26search.menuid=12%26search.moreDirection=next" target="_blank" title="새창으로 열림"><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTA4/MDAxNjUwMzQ5MDczOTQ3.uj3WpxIhb5kWlUyy_NbSKqj71rouarbc6fpElVi1B_Qg.PdzBBPcveuKJVEhQRy7AfzKWM2s2zKlbFnIsoVA_CIYg.PNG/23.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfMTA4/MDAxNjUwMzQ5MDczOTQ3.uj3WpxIhb5kWlUyy_NbSKqj71rouarbc6fpElVi1B_Qg.PdzBBPcveuKJVEhQRy7AfzKWM2s2zKlbFnIsoVA_CIYg.PNG/23.png?type=w1080" width="390" height="111" alt="대문이미지" style="width: 390px; height: 111px;"></a><img id="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfOTgg/MDAxNjUwMzQ5MDc0MjQy.aZ1lVwU-rDy_xduJixey-6ZR6k8Uq7PPdVdp4UvlRIMg.a0WpbRUV5AqnQgkktz2xoJKKYIHabKsB5RCoGFzC4Gcg.PNG/24.png?type=w1080" src="https://cafeskthumb-phinf.pstatic.net/MjAyMjA0MTlfOTgg/MDAxNjUwMzQ5MDc0MjQy.aZ1lVwU-rDy_xduJixey-6ZR6k8Uq7PPdVdp4UvlRIMg.a0WpbRUV5AqnQgkktz2xoJKKYIHabKsB5RCoGFzC4Gcg.PNG/24.png?type=w1080" width="435" height="111" alt="대문이미지" style="width: 435px; height: 111px;">';

    return html;
}