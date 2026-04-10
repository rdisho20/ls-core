function outer() {
  function getMotto() {
    return motto;
  }

  function getRole() {
    return 'User';
  }

  var name = undefined;
  let motto;

  console.log(`2: ${name}`);
  console.log(`3: ${getMotto()}`);

  name = 'Alice';
  motto = 'Carpe Diem';

  console.log(`4: ${name}`);
  return getRole();
}