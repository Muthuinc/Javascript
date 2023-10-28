const _getpetname = prompt('Enter the dog name');
const _petdetails = [{ name: 'Tommy', owner: 'john' }, { name: "jimmy", owner: 'michel' }];
const _output = _petdetails.filter(pet => pet.name === _getpetname)
if (_output.length > 0){
    console.log('pet name is '+ _output[0].name, "and owner is " + _output[0].owner )
} else {
    console.log("pet is registered here")
}
console.log(_output.name, _output.owner)
