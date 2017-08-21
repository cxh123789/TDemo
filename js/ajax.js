var ajaxOperation = (function() {
	function syncRequest(url, callback) {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "data/", true);
		xhr.addEventListener("readystatechange", () => {
			if(xhr.readyState == 4 && xhr.status == 200) {
				callback(xhr);
			}
		}, false);
		xhr.send(null);
	}
	return {syncRequest:syncRequest};
})();