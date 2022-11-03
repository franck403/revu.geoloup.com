fonction popup() {
	let id = document.getElementById("open-popup");
	let popupWindow = null;
	let windowSize = 'width=800,height=500,left=0,top=0';

	id.addEventListener("click", function(event){
		let url = this.dataset.href;
		if (popupWindow === null || popupWindow.closed) {
			popupWindow = window.open(url, 'Login to revu geoloup com', windowSize);
		} else {
			popupWindow.focus();
		}
		event.preventDefault();
	});
})();
/*<button type="button" id="open-popup" data-href="revu.geoloup.com/popup/login">Login</button>