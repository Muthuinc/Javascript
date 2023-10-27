const _getpetname = prompt('enter the dog name');
const petname = ['puppy', 'tommy', 'july', 'jimmy'];
const petowner = ['jane', 'timo', 'jarvi', 'tina'];
class petdetails {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner
    }
    get details() {
        return 'pet name is ' + this.name + ' pet owner is ' + this.owner
    }
}
for (i = 0; i < _getpetname.length; i++) {
    if (_getpetname === petname[i]) {
        const disdet = new petdetails(petname[i], petowner[i])
        console.log(disdet.details)
        break;
    } else if (i === _getpetname.length - 1) {
        console.log('pet ' + _getpetname + ' is not registered here')
    }
}
// Output:
// It prompts the user to input a value. here Dog name.
// It output looks like this pet name is jimmy pet owner is tina.
// if the pet name is not found in the registry. you will get an response too.