const people = ['neko', 'inu', 'usagi'];
const ages = [9, 8, 7];

//console.log(people);

// to export a single thing
//module.exports = people;

//multiple export
// what we are doing here is we are writing just people 
//instead of people: people as shown in the example after this
// and node automatically recognises that you want to export
//people as people itself  if you just type people
module.exports = {
    people,ages
};

//multiple exports with changed names
//module.exports = {
//    Names: people,
//    Experience: ages
//};