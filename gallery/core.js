import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.esm.js';

window.parent.window.dfsnGalleryOpen = function(event) {
    const element = event.target;
    const options = {
        dataSource: galleryItems,
        bgOpacity: 0.5,
        padding: { top: 20, bottom: 40, left: 100, right: 100 },
        showHideAnimationType: 'none'
    };
    options.index = element.dataset.index; // defines start slide index
    const pswp = new PhotoSwipe(options);
    pswp.init(); // initializing PhotoSwipe core adds it to DOM
};