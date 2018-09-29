export default {
  props: {
    title: {
      type: String,
      description: 'Title of the card (overwritten by title slot)',
    },
    rounded: {
      type: Boolean,
      description: 'Sets card\'s border-radius',
    },
    color: {
      type: String,
      description: 'Sets the background color of the card',
    },
    text: {
      type: String,
      description: 'Sets the text color of the card',
    },
    border: {
      type: String,
      description: 'Sets the border color of the card',
    },
  },
};
