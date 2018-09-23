# Card

## API

```jsx
// No padding (default slot)
<Card>
  <div>
    Card content
  </div>
</Card>

// Title and body (title slot & body slot)
<Card>
  <div slot="title">
    Card title
  </div>
  <div slot="body">
    Card body content
  </div>
</Card>
// -- OR --
<Card tilte="Card title">
  <div slot="body">
    Card body content
  </div>
</Card>
```

## Props

- `title`:
  type: String,
  description: 'Title of the card (overwritten by title slot)',

- `rounded`:
  type: Boolean,
  description: 'Sets card\'s border-radius',

- `color`:
  type: String,
  description: 'Sets the background color of the card',

- `text`:
  type: String,
  description: 'Sets the text color of the card',

- `border`:
  type: String,
  description: 'Sets the border color of the card',
