var id = 0;
var source = [
    "./res/video/gallery.mp4",
    "./res/video/gallery.mp4",
    "./res/video/gallery.mp4",
]

function selectSource(_id) {
    id = _id;
    updateIndicator(id);
    changeSource(source[id]);
}

function nextSource() {
    id += 1;

    if (id >= source.length) {
        id = 0;
    }

    updateIndicator(id);
    changeSource(source[id]);
}

function previousSource() {
    id -= 1;

    if (id < 0) {
        id = (source.length - 1);
    }

    updateIndicator(id);
    changeSource(source[id]);
}

function updateIndicator(id) {
    var indicator1 = document.getElementById("indicator-1");
    var indicator2 = document.getElementById("indicator-2");
    var indicator3 = document.getElementById("indicator-3");

    indicator1.className = (id == 0) ? "video-indicator-active" : "video-indicator";
    indicator2.className = (id == 1) ? "video-indicator-active" : "video-indicator";
    indicator3.className = (id == 2) ? "video-indicator-active" : "video-indicator";
}

function changeSource(url) {
   var video = document.getElementById("video-player");
   video.src = url;
   video.play();
}

