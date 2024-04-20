import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.esm.js';

window.parent.window.dfsnGalleryOpen = function(element) {
    const options = {
        dataSource: galleryItems[element.dataset.galleryName]
    };
    options.index = parseInt(element.dataset.index);
    const lightbox = new PhotoSwipe(options);
    lightbox.addFilter('itemData', (itemData, index) => {
        console.log('itemData', itemData, index);
        return itemData;
    });      
    lightbox.init();
};