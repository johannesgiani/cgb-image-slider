npm run build

commit=$(git log --pretty=format:'%h' -n 1)

tar -czvf cgb-image-slider-$commit.tar \
    src/init.php \
    src/ux.js \
    dist \
    plugin.php \
    LICENSE
    