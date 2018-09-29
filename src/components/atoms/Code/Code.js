import hljs from 'highlight.js';
import php from 'highlight.js/lib/languages/php';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';

export default {
  props: {
    language: {
      type: String,
      description: 'Set the language for the script',
    },
  },

  mounted() {
    hljs.registerLanguage('php', php);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(this.$el.children[0]);
  },
};
