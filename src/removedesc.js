injectCss('removepausedesc.css');

var hideInPlayerMenuStored = browser.storage.local.get('hideInPlayerMenu');

hideInPlayerMenuStored.then(function (response) {
    // Default setting: true
    if (!Object.keys(response).length) {
        browser.storage.local.set({
            hideInPlayerMenu: true
        });

        injectCss('removeplayerdesc.css');
    }

    if (response.hideInPlayerMenu) {
        injectCss('removeplayerdesc.css');
    }
});

function injectCss(filename) {
    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', browser.runtime.getURL('src/' + filename));
    document.getElementsByTagName('head')[0].appendChild(fileref);
}
