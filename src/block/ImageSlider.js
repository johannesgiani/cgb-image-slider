export default function ImageSlider( { medias, className, buttonLeftClass, buttonRightClass } ) {

    const images = medias.map((media) => {
        return 	<a href={ media.url }>
                    <img src={ media.url }/>
                </a>
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
