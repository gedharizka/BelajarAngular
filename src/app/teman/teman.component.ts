import { Component, OnInit } from '@angular/core';
import{Teman} from './teman.model';

@Component({
  selector: 'app-temen',
  templateUrl: './teman.component.html',
  styleUrls: ['./teman.component.css']
})
export class TemanComponent implements OnInit {

  temanList: Teman[]=[];
  temanEdit: Teman= new Teman();
  // temanEdit: Teman= new teman();

  constructor() { }

  ngOnInit() {
  }

  onTemanAdded(temanInfo: Teman){
    console.log(temanInfo);
    this.temanList.push(temanInfo);
  }


  onTemanEdit(temanInfo: Teman){
    this.temanEdit=temanInfo;
    console.log(this.temanEdit);
  }

}
