// sort by key
const dynamicSort = (property: string) => {
  var sortOrder = 1;

  // sortOrder = 1 => ascending
  // sortOrder = -1 => descending

  if (property[0] === "-") {
    sortOrder = -1
    property = property.substr(1);
  }

  return (a: any, b: any): number => {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
};

export default dynamicSort;