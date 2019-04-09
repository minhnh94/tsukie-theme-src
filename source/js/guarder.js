if (window.canRunAds === undefined) {
	for (var i = 0; i < 10; i++) {
		$('body').append("<div class='guarder'></div>");
	}
	$('body').append(`
		<div class='guarder'>
			<div class='guarder-modal' style='
	background:#e1e1e1; 
    margin: 0 auto;
    width:160px; 
    position:relative; 
    z-index:41;
    top: 25%;
    padding:30px; 
    -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
    -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); 
    box-shadow:0 0 10px rgba(0,0,0,0.4);'>
				<h3>We only serve 4 non-intrusive ads. No pop-ups, sounds, movies... ever! Please disable Adblock or whitelist our website to motivate us!</h3><br>
				<h3>Chỉ có đúng 4 banner quảng cáo siêu nhỏ gọn, không có popup, video, tiếng, v...v. Xin hãy tắt Adblock để ủng hộ chúng tôi!</h3><br>
				<h3>このサイトにはただ迷惑とならない４つの広告バナーのみが表示されます。ポップアップ、音声再生、動画。。一切ありません。Adblockを無効にしていただけますと大変ありがたいです！お願いします！</h3>
			</div>
		</div>
	`);
	$('body').css('overflow', 'hidden');
}
$("#will-show").removeClass("no-show-if-js-disabled");
$('header').removeClass("no-show-if-js-disabled");