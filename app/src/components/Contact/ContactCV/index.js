import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

const ContactCV = () => (
  <div id="contact-cv">
    <ImageZoom
      image={{
          src: 'Image-portefolio/Cv-kgz-online.jpg',
          alt: 'Cv kevin gomez',
          className: 'img-cv',
          style: { width: '100%', height: '100%' },
        }}
      zoomImage={{
          src: 'Image-portefolio/Cv-kgz-online.jpg',
          alt: 'Cv kevin gomez',
        }}
    />
  </div>
);

export default ContactCV;
