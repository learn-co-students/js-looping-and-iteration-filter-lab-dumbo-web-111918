// Code your solution in this file
matchName = (drivers, str) => (
  drivers.filter( e => e.name === str)
  );

findMatching = (drivers, str) => (
  drivers.filter(e => e.toLowerCase() === str.toLowerCase() )
  );

fuzzyMatch = (drivers, str) => (
  drivers.filter(e => e.startsWith(str) )
  );
