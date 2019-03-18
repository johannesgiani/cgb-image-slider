(function($) {
    $(document).ready(function() {
        const imageSliders = document.querySelectorAll('.wp-block-cgb-block-image-slider');
        Array.prototype.forEach.call(imageSliders, function(imageSlider) {

            const imagesContainer = imageSlider.querySelector('.wp-block-cgb-block-image-slider__images');
            const controlsContainer = imageSlider.querySelector('.wp-block-cgb-block-image-slider__controls');
            const leftButton = controlsContainer.querySelectorAll('button')[0];
            const rightButton = controlsContainer.querySelectorAll('button')[1];

            const numItems = imagesContainer.querySelectorAll('div').length;

            leftButton.addEventListener('click', onClickLeft); 
            rightButton.addEventListener('click', onClickRight); 

            function onClickLeft() {
                const currentIndex = getCurrentItemIndex();
                if (currentIndex > 0) {
                    scrollIntoView(currentIndex - 1);
                }
            }
        
            function onClickRight() {
                const currentIndex = getCurrentItemIndex();
                if (currentIndex < numItems - 1) {
                    scrollIntoView(currentIndex + 1);
                }
            }
        
            function scrollIntoView(i) {
                const item = imagesContainer.querySelectorAll('div')[i];
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
            }
        
            function getCurrentItemIndex() {
                const scrollLeft = imagesContainer.scrollLeft;
                if (scrollLeft > 0) {
                    const totalWidth = imagesContainer.offsetWidth * numItems;
                    return Math.floor(imagesContainer.scrollLeft / totalWidth * numItems);
                }
                return 0;
            }
        });
    });
})(jQuery);