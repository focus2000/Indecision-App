var nameVar = 'kenneth';
var nameVar = 'mike'
console.log('namevar', nameVar);



let nameLet = 'john';
nameLet = 'grace';
console.log('nameLet', nameLet);


const nameConst = 'frank';
console.log('nameConst', nameConst)


function getPetName() {
  const petName = 'hal';
  return petName;
}
const petName = getPetName();
console.log(petName)

//Block level scooping

var fullName = 'Focus Empire';
if (fullName) {
  var firstName = fullName.split(' ')[0]
  console.log(firstName)

}