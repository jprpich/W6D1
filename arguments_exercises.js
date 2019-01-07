// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }




// Assessment prep!
Function.prototype.myBind = function(context, ...bindArgs) {
  return (...applyArgs) => {
    return this.apply(context, bindArgs.concat(applyArgs));
  };
};





// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// console.log(markov.says("meow", "Ned"));
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// console.log(markov.says.myBind(pavlov, ["meow", "Kush"])());
// // Pavlov says meow to Kush!
// // true





function sum(...nums){
  return nums.reduce(function(accu, currentValue){
    console.log(accu);
    return accu + currentValue;
  });
}

// console.log(sum(1,2,3));



function curriedSum(numArgs) {
  let numbers = [];

    function _curriedSum(num) {
      numbers.push(num);
      if (numbers.length === numArgs) {
        return numbers.reduce( function(acc, current_value) {
          return acc + current_value;
        });
      } else {
        return _curriedSum;
      }
    }
  return _curriedSum;
}


// NO
Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const func = this;
  function _myCurry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return _myCurry;
    }
  }
  return _myCurry;
};


// assessment prep version!
Function.prototype.curry2 = function (numArgs) {
  const args = [];
  const _myCurry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      // spreading the array into individual arguments
      return this(...args);
    } else {
      return _myCurry;
    }
  };
  return _myCurry;
};

// an example of a way to use curry2!
// function sum(el1, el2){
//   return el1 + el2;
// }

// sum.curry2(3)