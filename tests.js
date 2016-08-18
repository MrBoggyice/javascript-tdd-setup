'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/note.js');

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        note = new Note("Hello world", "Fortune");
        assert(note.author == "Fortune");
    })
})


describe("Notes application increments number of notes as notes are created", function() {
    it("increments the note list as notes are added", function() {

        noteapp = new NotesApplication("Fortune");
        assert(noteapp.notelist.length == 0);
        noteapp.create("Hello world", "Fortune");
        assert(noteapp.notelist.length == 1);
    })

    it("Ensures that created note is added into the notelist", function{

        noteapp = new NotesApplication();
        noteapp.create("I love Jesus", "Fortune");
        assert(noteapp.notelist.length == notelist.content);
    })

    it("Ensures that note id is generated by length of note list",
        function(){
           noteapp = new NotesApplication();
           noteapp.create("Hello world", "Fortune")
           assert(noteapp.notelist.length == notelist.id) 
        })


})