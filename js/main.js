require('./webtorrent.js');

var shareUrl = null;

var clipboard = new Clipboard('#share-url-btn');

clipboard.on('success', function (e) {
	//$('#share-url-btn').attr('title', 'Copied!').tooltip('fixTitle').tooltip('show');
	$('#share-url-btn').attr('title', 'Copied!');
	e.clearSelection();
});


$(window).bind("resize", function () {
	fitMagnetInput();
});


$(document).ready(function () {
	shareUrl = window.location.href;
	$('#share-url').val(shareUrl);
	$('[data-toggle="tooltip"]').tooltip();
	$('#share-url-btn').mouseleave(function () {
		//$('#share-url-btn').attr('title', 'Copy to clipboard').tooltip('fixTitle');
		$('#share-url-btn').attr('title', 'Copy to clipboard');
	});

	fitMagnetInput();
});

function fitMagnetInput() {
	var formW = $('#magnet-input').width();
	var buttonW = $('#magnet-input button').outerWidth();
	$('#magnet-input input').outerWidth(formW - buttonW);
}
