//1)
function makeAccount (startingBalance){
  let total = startingBalance;
  return {
    add(deposit){
      total += deposit;
      return `${deposit} added`;
    },
    subtract(withdrawl){
      total -=  withdrawl;
      return `${withdrawl} subtracted`;
    },
    checkBalance(){
      return total;
    }
  };
}

//2)
function SavingsAccount (name){
  let total = 0;
  this.name = name;
  this.showBalance = function(){
    return `$${total}`;
  };
  this.depositFunds = function(num){
    if(num<0){
      return 'Please include a deposit amount that is greater than 0';
    }
    total += num;
    return `$${num} Deposited`;
  };
  this.withdrawFunds = function(num){
    if (num>total){
      return 'Insufficient Funds';
    }
    total -= num;
    return `$${num} withdrawn`;
  };
}


//3)
function Phone (phoneNum){
  this.contacts = [];
  this.addContact = function(contact){
    if(!contact.hasOwnProperty('name') || !contact.hasOwnProperty('phoneNumber')){
      return 'Invalid';
    }else if (contact.phoneNumber.length < 10){
      return 'Invalid';
    }
    this.contacts.push(contact);
    return `${contact.name} added.`;
  };
  this.removeContact = function(name){
    let foundContact = this.contacts.find((contact) => contact.name === name);
      if (foundContact){
        let indexofCon = this.contacts.indexOf(foundContact);
        this.contacts.splice(indexofCon, 1);
        return `${name} removed.`;
      }
      return 'Contact not found.';
    };
    this.call = function(search){
      let foundContact = this.contacts.find((contact)=> contact.name === search || contact.phoneNumber === search);
      if (foundContact){
        let indexofCon = this.contacts.indexOf(foundContact);
        let name = this.contacts[indexofCon].name;
        return `Calling ${name}...`;
      }else if(!foundContact){
        if(search.match(/\d/g) && (search.length === 10)){
          return `Calling ${search}`;
        }else if(search.match(/\d/g) && search.length < 10){
          return `Invalid`;
        }
        return 'Contact not found.';
      }
    };
}

//4)
function AppleiPhone(model) {
  this.model = model;
  this.sendiMessage = function(phone, text){
    if (phone )
    return 'Message sent';
  }
}

//5)
class Person {
  constructor(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  
  fullName(){
    return this.firstName + this.lastName;
  }
  
  communicate(){
    return 'Hello';
  }
  
  eat(){
    return 'munch munch';
  }
  
  sleep(){
    return 'Zzzzz';
  }
}

class Student {
  constructor(degree){
    this.degree = degree;
  }
  
  study(){
    return 'help my head';
  }
}


module.exports = {
   makeAccount,
   SavingsAccount,
   Phone
  // AppleiPhone
  // Person
  // Student
  // GraduateStudent
  // Professor
  // Doctor
};
