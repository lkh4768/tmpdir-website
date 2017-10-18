/**
 * Created by wes.lee on 2017-09-29.
 */
$(function() {
  var curUrl =  window.location.href;
  $("#facebook-share-btn").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + curUrl);
  $("#twitter-share-btn").attr("href", "https://twitter.com/home?status=" + curUrl);
  $("#google-plus-share-btn").attr("href", "https://plus.google.com/share?url=" + curUrl);
  $("#tumblr-share-btn").attr("href", "http://www.tumblr.com/share/link?url=" + curUrl);
});
