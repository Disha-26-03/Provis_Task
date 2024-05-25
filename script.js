
$(document).ready(function () {

    $('.btn-play').click(function () {
        var videoSrc = 'https://www.youtube.com/embed/VIDEO_ID';
        $('#video').attr('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
        $('#videoModal').modal('show');
    });


    $('#videoModal').on('hidden.bs.modal', function () {
        $('#video').attr('src', '');
    });
});
