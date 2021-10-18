injectCss('removepausesynopsis.css');

var hideEpisodeSynopsisStored = browser.storage.local.get('hideEpisodeSynopsis');
var hideGeneralSynopsisStored = browser.storage.local.get('hideGeneralSynopsis');

hideEpisodeSynopsisStored.then(function (response) {
    // Default setting: true
    if (!Object.keys(response).length) {
        browser.storage.local.set({
            hideEpisodeSynopsis: true
        });

        injectCss('removeepisodesynopsis.css');
    }

    if (response.hideEpisodeSynopsis) {
        injectCss('removeepisodesynopsis.css');
    }
});

hideGeneralSynopsisStored.then(function (response) {
    // Default setting: false
    if (!Object.keys(response).length) {
        browser.storage.local.set({
            hideGeneralSynopsis: false
        });
    }

    if (response.hideGeneralSynopsis) {
        injectCss('removegeneralsynopsis.css');
    }
});

function injectCss(filename) {
    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', browser.runtime.getURL('src/' + filename));
    document.getElementsByTagName('head')[0].appendChild(fileref);
}
