# Biomimetic Design Kit

## Nucleus

These are the most basic kind of elements. Though they don't have any visual representation, these serve as basis to define properties of the more complex structures. On developer terms, these are the CSS variables, animations keyframes, resets and functions.

### Proposed components

- [ ] Animations
- [x] Reset
- [x] Mixins
- [x] Functions
- [x] Variables
- Filters
  - [x] Icon
  - [x] Initials

## Atoms

These are composed of the nucleus components, having their particular visual marking, but don't have any actual functionality by themselves. Although they don't have a specific functionality, they have types and states (active, inactive, etc) which can change their appearance.

### Proposed components

- [x] [Avatar](https://github.com/olavoasantos/bmd-vue/tree/master/src/components/atoms/Avatar)
- [x] [Badge](https://github.com/olavoasantos/bmd-vue/tree/master/src/components/atoms/Badge)
- [x] [Button](https://github.com/olavoasantos/bmd-vue/tree/master/src/components/atoms/Button)
- [ ] Card
- [ ] Checkbox
- [ ] Code
- [ ] Col
- [ ] Container
- [ ] Display
- [ ] Divisor
- [ ] Dropdown
- [ ] H1-H5
- [ ] Icon
- [ ] Image
- [ ] Input
- [ ] Label
- [ ] List
- [ ] Loader
- [ ] Message
- [ ] Modal (position: center, top, right, bottom, left)
- [ ] Progress
- [ ] Quote
- [ ] Radio
- [ ] Row
- [ ] Small
- [ ] Steps
- [ ] Switch
- [ ] Tab
- [ ] Table
- [ ] Tag
- [ ] Text
- [ ] Textarea
- [ ] Timeline
- [ ] Tooltip

## Molecules

These are composed by one or more atoms and have one single responsibility.

### Proposed components

- [ ] Avatar list
- [ ] Calendar
- [ ] Carousel
- [ ] Field elements
- [ ] File upload
- [ ] Multiple select
- [ ] Notifications
- [ ] Tabs

## Organelles

These are composed of one or more atoms and molecules. These have more than one related responsibility.

### Proposed components

- [ ] Autocomplete
- [ ] Drag and drop suite
- [ ] Form
- [ ] Graphs
- [ ] Maps
- [ ] Menu (MenuItem)
- [ ] Navbar
- [ ] Search

## Cells

These are composed of one or more organelles, molecules and atoms. These group and coordenate responsibilities which are related to a bigger purpose (e.g. modules).

### Proposed components

- [ ] Data table
- [ ] Schedule (Year, Month, Week, Day, Event)

## Tissues

These group together all the other categories. These are the pages and layouts of the application.
