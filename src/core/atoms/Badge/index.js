export default {
  props: {
    label: {
      type: String,
      description: 'Sets the badge\'s label (gets overwritten by the element\'s children)',
    },
    color: {
      type: String,
      default: 'grey-light',
      description: 'Sets the background color of the badge',
    },
    text: {
      type: String,
      default: 'black',
      description: 'Sets the text color of the badge',
    },
  },

  data() {
    return {};
  },

  methods: {},

  computed: {},
};
