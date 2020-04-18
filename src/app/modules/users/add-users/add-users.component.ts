import { Component, OnInit } from '@angular/core';
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  private user : User = new User(
    '',
    '',
    '',
    '',
    '',
    ''
  );
  constructor() { }

  ngOnInit() {
  }

}
