import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.esm.js';

window.parent.window.dfsnGalleryOpen = function(element) {
    const options = {
        dataSource: [
            {
                src: `${element.dataset.image}?width=1200&aspect_ratio=16:9`,
                width: 1200,
                height: 675,
                alt: element.dataset.title
            }
        ],
        bgOpacity: 0.5,
        padding: { top: 20, bottom: 40, left: 100, right: 100 },
        showHideAnimationType: 'none'
    };

    options.index = 0; // defines start slide index
    const pswp = new PhotoSwipe(options);
    pswp.init(); // initializing PhotoSwipe core adds it to DOM
};