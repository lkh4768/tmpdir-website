/**
 * Created by wes.lee on 2017-09-29.
 */
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
        $(".overlay").css("display", "table");
        $(".upload").css("display", "none");
        $("#download-url").val("http://tmpdir.sw-warehouse.xyz/" + response.id);
        var expireTime = new Date(response.expireTime);
        var tmpExpireTimeStr = expireTime.toLocaleString([], {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: '2-digit',
          hour12: false
        });
        var expireTimeStr = tmpExpireTimeStr.substring(0, 4) + "-";
        expireTimeStr += tmpExpireTimeStr.substring(6, 8) + "-";
        expireTimeStr += tmpExpireTimeStr.substring(10, 12);
        expireTimeStr += tmpExpireTimeStr.substring(13, 19);
        $("#expire-time").text(expireTimeStr + " 에 만료됩니다.");
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
