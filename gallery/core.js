import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.esm.js';

window.parent.window.dfsnGalleryOpen = function(element) {
    const options = {
        dataSource: galleryItems[element.dataset.galleryName]
    };
    options.index = parseInt(element.dataset.index);
    const pswp = new PhotoSwipe(options);
    pswp.init();
};