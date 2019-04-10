if (window.canRunAds === undefined) {
	for (var i = 1; i <= 10; i++) {
		$('body').append(`
		<div class='guarder${i}'>
			<div class='guarder-modal${i}' style='
	background:#e1e1e1; 
    margin: 0 auto;
    width:40%; 
    position:relative; 
    z-index:41;
    top: 25%;
    padding:30px; 
    -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
    -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); 
    box-shadow:0 0 10px rgba(0,0,0,0.4);'>
				<h2>We only serve a handful of minimal, non-intrusive ads. No pop-ups, sounds, movies... ever! Please disable Adblock or whitelist our website to motivate us! After disabling Adblock or whitelisting our website, please refresh the page to reload the content.</h2><br>
				<h2>Website chỉ có rất ít quảng cáo, và đó là những banner quảng cáo siêu nhỏ gọn, không có popup, video, tiếng, v...v. Xin hãy tắt Adblock để ủng hộ bọn mình! Sau khi tắt Adblock, hãy load lại trang nhé.</h2><br>
				<h2>このサイトには僅かにとても小さく、迷惑とならない広告バナーのみが表示されます。ポップアップ、音声再生、動画再生。。一切ありません。Adblockを無効にしていただけますと大変ありがたいです！お願いします！Adblockを無効にしていただいた後、ページを再読み込み、リロードしていただくとサイトが正常に動作します。</h3>
			</div>
		</div>
	`);
	}
	$('body').css('overflow', 'hidden');
}
$(".no-show-if-js-disabled").removeClass("no-show-if-js-disabled");