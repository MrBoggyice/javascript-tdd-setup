'use strict'
var Note = require('./notes.js');

// NotesApplication class
module.exports = function() {
	this.noteList = [];

	/**
	 * Creates and saves note in the list
	 * @function
	 * @param {String} note_content - Note content
	 * @param {String} author - Note author
	 */
	this.create = function(note_content, author){
		var content = new Note(this.noteList.length, note_content, author);
		this.noteList.push(content);
	}

	/**
	 * Lists all notes
	 * @function
	 */
	this.listNotes = function(){
		return this.noteList;
	}

	/**
	 * Gets a specific note with a given ID
	 * @function
	 * @param {Number} note_id - Note ID
	 */
	this.get = function(note_id){
		for(var i = 0; i < this.noteList.length; i++){
			if(note_id === this.noteList[i].id){
				return this.noteList[i].content;
			}
		}
		return 'no note with such id';

	}

	/*
	 * Searches the noteList with a given String
	 * @function
	 * @param {String} search_text - Search Sring
	 */
	this.search = function(search_text){
		
		for(var i = 0; i < this.noteList.length; i++){
			var note = this.noteList[i].content;
			if(note.search(search_text) !== -1){
				return this.noteList[i].content;
			}
		}
		return "not found";

	}

	/**
	 * Deletes a specific note with a given ID
	 * @function
	 * @param {Number} note_id - Note ID
	 */
	this.delete = function(note_id){
		for(var i = 0; i < this.noteList.length; i++){
			if(note_id === this.noteList[i].id){
				this.noteList.splice(this.noteList[i].id, 1);
				return "note deleted \n\n";
			}
		}
		return "There's no note with such id";
	}
	
	/**
	 * Edits a note content
	 * @function
	 * @param {Number} note_id - Note ID
	 * @param {String} new_content - New content
	 */
	this.edit = function(note_id, new_content){
		for(var i = 0; i < this.noteList.length; i++){
			if(note_id === this.noteList[i].id){
				this.noteList[i].content = new_content;
				return "content edited";
			}
		}
		return "There's no such note";
	}

}