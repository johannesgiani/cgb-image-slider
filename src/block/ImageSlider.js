
export default function ImageSlider( { className, imageSliderProperties } ) {
    const { buttonLeftClass, buttonRightClass, imageStyles, imageUrls } = imageSliderProperties;
    const images = imageUrls.map((url) => {
        return 	<div>
                    <img src={ url } style={ imageStyles }/>
                </div>
        }
    );

    const leftButton = <button><i className={ buttonLeftClass }></i></button>;
    
    const rightButton = <button><i className={ buttonRightClass }></i></button>;

    return (
        <div className={ className }>
            <div class="wp-block-cgb-block-image-slider__images">
                { images }
            </div>
            <div class="wp-block-cgb-block-image-slider__controls">
                { leftButton }
                { rightButton }
            </div>
        </div>
    )
}
