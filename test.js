'use strict';

const person = 
    {"firstname":"Mary", "lastname":"Smith", "age":50};

    console.log(person.firstname);
    console.log(person['firstname']);
    let key = 'firstname';
    console.log(person[key]);
    key ='lastname'
    console.log(person[key]);

    function search(key){
        console.log(person[key])
    }
    search('age');