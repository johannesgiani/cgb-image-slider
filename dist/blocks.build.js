!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),a=(n.n(l),n(3)),r=(n.n(a),n(4)),s=wp.i18n.__,c=wp.blocks.registerBlockType,i=wp.editor,u=i.MediaUpload,o=i.MediaUploadCheck,m=wp.components,p=m.Button,b=m.TextControl;c("cgb/block-image-slider",{title:s("Image Slider"),icon:"format-gallery",category:"common",attributes:{media:{type:"array",default:[]},buttonLeftClass:{type:"string",default:"fas fa-arrow-left"},buttonRightClass:{type:"string",default:"fas fa-arrow-right"}},edit:function(e){var t=function(t){e.setAttributes({media:t})};return wp.element.createElement("div",{className:e.className},wp.element.createElement("div",{className:"wp-block-cgb-block-image-slider__selected-images"},wp.element.createElement("strong",null,"Preview"),wp.element.createElement("p",null,e.attributes.media.length," Bilder ausgew\xe4hlt"),wp.element.createElement("p",null,e.attributes.media.map(function(e){return wp.element.createElement("img",{src:e.url})}))),wp.element.createElement("div",{className:"wp-block-cgb-block-image-slider__customize"},wp.element.createElement("strong",null,"Anpassen"),wp.element.createElement("p",null,wp.element.createElement(o,null,wp.element.createElement(u,{onSelect:t,multiple:!0,value:e.attributes.media.map(function(e){return e.id}),render:function(e){var t=e.open;return wp.element.createElement(p,{onClick:t},"Bilder verwalten / hochladen")}}))),wp.element.createElement(b,{label:"Button 'Zur\xfcck' CSS-Klassen",value:e.attributes.buttonLeftClass,onChange:function(t){return e.setAttributes({buttonLeftClass:t})}}),wp.element.createElement(b,{label:"Button 'Weiter' CSS-Klassen",value:e.attributes.buttonRightClass,onChange:function(t){return e.setAttributes({buttonRightClass:t})}})))},save:function(e){return wp.element.createElement(r.a,{className:e.className,medias:e.attributes.media,buttonLeftClass:e.attributes.buttonLeftClass,buttonRightClass:e.attributes.buttonRightClass})}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(e){var t=e.medias,n=e.className,l=e.buttonLeftClass,a=e.buttonRightClass,r=t.map(function(e){return wp.element.createElement("a",{href:e.url},wp.element.createElement("img",{src:e.url}))}),s=wp.element.createElement("button",null,wp.element.createElement("i",{className:l})),c=wp.element.createElement("button",null,wp.element.createElement("i",{className:a}));return wp.element.createElement("div",{className:n},wp.element.createElement("div",{class:"wp-block-cgb-block-image-slider__images"},r),wp.element.createElement("div",{class:"wp-block-cgb-block-image-slider__controls"},s,c))}t.a=l}]);