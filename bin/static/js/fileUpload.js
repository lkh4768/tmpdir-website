/**
 * Created by wes.lee on 2017-09-29.
 */
Dropzone.autoDiscover = false;
(function () {
  new Clipboard('#copy-btn');
  uploadDisable();

  var dropzone = new Dropzone("#dropzone", {
    maxFilesize: $("#max-file-size").text(),
    autoProcessQueue: false,
    uploadMultiple: true,
    parallelUploads: 10000,
    createImageThumbnails: false,
    addRemoveLinks: false,
    uploadprogress: 100,
    previewTemplate: "<li data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\" title=\"\" class=\"list-group-item d-flex justify-content-between align-items-center file-explorer-item\">\n <span class=\"ellipsis\"data-dz-name></span>\n <div class=\"progress\">\n <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" data-dz-uploadprogress>\n </div>\n </div>\n <span>\n<span data-dz-size></span><span>&nbsp;&nbsp;&nbsp;</span><i class=\"fa fa-times file-remove-btn\" data-dz-remove></i>\n</span>\n <span class=\"error-msg\" style=\"display:none\" data-dz-errormessage></span></li>"
  });

  $("#upload-btn").click(function () {
    $(".dz-success").hide();
    var totalFileSize = parseInt($("#total-file-size").attr("value"));
    cnosole.log(totalFileSize);
    if (totalFileSize < dropzone.options.maxFilesize * 1024 * 1024) {
      $(".dz-progress").show();
      dropzone.processQueue();
    }
  });

  dropzone.on("successmultiple", function (file, response) {
    var curUrl = window.location.origin;
    $(".overlay").css("display", "table");
    uploadDisable();
    $("#download-url").val(curUrl + "/" + response.id);
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
    $("#expire-time").text(expireTimeStr);
    var link = $("#download-url").val();
    $("#facebook-share-btn").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + link);
    $("#twitter-share-btn").attr("href", "https://twitter.com/home?status=" + link);
    $("#google-plus-share-btn").attr("href", "https://plus.google.com/share?url=" + link);
    $("#tumblr-share-btn").attr("href", "http://www.tumblr.com/share/link?url=" + link);
  });

  dropzone.on("addedfile", function (file) {
    $(".dz-progress").hide();
    uploadEnable();
    addTotalFileCnt();
    addTotalFileSize(dropzone, file);
    dzMsgDisable();
  });

  dropzone.on("reset", function () {
    uploadDisable();
    resetTotalFileCnt();
    resetTotalFileSize();
    dzMsgEnable();
  });

  dropzone.on("removedfile", function (file) {
    removeTotalFileCnt();
    removeTotalFileSize(dropzone, file);
    $(file.previewElement).tooltip("dispose");
  });

  dropzone.on("error", function (file) {
    $(file.previewElement).css("color", "red");
    $(file.previewElement).tooltip({
      html: true,
      placement: "right",
      title: function () {
        return $(file.previewElement).children(".error-msg").html();
      }
    });
  });

  dropzone.on("success", function (file) {
    $(file.previewElement).css("color", "green");
    $(file.previewElement).find(".file-remove-btn").hide();
  });

  $(".overlay").click(function (e) {
    if ($(e.target).is("div")) {
      dropzone.removeAllFiles(true);
      $(".overlay").css("display", "none");
    }
  });

  $("#reset-btn").click(function () {
    dropzone.removeAllFiles(true);
  });
})();

function uploadDisable() {
  $("#upload-btn").attr("disabled", true);
  $("#upload-btn").css("cursor", "default");
}

function uploadEnable() {
  $("#upload-btn").removeAttr("disabled", true);
  $("#upload-btn").css("cursor", "pointer");
}

function addTotalFileSize(dropzone, file) {
  var totalFileSize = parseInt($("#total-file-size").attr("value"));
  totalFileSize += file.size;
  $("#total-file-size").attr("value", totalFileSize);
  $("#total-file-size").html(dropzone.filesize(totalFileSize));
}

function addTotalFileCnt() {
  var totalFileCnt = parseInt($("#total-file-cnt").text());
  $("#total-file-cnt").text(totalFileCnt + 1);
}

function resetTotalFileSize() {
  $("#total-file-size").attr("value", 0);
  $("#total-file-size").html("0");
}

function resetTotalFileCnt() {
  $("#total-file-cnt").text(0);
}

function removeTotalFileSize(dropzone, file) {
  var totalFileSize = parseInt($("#total-file-size").attr("value"));
  totalFileSize -= file.size;
  $("#total-file-size").attr("value", totalFileSize);
  $("#total-file-size").html(dropzone.filesize(totalFileSize));
}

function removeTotalFileCnt() {
  var totalFileCnt = parseInt($("#total-file-cnt").text());
  $("#total-file-cnt").text(totalFileCnt - 1);
}

function dzMsgDisable(){
  $(".dz-message").hide();
}

function dzMsgEnable(){
  $(".dz-message").show();
}
