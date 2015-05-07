angular.module('starter.services', [])
  .factory("People", function(filterFilter) {
    return {
      generateId: function() {
        return new Date().getTime();
      },
      create: function(person) {
        var people = this.list();
        person.id = this.generateId();
        people.push(person);
        localStorage.setItem("people", JSON.stringify(people));
      },
      list: function() {
        return localStorage.getItem("people") ? JSON.parse(localStorage.getItem("people")) : [];
      },
      find: function(id) {
        var person = filterFilter(this.list(), {id: id})[0];
        if (person.bornDate) {
          person.bornDate = new Date(person.bornDate);
        }
        return person;
      },
      update: function(id, person) {
        console.log(person);
        var people = this.list();

        var index = -1;
        for (var i = 0; index < 0 && i < people.length; i++) {
          if (people[i].id == id) {
            index = i;
          }
        };

        people[index] = person;
        localStorage.setItem("people", JSON.stringify(people));
      }
    };
  });