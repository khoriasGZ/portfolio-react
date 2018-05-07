/*
 * Npm import
 */
import React from 'react';

/**
 * local import
 */
import ContactCV from 'src/components/Contact/ContactCV';
import ContactForm from 'src/components/Contact/ContactForm';
import ContactRS from 'src/components/Contact/ContactRS';

const Contact = () => (
  <div id="contact">
    <ContactCV />
    <ContactForm />
    <ContactRS />
  </div>
);

export default Contact;
