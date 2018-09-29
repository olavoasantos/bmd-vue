export default {
  props: {
    autofocus: {
      type: Boolean,
      default: false,
      description: 'Specifies that a button should automatically get focus when the page loads',
    },
    disabled: {
      type: Boolean,
      default: false,
      description: 'Specifies that a button should be disabled',
    },
    form: {
      type: String,
      description: 'Specifies one or more forms the button belongs to',
    },
    formaction: {
      type: String,
      description: 'Specifies where to send the form-data when a form is submitted. Only for type="submit"',
    },
    formenctype: {
      type: String,
      validation: value => [
        'text/plain',
        'multipart/form-data',
        'application/x-www-form-urlencoded',
      ].includes(value),
      description: 'Specifies how form-data should be encoded before sending it to a server. Only for type="submit"',
    },
    formmethod: {
      type: String,
      validation: value => [
        'get',
        'post',
      ].includes(value.toLowerCase()),
      description: 'Specifies how to send the form-data (which HTTP method to use). Only for type="submit"',
    },
    formnovalidate: {
      type: Boolean,
      description: 'Specifies that the form-data should not be validated on submission. Only for type="submit"',
    },
    formtarget: {
      type: String,
      description: 'Specifies where to display the response after submitting the form. Only for type="submit"',
    },
    name: {
      type: String,
      description: 'Specifies a name for the button',
    },
    type: {
      type: String,
      validation: value => [
        'reset',
        'submit',
        'button',
      ].includes(value),
      description: 'Specifies the type of button',
    },
    value: {
      type: String,
      description: 'Specifies an initial value for the button',
    },
    label: {
      type: String,
      description: 'Sets the button\'s label (gets overwritten by the element\'s children)',
    },
    color: {
      type: String,
      description: 'Sets the background color of the button',
    },
    colorHover: {
      type: String,
      description: 'Sets the background hover color of the button',
    },
    colorFocus: {
      type: String,
      description: 'Sets the background focus color of the button',
    },
    text: {
      type: String,
      description: 'Sets the text color of the button',
    },
    textFocus: {
      type: String,
      description: 'Sets the text focus color of the button',
    },
    textHover: {
      type: String,
      description: 'Sets the text hover color of the button',
    },
  },
};
