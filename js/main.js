require('./webtorrent.js');

var shareUrl = null;

var clipboard = new Clipboard('#share-url-btn');

// clipboard.on('success', function (e) {
// 	//$('#share-url-btn').attr('title', 'Copied!').tooltip('fixTitle').tooltip('show');
// 	$('#share-url-btn').attr('title', 'Copied!');
// 	e.clearSelection();
// });


// $(window).bind("resize", function () {
	// fitMagnetInput();
// });


$(document).ready(function () {
	shareUrl = window.location.href;
	// $('#share-url').val(shareUrl);
	$('#share-url-btn').attr('data-clipboard-text', shareUrl);
	// $('#share-url-btn').on('click', function(e) {
	// 	await navigator.clipboard.writeText(shareUrl);
	// });
	var shareUrlEncoded = encodeURIComponent(shareUrl);
	$('#whatsappLink').attr('href', `https://api.whatsapp.com/send?text=${shareUrlEncoded}`);
	$('#facebookLink').attr('href', `https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`);
	$('#emailLink').attr('href', `mailto:?body=${shareUrlEncoded}`);

	$('[data-toggle="tooltip"]').tooltip();
	$('#share-url-btn').mouseleave(function () {
		//$('#share-url-btn').attr('title', 'Copy to clipboard').tooltip('fixTitle');
		$('#share-url-btn').attr('title', 'Copy to clipboard');
	});
});
