export function findById (array) {
  return array.reduce(function (acc, person) {
    acc[person.id] = person;
    return acc;
  }, {});
}