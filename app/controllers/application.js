steroids.view.navigationBar.show("Photo Gallery"); 
steroids.view.setBackgroundColor("#444"); 

$(function() {
	$('#thumbnails img').on('click',function(){

		message = {
					recipient: 'singleView', 
					src: $(this).attr('src'), 
					title: $(this).attr('alt')
		} 

		window.postMessage(message); 
		steroids.layers.push(singleView);

		//var webView = new steroids.views.WebView('/views/photo_gallery/single.html'); 
		//steroids.layers.push(webView);
	}); 
});