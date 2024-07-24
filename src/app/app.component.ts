import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

enum noteStatus{
  POST= "posted",
  EDIT="editing",

}

interface Note{
  id: number;
  title:string;
  description:string;
  color: string;
  status: noteStatus

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  noteList : Note[] = [];


  newTitle = "";
  newDescription = "";
  backgroundColor: string = "";



  addNote() {

    const newNote : Note = {
      id: this.noteList.length + 1,
      title: this.newTitle,
      description: this.newDescription,
      color: this.backgroundColor,
      status: noteStatus.POST,


    }


    this.noteList.push(newNote);

  }



  removeNote(note: Note) {

      this.noteList = this.noteList.filter(currentNote => currentNote.id !== note.id);
    }

  setColorToBlanch() {
    this.backgroundColor = "background-color: blanchedalmond"
  }

  setColorToKhaki() {
    this.backgroundColor = "background-color: khaki";
  }

  setColorToGreen() {
    this.backgroundColor = "background-color: greenyellow";
  }

  setColorToAqua() {
    this.backgroundColor = "background-color: aquamarine";
  }
changeStatus(note: Note, newStatus: noteStatus) {
    note.status = newStatus;
}

  protected readonly noteStatus = noteStatus;
}
