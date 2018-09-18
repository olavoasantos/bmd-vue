export default (value, number = 2) => value.split(' ').reduce((initials, word) => {
  let newInitials = initials;
  if (newInitials.length < number) {
    newInitials += word.charAt(0).toUpperCase();
  }

  return newInitials;
}, '');
