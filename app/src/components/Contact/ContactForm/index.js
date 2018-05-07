import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = () => (
  <div id="contact-form">
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="exemple@gmail.com" />
      </FormGroup>
    </Form>
  </div>
);

export default ContactForm;
