ga('send', 'event', 'Adblock', 'page_loaded');
if (window.canRunAds === undefined) {
	ga('send', 'event', 'Adblock', 'ad_blocked');
	$('img').attr("src", "https://puu.sh/Do8z9.png");
	$('.thumbnail-image').attr("style", "background-image:url(https://i.imgur.com/pRZNTzd.jpg)");
	$('.line').text('We only serve a handful of minimal, non-intrusive ads that will not hinder your reading experience. No pop-ups, sounds, movies... ever! Please disable Adblock or whitelist our website to motivate us! After disabling Adblock or whitelisting our website, please refresh the page to reload the content.');
	$('.article-entry a').not(":has(img)").text('Please disable Adblock to see the link').attr('href', '#');
}