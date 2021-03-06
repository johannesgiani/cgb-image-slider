/**
 * BLOCK: image-slider
 *
 */

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck } = wp.editor;
const { Button, TextControl } = wp.components;
import ImageSlider from './ImageSlider';
import ImageSliderProperties from './ImageSliderProperties';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-image-slider', {
	title: __( 'Image Slider' ),
	icon: 'format-gallery',
	category: 'common',
	attributes : {
		media: {
			type: 'array',
			default: [],
		},
		buttonLeftClass: {
			type: 'string',
			default: 'fas fa-arrow-left' 
		},
		buttonRightClass: {
			type: 'string',
			default: 'fas fa-arrow-right' 
		},
		imageStyles: {
			type: 'string',
			default: 'max-height: 30rem;' 
		},
	},

	edit: function( props ) {

		/** TODO
		 * 	- i18n
		 * 	- make images sortable
		 */

		const onSelect = (media) => {
			props.setAttributes({media});
		}

		return (
			<div className={ props.className }>
				<div className="wp-block-cgb-block-image-slider__selected-images">
					<strong>Preview</strong>
					<p>
						{
							props.attributes.media.map((media) =>
							<img src={media.url}/>
							)
						}
					</p>
				</div>
				<div className="wp-block-cgb-block-image-slider__customize">
					<strong>Anpassen</strong>
					<p>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelect }
								multiple
								value= { props.attributes.media.map(media => media.id) }
								render={ ( { open } ) => (
									<Button onClick={ open }>
										Bilder verwalten / hochladen
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</p>
					<TextControl
						label="Button 'Zurück' CSS-Klassen"
						value={ props.attributes.buttonLeftClass }
						onChange={ ( buttonLeftClass ) => props.setAttributes( { buttonLeftClass } ) }
					/>
					<TextControl
						label="Button 'Weiter' CSS-Klassen"
						value={ props.attributes.buttonRightClass }
						onChange={ ( buttonRightClass ) => props.setAttributes( { buttonRightClass } ) }
					/>
					<TextControl
						label="Bild Style-Attribute"
						value={ props.attributes.imageStyles }
						onChange={ ( imageStyles ) => props.setAttributes( { imageStyles } ) }
					/>
				</div>
			</div>
		);
	},

	save: function( props ) {
		const imageUrls = [];
		props.attributes.media.map((media) => {
			imageUrls.push(media.url);
		});

		const imageSliderProperties = new ImageSliderProperties(
			imageUrls,
			props.attributes.imageStyles,
			props.attributes.buttonLeftClass, 
			props.attributes.buttonRightClass);

		return (
			<ImageSlider
				className={ props.className }
				imageSliderProperties={ imageSliderProperties }
			/>
		);
	},
} );
