import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/user';
import {UsersService} from '../../../core/services/user/user.service';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  private user: User = new User(
    '',
    '',
    '',
    '',
    '',
    ''
  );
  // @ts-ignore
  constructor(private userService: UsersService) { }
 // constructor(private userService: UsersService , private subjectService: SubjectService) { }
gir
  ngOnInit() {
    const observable = fromEvent(document, 'click');
    observable.subscribe(event => console.log(event));
  }
  public submit() {
    // this.subjectService.subject.next(this.user.username);
    this.userService.addUser(this.user).subscribe();
  }
}
