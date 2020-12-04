var swiper = new Swiper('.swiper-container', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
  
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: galleryThumbs
  },

});



var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});