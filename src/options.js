var hideInPlayerMenuStored = browser.storage.local.get('hideInPlayerMenu');
var hideInAppMenuStored = browser.storage.local.get('hideInAppMenu');

hideInPlayerMenuStored.then((response) => {
    document.querySelector('#hideInPlayerMenu').checked =
        response.hideInPlayerMenu;
});

hideInAppMenuStored.then((response) => {
    document.querySelector('#hideInAppMenu').checked = response.hideInAppMenu;
});

function saveOptions(event) {
    browser.storage.local.set({
        hideInPlayerMenu: document.querySelector('#hideInPlayerMenu').checked,
        hideInAppMenu: document.querySelector('#hideInPlayerMenu').checked
    });

    event.preventDefault();
}

document.querySelector('form').addEventListener('submit', saveOptions);
