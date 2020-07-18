var hideInPlayerMenuStored = browser.storage.local.get('hideInPlayerMenu');

hideInPlayerMenuStored.then((response) => {
    document.querySelector('#hideInPlayerMenu').checked =
        response.hideInPlayerMenu;
});

function saveOptions(event) {
    browser.storage.local.set({
        hideInPlayerMenu: document.querySelector('#hideInPlayerMenu').checked
    });

    event.preventDefault();
}

document.querySelector('form').addEventListener('submit', saveOptions);
