var Person, action, array, b1, b2, b3, book, car, cda, element, greet, i, index, log, message, newRange, normalize, object, prime, property, range, user, value, webd, _i, _j, _k, _l, _len, _m, _n, _ref, _ref1,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

range.slice(-3, 8);

newRange = range.slice(0);


/*объектные литералы */

user = {
  name: "dsafd",
  age: 24,
  skills: {
    html: 10
  }
};


/* логические */

first && second;

true || false;

first && second;

true || false;

!isREady || !isOnline;


/* операторы сравнения */

a === b;

a !== b;

a !== b;

a === !b;

(10 <= i && i > 7);

((12 > i && i > 2) && 2 < 1);


/* присваивание */

_ref = [1, 2, 3], b1 = _ref[0], b2 = _ref[1], b3 = _ref[2];

car = {
  make: "porshe",
  s: 12,
  as: true || false
};

user = {
  name: "petr",
  age: 20,
  lastVisit: Date.now()
};

"age" in user;

range = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

cda = __indexOf.call(range, 14) >= 0;

country === "Russia" || country === "USA" || country === "UK" || country === "Germany";

book = dsafdasf;

if (book != null) {
  open(book);
}

if (book !== null) {
  open(book);
}

if (book != null) {
  if (typeof open === "function") {
    open(book);
  }
}

object = {};

if (object.speed == null) {
  object.speed = 100;
}

this.age = (_ref1 = config.age) != null ? _ref1 : 10;

object.speed = object.speed || 100;

object.speed || (object.speed = 100);

greet = function(name) {
  return "hello, " + name + "!";
};

greet = function() {
  function1();
  fund;
  fund();
  fund;
  if (a) {
    return b;
  } else {
    return c;
  }
};

greet = function(name) {
  asd();
  return function2();
  fund;
  return "hello";
};

greet = function(name) {
  sadas();
};

greet = function(name) {
  if (name == null) {
    name = "sorax";
  }
};

normalize = function() {
  var lenght, vectors;
  lenght = arguments[0], vectors = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
};

show(update(object));

show(update(object, 10, 20), "fast");

show();

show();

a + b;

a + b;

a(+b);

(function() {
  return funcName();
})();

if (isREady) {
  activate(somthing);
  if (!isFull) {
    append(somthing);
  }
} else {
  prepare();
}

if (isReady) {
  activate(somthing);
}

if (isReady) {
  activate(somthing);
}

if (!isReady) {
  prepare();
}

if (!isReady) {
  prepare();
}

action = mode === "idle" ? "sleep" : "wander";

show(message ? m2 : m3);

switch (state) {
  case 0:
    message = "ddsafdasfsd";
    break;
  case 1:
    message = "ddsafdasfsd";
    break;
  default:
    message = "unknown state";
}

message = (function() {
  switch (state) {
    case 0:
      return "ddsafdasfsd";
    case 1:
      return "ddsafdasfsd";
    default:
      return "unknown state";
  }
})();

while (isReady) {
  somthing();
}

while (isReady) {
  somthing();
}

while (isReady) {
  somthing();
}

while (!isReady) {
  somthing();
}

while (!isReady) {
  prepare();
}

for (i = _i = 0; _i <= 10; i = ++_i) {
  update(i);
}

for (i = _j = 0; _j <= 10; i = ++_j) {
  update(i);
}

for (i = _k = 0; _k <= 10; i = ++_k) {
  update(i);
}

for (i = _l = 0; _l <= 10; i = _l += 4) {
  update(i);
}

for (i = _m = 0; _m <= 100; i = _m += 2) {
  if (isPrime(i)) {
    onsole.log(i);
  }
}

prime = (function() {
  var _n, _results;
  _results = [];
  for (i = _n = 0; _n <= 100; i = ++_n) {
    if (isPrime(i)) {
      _results.push(i);
    }
  }
  return _results;
})();

for (index = _n = 0, _len = array.length; _n < _len; index = ++_n) {
  element = array[index];
  if (__indexOf.call(rightElements, element) >= 0) {
    remove(index);
  }
}

for (property in object) {
  console.log(property);
}

for (property in object) {
  value = object[property];
  console.log(value);
}


/*  //------- ЛОГ ХЕЛПЕР ----------
  var array = {};
  function log (valueName,value){
    array[valueName] = value;
    $('.mi-status').clone();
    $('.mi-status').html("");
    for (var element in array) {
    $('.mi-status').append(element+": "+array[element]+'<br>');} }
 */

array = {};

log = function(valueName, value) {
  array = {
    valueName: value
  };
  $('.mi-status').clone();
  $('.mi-status').html("");
  for (element in array) {
    $('.mi-status').append(element + ": " + array[element] + '<br>');
  }
};

Person = (function() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.getInfo = function() {
    return "Name: " + this.name + ", Age: " + this.age;
  };

  Person.myStaticFunc = function() {
    return somthing();
  };

  Person.myStaticNum = 123456;

  return Person;

})();

webd = (function(_super) {
  __extends(webd, _super);

  function webd() {
    return webd.__super__.constructor.apply(this, arguments);
  }

  return webd;

})(Person);


/*
($(document).ready  -> 
  more993 : ($(document).width() >= 975)


  )
 */

$(document).ready((function(_this) {
  return function() {
    var Nav;
    return Nav = (function() {
      function Nav(elements) {
        this.elements = elements;
      }

      return Nav;

    })();
  };
})(this));

//# sourceMappingURL=tests.map