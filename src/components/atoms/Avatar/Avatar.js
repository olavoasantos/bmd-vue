import icon from '@/components/nucleus/filters/icon';
import initials from '@/components/nucleus/filters/initials';

export default {
  props: {
    name: {
      type: String,
      description: 'Name of the avatar',
    },
    source: {
      type: String,
      description: 'URL of the image to be displayed',
    },
    icon: {
      type: String,
      description: 'Name of the icon',
    },
    size: {
      type: String,
      default: 'md',
      validation: value => [
        'sm', 'md', 'lg',
      ].includes(value),
      description: 'Avatar size',
    },
    color: {
      type: String,
      default: 'grey-light',
      description: 'Avatar color',
    },
    text: {
      type: String,
      default: 'white',
      description: 'Avatar text color',
    },
    initials: {
      type: Boolean,
      default: false,
      description: 'Should display the name\'s initials',
    },
    squared: {
      type: Boolean,
      default: false,
      description: 'Defines if the avatar should be round',
    },
    gender: {
      type: String,
      default: 'male',
      validation: value => [
        'male', 'female',
      ].includes(value),
      description: 'Defines the gender of the silhouette',
    },
  },
  filters: {
    icon,
    initials,
  },
  computed: {
    bgSource() {
      if (this.source) {
        return `background-image: url('${this.source}')`;
      }

      return '';
    },
  },
};
