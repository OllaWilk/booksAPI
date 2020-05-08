module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';

  const splitFullName = fullName.split(' ');
  const [ firstName, lastName ] = splitFullName;
  if(!firstName || !lastName || splitFullName.length > 2) return 'Error';

  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' +lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
