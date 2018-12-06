/**
 * Ways to create javascript object
 */

// JS Object notation

var person = {
    name: "Gagan",
    address: {
        street: "Lutyens' Delhi ",
        city: "New Delhi",
        country: "India"
    }
};


// Factory function

var Person = function personFactory(name, street, city, country) {

    var person = {
        name: name,
        address: {
            street: street,
            city: city,
            country: country
        }
    };
    return Object.create(person);
};

// constructor function

var PersonClass = function (name, street, city, country) {
    this.name = name;
    this.address = {
        street: street,
        city: city,
        country: country
    };
};