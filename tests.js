'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {
    it("assigns id, content and author", 
        function() {
            var note = new Note(0, "Hello world", "Fortune");
            assert(note.author === "Fortune");
    })
})


describe("NotesApplication attributes and methods behaves properly",
    function() {
        it("increments the note list as notes are added", 
            function() {
                var notesapp = new NotesApplication();
                assert(notesapp.noteList.length == 0);
                notesapp.create("Hello world", "Fortune");
                assert(notesapp.noteList.length == 1);
            })

    it("Ensures that created note is added into the noteList", 
        function(){
            var notesapp = new NotesApplication();
            notesapp.create("I love Jesus", "Fortune");
            assert(notesapp.noteList[0].content === "I love Jesus");
        })

    it("Ensures note id is generated as length of note list increases",
        function(){
           var notesapp = new NotesApplication();
           notesapp.create("Hello world", "Fortune")
           assert(notesapp.noteList.length == notesapp.noteList[0].id + 1);
        })

    it("Ensures all available created notes are listed", 
        function(){
            var notesapp = new NotesApplication();
            notesapp.create("Hi there!", "Fortune");
            var list = notesapp.listNotes();
            assert(list.length === 1);
            assert(list[0].id === 0)
    })

    it("Ensures a given note id returns the content", 
        function(){
            var notesapp = new NotesApplication();
            notesapp.create("Hi there!", "Fortune");
            notesapp.create("Hi people", "Iyke");
            assert(notesapp.get(1) == "Hi people");
    })

    it("Ensures a search string returns the note content", 
        function(){
            var notesapp = new NotesApplication();
            notesapp.create("Hi there!", "Fortune");
            assert(notesapp.search("there!") == "Hi there!");
        })

    it("Ensures that a note is deleted", function(){
        var notesapp = new NotesApplication();
        notesapp.create("Hi there!", "Fortune");
        assert(notesapp.noteList.length == 1);
        assert(notesapp.delete(0) == "note deleted \n\n");
        assert(notesapp.noteList.length == 0);
    })


    it("Ensures that a note is edited",
        function(){
            var notesapp = new NotesApplication();
            notesapp.create("Hi there!", "Fortune");
            notesapp.edit(0, "I love Jesus");
            assert(notesapp.get(0) == "I love Jesus");
        })

    it("Ensures that user feedbacks are returned",
        function(){
            var notesapp = new NotesApplication();
            notesapp.create("Hi there!", "Fortune")
            assert(notesapp.get(3) == "no note with such id");
            assert(notesapp.search("We") == "not found");
            assert(notesapp.delete(1) == "There's no note with such id");
            assert(notesapp.edit(1, "I love Jesus") == "There's no such note");
        })


})