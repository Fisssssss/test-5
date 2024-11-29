window.onload = function() {
    document.getElementById('spinner').style.display = 'none';
};
document.getElementById('logo').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
let currentVideo;

function playVideo(videoId) {
    if (currentVideo) {
        currentVideo.pause();
    }
    currentVideo = document.getElementById(videoId);
    currentVideo.play();
}
document.getElementById('load-more').onclick = function() {
    // AJAX запрос для получения новых отзывов
};
