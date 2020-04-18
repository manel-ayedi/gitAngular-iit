import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  private  responsables = ['ali','mourad','amir'].map(this.createResponsable);
  private  developers = ['amal','melek','amir'].map(this.createDeveloper);

  formGroup: FormGroup =
    this.formBuilder.group({
      name:['', Validators.required],
      description: [''],
      responsable : [''],
      team : ['']
    });
  constructor ( private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
  }
  createResponsable (name){
    return new User(name,name,name,name,name,'responsable' );
  }
  createDeveloper (name){
    return new User(name,name,name,name,name,'Developer' );
  }


}
