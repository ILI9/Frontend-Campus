//when documetn is ready

$(document).ready(function() {
    $('.slider').on('beforeChange', function(e) {
        console.log(e);
    })
    //init slider
    $('.slider').slick(
        {
            dots:true,
            variableHeight: true,
            slidesToShow: 3,
            prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
            nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
        }
    );
});

$(document).on('dblclick', function() {
    console.log(event);
    if(event.key === 'ArrowRight') {
        $('.slider').slick('slickPrev');
    }
    
})