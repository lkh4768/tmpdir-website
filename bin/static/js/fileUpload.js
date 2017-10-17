/**
 * Created by wes.lee on 2017-09-29.
 */

/* facebook share api */
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* twitter share api */
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

(function () {
  new Clipboard('#copy-btn');
})();

$(document).ready(
  Dropzone.options.dropzone = {
    maxFilesize: $("#max-file-size").text(),
    dictDefaultMessage: "파일을 드랍하거나 클릭해주세요",
    autoProcessQueue: false,
    uploadMultiple: true,
    parallelUploads: 10000,
    init: function () {
      var self = this;
      var uploadBtn = document.querySelector("#upload-all")
      self.options.addRemoveLinks = true;
      uploadBtn.addEventListener("click", function () {
        $(".dz-success").hide();
        var files = self.getQueuedFiles();
        var totalFilesize = getQueuedFileSize(files);
        if (totalFilesize < self.options.maxFilesize * 1024 * 1024) {
          $(".dz-progress").show();
          self.processQueue();
        } else {
          console.log("파일 크기 초과");
        }
      });

      self.on("successmultiple", function (file, response) {
        var expireTime = new Date(response.expireTime);
        $(".overlay").css("display", "table");
        $(".upload").css("display", "none");
        $("#download-url").val("http://tmpdir.sw-warehouse.xyz/download/" + response.id);
        $("#expire-time").text(expireTime.toLocaleString([], {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          }) + " 에 만료됩니다.");
        var link = $("#download-url").val();
        $("#facebook-share-btn").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + link);
        $("#twitter-share-btn").attr("href", "https://twitter.com/home?status=" + link);
        $("#google-plus-share-btn").attr("href", "https://plus.google.com/share?url=" + link);
        $("#tumblr-share-btn").attr("href", "http://www.tumblr.com/share/link?url=" + link);
      });

      //New file added
      self.on("addedfile", function (file) {
        $(".dz-progress").hide();
        $(".upload").css("display", "block");
      });

      self.on("reset", function () {
        $(".upload").css("display", "none");
      });

      $(".overlay").click(function (e) {
        if ($(e.target).is("div")) {
          self.removeAllFiles(true);
          $(".overlay").css("display", "none");
        }
      });

      $("#reset-btn").click(function () {
        self.removeAllFiles(true);
      });
    }
  }
)

function getQueuedFileSize(files) {
  var totalFilesize = 0;
  for (i = 0, len = files.length; i < len; i++) {
    totalFilesize += files[i].size;
  }
  return totalFilesize;
}
