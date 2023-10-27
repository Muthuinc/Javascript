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