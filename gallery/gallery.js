window.parent.window.galleryItems = [];

items.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;
    img.title = item.title;
    img.addEventListener('click', () => window.parent.window.dfsnGalleryOpen(img));
    const container = index == 0 ? document.querySelector('.main') : document.querySelector('.secondary');
    container.insertBefore(img, container.lastChild);
    window.parent.window.galleryItems.push( {
        src: item.image,
        width: 1200,
        height: 675,
        alt: item.alt
    });
});

const callback = (tcData, success) => {
    console.log('__tcfapi event', tcData, success);

    if (success && tcData.eventStatus === 'tcloaded') {
    }
    else {
    }
};

function load() {
    if (window.parent.window.__tcfapi) {
        window.__tcfapi = window.parent.window.__tcfapi;
        console.log('tcfapi exists');
    }
    else {
        console.log('tcfapi not exists');
        return;
    }

    __tcfapi('addEventListener', 2, callback);
}

function OnImgClick(element) {
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
}

function loadLibraries() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.min.css';
    window.parent.document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'core.js';
    script.type = 'module';
    window.parent.document.head.appendChild(script);
}

loadLibraries();
load();