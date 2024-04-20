import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.esm.js';
import PhotoSwipeDynamicCaption from 'https://unpkg.com/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js';

window.parent.window.dfsnGalleryOpen = function(element) {
    const lightbox = new PhotoSwipe({
        dataSource: galleryItems[element.dataset.galleryName],
        index: parseInt(element.dataset.index)
    });

    /*lightbox.addFilter('itemData', (itemData, index) => {
        console.log('itemData', itemData, index);
        return itemData;
    });*/

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        type: 'auto',
        captionContent: (slide) => {
            return slide.data.element.querySelector('img').getAttribute('alt');
        }
    });
    
    lightbox.init();
};