# cgb-image-slider

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## Requirements
* Wordpress 5+
* jQuery (only used to polyfill `document.ready`)
* Fontsawesome Free (to resolve the default button classes)
* tar (to create the plugin archive)
* docker (for development)

## Setup in Wordpress
* Use bunde script to bundle the plugin `./bundle.sh`
* Extract in `wp-content/plugins` 

## Development
* Run development task with watch
    * `npm run start`
* Start wordpress & mysql via docker
    * `docker-compose up -d`
    *  Create `wp-content/uploads` inside wordpress container
    * `chown www-data:www-data uploads` to be able to upload files

## Known Issues
* Block editing in german language only

## Backlog
* Make more things configurable
    * height of slider/images
* a11y
* i18n for block editing
* Move configuration to a sidebar
* Get rid of jQuery
