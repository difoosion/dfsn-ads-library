items.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;
    img.title = item.title;
    const container = index == 0 ? document.querySelector('.main') : document.querySelector('.secondary');
    container.insertBefore(img, container.lastChild);
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

load();