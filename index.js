// Write your solution in this file!

  const employee = {
    name: "John",
    streetAddress: "6002 Goodfellow dr",
  };

  function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { ...obj, [key]: value,};
  }

 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
 }

 function deleteFromEmployeeByKey(obj, key) {
  delete obj.key;
  return { ...obj[key]};
 }

 function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
 }