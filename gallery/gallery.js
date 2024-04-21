if (typeof window.parent.window.galleryItems === 'undefined') {
    window.parent.window.galleryItems = [];
}

function generateRandomString(length) {
    let resultado = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const cantidadCaracteres = caracteres.length;
    for (let i = 0; i < length; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * cantidadCaracteres));
    }
    return resultado;
}

const galleryName = generateRandomString(6);

const secondaryDiv = document.querySelector('.secondary');
const mainDiv = document.querySelector('.main');
const secondaryContainer = document.querySelector('.secondary_container');

const galleryItems = [];
let index = -1;
items.forEach((item, i) => {
    index++;
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;
    img.title = item.title;
    if (i % 3 == 2) {
        index++
        galleryItems.push( {
            html:
            `<div style="display: flex; justify-content: center; align-items: center; height: 100%">
                <div style="width: 300px; height: 600px">
                    <img src="https://i0.wp.com/www.smileycat.com/wp-content/uploads/2018/10/fast-and-furious-banner-ad.png?w=300&ssl=1">
                </div>
            </div>`,
        });
    }
    
    img.dataset.index = index;
    img.dataset.galleryName = galleryName;
    const container = index == 0 ? mainDiv : secondaryContainer;

    if (index != 0) {
        container.style.minWidth = `${secondaryDiv.clientWidth}px`;
    }

    container.insertBefore(img, container.lastChild);
    galleryItems.push( {
        /* html:
        `<figure class="dfsn-gallery-item">
            <img src="${item.image}" alt="${item.alt}" title="${item.title}">
            <figcaption>${item.description}</figcaption>
        </figure>`, */
        src: item.image,
        width: 1200,
        height: 675,
        alt: item.alt
    });
    
    if (items.length == i + 1 && i % 3 != 0) {
        galleryItems.push( {
            html:
            `<div style="display: flex; justify-content: center; align-items: center; height: 100%">
                <div style="width: 300px; height: 600px">
                    <img src="https://i0.wp.com/www.smileycat.com/wp-content/uploads/2018/10/grammarly-banner-ad.png?w=300&ssl=1">
                </div>
            </div>`,
        });
    }
});

const secondaryContainerClone = secondaryContainer.cloneNode(true);
secondaryDiv.appendChild(secondaryContainerClone);

const images = document.querySelectorAll('.secondary img, .main img');
images.forEach(img => {
    img.addEventListener('click', () => window.parent.window.dfsnGalleryOpen(img));
});

window.parent.window.galleryItems[galleryName] = galleryItems;

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
                alt: element.dataset.title,
                caption: element.dataset.caption
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

    const style = document.createElement('style');
    style.innerHTML = `
    .dfsn-gallery-item {
        display: flex;
        height: 100%;
        width: 100%;
        padding: 60px;
        margin: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .dfsn-gallery-item figcaption {
        color: #fff;
        display: inline-block;
        font-size: 16px;
        line-height: 24px;
        background: rgba(0,0,0,0.2);
        padding: 4px 8px
    }
    `;
    window.parent.document.head.appendChild(style);
}

loadLibraries();
load();