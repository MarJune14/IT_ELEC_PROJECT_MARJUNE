const add = require('./add');
const read = require('./read');
const update = require('./update');
const write = require('./write');

//get user input 
const data = process.argv

var note = {}

if(data[2] == 'add') {
    //build object
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    //get old note value
    var oldNote = read()
    //add note to note.txt
    add(note, oldNote)
}
if(data[2] =='read') {
    //import present
    const present = require('./present');

    present(read());
}
if(data[2] =='delete') {
    let id = data[3];
    let oldNote = read();

    //import delete
    const del = require('./del');
    del(id,oldNote);

    console.log(read());
}
if(data[2] == 'update') {
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }

    var oldNote = read()
    update(note, oldNote);

    console.log(read());
}