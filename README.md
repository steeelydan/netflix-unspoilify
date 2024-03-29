# netflix-unspoilify

Removes those nefarious Netflix pause descriptions. At least until they decide to rename some CSS tags.

A very simple Firefox extension, available for download at: https://addons.mozilla.org/en-US/firefox/addon/unspoilify-netflix/

![Before screenshot](screenshots/before.jpg?raw=true 'Before screenshot')

![After screenshot](screenshots/after.jpg?raw=true 'After screenshot')

![Player screenshot](screenshots/player.jpg?raw=true 'After screenshot')

## Development

Tested on Ubuntu 20.04.

### Create distribution:

-   If not already installed, install 7z: `sudo apt-get install p7zip-full`
-   Run the build script:
    ```bash
    sh dist.sh <version>
    ```

## Changelog

-   2.0.0: Fixed options saving. Episode synopses are treated differently from general overview synopses now.
-   1.2.1: New selector for pause spoiler
-   1.2.0: Fixed class names (they finally changed some!). Added ability to remove spoilers from the dashboard & episode lists.
-   1.1.0: Added the ability to remove the episode synopses from the player UI. Enabled per default, can be disabled in the addon preferences.

## Attributions

Extension logo: I modified the original emoji created by Twitter.
Source: https://commons.wikimedia.org/wiki/File:Twemoji_1f648.svg?uselang=en
License: https://creativecommons.org/licenses/by/4.0/deed.en
