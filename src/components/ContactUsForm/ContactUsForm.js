import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import styles from './ContactUsForm.module.css';

// const  { DOM: { textarea } } = React;
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={styles.Field}>
    {
      label === 'Message' ?
      <textarea className={styles.Message} {...input} placeholder={label} type={type} />
      :
      <input className={styles.Regular} {...input} placeholder={label} type={type} />
    }

    {touched && error && <span>{error}</span>}
  </div>
)

let ContactUsForm = props => {
  const { handleSubmit } = props;

  const submit = (values) => {
    let error = {};
    let isError = false;

    if(!('name' in values)) {
      error.name = 'Required';
      isError = true;
    }

    if(!('subject' in values)) {
      error.subject = 'Required';
      isError = true;
    }

    if(!('program' in values)) {
      error.program = 'Required';
      isError = true;
    }
    
    if(!('yearOfStudy' in values)) {
      error.yearOfStudy = 'Required';
      isError = true;
    }

    if(!('email' in values)) {
      error.email = 'Required';
      isError = true;
    }

    if(!('message' in values)) {
      error.message = 'Required';
      isError = true;
    }

    if(isError) {
      throw new SubmissionError(error);
    } else {
      console.log('Valid Submission');
      console.log(values);
    }
  }

  return (
    <div className={styles.FormContainer} id='ContactUs'>
      <form onSubmit={handleSubmit(submit)} className={styles.Form}>
        <div className={styles.Header}>
          <p>Contact Us</p>
        </div>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field
          name="subject"
          type="text"
          component={renderField}
          label="Subject"
        />
        <Field
          name="message"
          type="textarea"
          component={renderField}
          label="Message"
        />
        {props.error && <strong>{props.error}</strong>}
        <button className={styles.SubmitButton} type="submit" disabled={props.submitting}>
          Submit
        </button>
      </form>
    </div>
    
  )
}

ContactUsForm = reduxForm({
  // a unique name for the form
  form: 'ContactUsForm'
})(ContactUsForm)


export default ContactUsForm;