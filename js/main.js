require('./webtorrent.js');

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
	$('#share-url').val(window.location.href);
	$('[data-toggle="tooltip"]').tooltip();
	$('#share-url-btn').mouseleave(function () {
		//$('#share-url-btn').attr('title', 'Copy to clipboard').tooltip('fixTitle');
		$('#share-url-btn').attr('title', 'Copy to clipboard');
	});

	fitMagnetInput();

	var url_string = window.location.href;
	var url = new URL(url_string);
	var magnetBase64 = url.searchParams.get("magnet");
	if (magnetBase64) {
	  console.log(magnetBase64);
	  var magnetLink = atob(magnetBase64)
	  console.log(magnetLink);
	  if (magnetLink.match(/magnet:\?xt=urn:[a-z0-9]{20,50}/i) != null) {
		  console.log("magnet link is valid, proceeding");
		  //$("#downloadLink").attr("href", magnetLink);
		  downloadTorrent(torrentId);
	  } else {
		console.log("magnet link is INVALID");
	  }	  
	}
});

function fitMagnetInput() {
	var formW = $('#magnet-input').width();
	var buttonW = $('#magnet-input button').outerWidth();
	$('#magnet-input input').outerWidth(formW - buttonW);
}
