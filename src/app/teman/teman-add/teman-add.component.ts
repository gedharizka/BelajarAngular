import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output, Input } from '@angular/core';
import {Teman} from '../teman.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css']
})
export class TemanAddComponent implements OnInit {

  
  inputInfo:Teman = new Teman();
  @ViewChild('inputContact')inputContact:ElementRef;
  @ViewChild('inputNama')inputNama:ElementRef;
  @Output() temanAdded = new EventEmitter<Teman>();


  constructor() { }

  ngOnInit() {
  }

  tambahTeman(inputEmail: HTMLInputElement){
    // this.temanAdded.emit(this.inputInfo);
    console.log(this.inputInfo);
    console.log(inputEmail.value);
  
    console.log(this.inputContact.nativeElement.value);
    this.temanAdded.emit(this.inputInfo);
    this.inputInfo= new Teman();
  }

}
