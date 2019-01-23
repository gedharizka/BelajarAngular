import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output, Input } from '@angular/core';
import {Teman} from '../teman.model';
import { from } from 'rxjs';
import { TemansService } from '../temans.service';

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers:[TemansService]
})
export class TemanAddComponent implements OnInit {

  inputInfo:Teman = new Teman();
  @ViewChild('inputContact')inputContact:ElementRef;
  @ViewChild('inputNama')inputNama:ElementRef;

  @Output() temanAdded = new EventEmitter<Teman>();

  @Input() temanChildLteman: Teman;
  @Input() temanEditParent: Teman;

  // inputInfo: Teman = new Teman;

  constructor( private temans : TemansService) { }

  ngOnInit() {
  }

  tambahTeman(inputEmail: HTMLInputElement){
    // this.temanAdded.emit(this.inputInfo);
    // console.log(this.inputInfo);
    // console.log(inputEmail.value);
    // console.log(this.inputContact.nativeElement.value);

    this.temanAdded.emit(this.temans.convertTeman(this.inputInfo));
    this.inputInfo= new Teman();
  }

}
