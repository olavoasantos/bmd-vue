# Avatar

## API

```jsx
<Avatar
  squared // Should be squared
  initials // Should display name initials
  size="sm|md|lg"
  gender="male|female"
  icon="name-of-the-icon"
  source="http://url.to/image"
  text="color-variant-for-text"
  name="Name Associated With Avatar"
  color="color-variant-for-background"
/>
```

## Props

- name
  - type: `String`
  - description: Name of the avatar

- source
  - type: `String`
  - description: URL of the image to be displayed

- icon
  - type: `String`
  - description: Name of the icon

- size
  - type: `String`
  - default: `md`
  - oneOf: `['sm', 'md', 'lg']`
  - description: Avatar size

- color
  - type: `String`
  - default: `grey-light`
  - description: Avatar color

- text
  - type: `String`
  - default: `white`
  - description: Avatar text color

- initials
  - type: `Boolean`
  - default: `false`
  - description: Should display the name's initials

- squared
  - type: `Boolean`
  - default: `false`
  - description: Defines if the avatar should be round

- gender
  - type: `String`
  - default: 'male'
  - oneOf: `['male', 'female']`
  - description: 'Defines the gender of the silhouette'
