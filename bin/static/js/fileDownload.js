/**
 * Created by wes.lee on 2017-09-29.
 */
$(function () {
  var curUrl = window.location.href;
  $("#facebook-share-btn").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + curUrl);
  $("#twitter-share-btn").attr("href", "https://twitter.com/home?status=" + curUrl);
  $("#google-plus-share-btn").attr("href", "https://plus.google.com/share?url=" + curUrl);
  $("#tumblr-share-btn").attr("href", "http://www.tumblr.com/share/link?url=" + curUrl);

  var expireTimeStr = $("#expire-time").text();
  var expireTime = new Date(expireTimeStr);
  var tmpExpireTimeStr = expireTime.toLocaleString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  });
  expireTimeStr = tmpExpireTimeStr.substring(0, 4) + "-";
  expireTimeStr += tmpExpireTimeStr.substring(6, 8) + "-";
  expireTimeStr += tmpExpireTimeStr.substring(10, 12);
  expireTimeStr += tmpExpireTimeStr.substring(13, 19);

  $("#expire-time").text(expireTimeStr);

  $("#remain-time")
    .countdown(expireTimeStr, function (event) {
      $(this).text(
        event.strftime('%I:%M:%S')
      );
    });

  location.href="file"+window.location.pathname;
});
