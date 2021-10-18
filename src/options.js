var hideEpisodeSynopsisStored = browser.storage.local.get('hideEpisodeSynopsis');
var hideGeneralSynopsisStored = browser.storage.local.get('hideGeneralSynopsis');

hideEpisodeSynopsisStored.then((response) => {
    document.querySelector('#hideEpisodeSynopsis').checked =
        response.hideEpisodeSynopsis;
});

hideGeneralSynopsisStored.then((response) => {
    document.querySelector('#hideGeneralSynopsis').checked = response.hideGeneralSynopsis;
});

function saveOptions(event) {
    browser.storage.local.set({
        hideEpisodeSynopsis: document.querySelector('#hideEpisodeSynopsis').checked,
        hideGeneralSynopsis: document.querySelector('#hideGeneralSynopsis').checked
    });

    event.preventDefault();
}

document.querySelector('form').addEventListener('submit', saveOptions);
