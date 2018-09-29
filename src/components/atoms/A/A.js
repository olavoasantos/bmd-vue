export default {
  props: {
    download: {
      type: Boolean,
      description: 'Specifies that the target will be downloaded when a user clicks on the hyperlink',
    },
    href: {
      type: String,
      description: 'Specifies the URL of the page the link goes to',
    },
    hreflang: {
      type: String,
      description: 'Specifies the language of the linked document',
    },
    media: {
      type: String,
      description: 'Specifies what media/device the linked document is optimized for',
    },
    ping: {
      type: String,
      description: 'Specifies a space-separated list of URLs to which, when the link is followed, post requests with the body ping will be sent by the browser (in the background). Typically used for tracking.',
    },
    rel: {
      type: String,
      description: 'Specifies the relationship between the current document and the linked document',
    },
    target: {
      type: String,
      description: 'Specifies where to open the linked document',
    },
    type: {
      type: String,
      description: 'Specifies the media type of the linked document',
    },
    align: {
      type: String,
      description: 'Sets the text alignment for the link',
    },
  },
};
