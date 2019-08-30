$(document).ready(function () {
    ga('send', 'event', 'Adblock', 'page_loaded');
    setTimeout(function () {
        if (window.canRunAds === undefined || !adsbygoogle.loaded) {
            ga('send', 'event', 'Adblock', 'ad_blocked');
            $('a.gallery-item img').attr("src", "https://i.imgur.com/gzdB6Jj.png");
            $('a.gallery-item').attr('href', '');
            // $('.thumbnail-image').attr("style", "background-image:url(https://i.imgur.com/pRZNTzd.jpg)");
            // $('.line').text('We only serve a handful of minimal, non-intrusive ads that will not hinder your reading experience. No pop-ups, sounds, movies... ever! Please disable Adblock or whitelist our website to motivate us! After disabling Adblock or whitelisting our website, please refresh the page to reload the content.');
            // $('.article-entry a').not(":has(img)").text('Please disable Adblock to see the link').attr('href', '');
            $('body').append(`
		<div class='guarder'>
			<div class='guarder-modal' style='
                background:#e1e1e1; 
                margin: 0 auto;
                width:40%; 
                position:relative; 
                z-index:41;
                top: 25%;
                padding:30px; 
                -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
                -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); 
                box-shadow:0 0 10px rgba(0,0,0,0.4);'
            >
                <button onclick="closeDialog()" style="margin: auto; display: block; border-style: solid; border-width: 0.3em; border-color: red; padding: 3px">Close this dialog / Tắt thông báo / ダイアログを閉じる</button>
				<h2>We only serve a handful of minimal, non-intrusive ads that will not hinder your reading experience. No pop-ups, sounds, movies... ever! Please disable Adblock or whitelist our website to motivate us!</h2><br>
				<h2>Website chỉ có rất ít quảng cáo, và đó là những banner quảng cáo siêu nhỏ gọn không ảnh hưởng đến trải nghiệm đọc, không có popup, video, tiếng, v...v. Xin hãy tắt Adblock để ủng hộ bọn mình!</h2><br>
				<h2>このサイトには僅かにとても小さく、迷惑とならない広告バナーのみが表示されます。ポップアップ、音声再生、動画再生。。一切ありません。Adblockを無効にしていただけますと大変ありがたいです！お願いします！</h2>
			</div>
		</div>
	`);
            $('body').css('overflow', 'hidden');
        }
    }, 1000);
});

function closeDialog() {
    $('body').css('overflow', 'scroll');
    $('.guarder').remove();
}