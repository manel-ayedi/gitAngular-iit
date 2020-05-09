import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {UsersService} from '../../../core/services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  private id: string;
  private oldUsername = {username: undefined};
  private user: User = new User(
    '',
    '',
    '',
    '',
    '',
    ''
  );

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.id = id;
        this.userService.findById(this.id).subscribe(user => {
          this.user = user;
        });
      }
    });
  }

  public submit() {
    if (this.id) {
      this.userService.updateUser(this.id, this.user).subscribe(user => this.router.navigate(['/users/list']));
    } else {
      this.userService.addUser(this.user).subscribe(user => this.router.navigate(['/users/list']));
    }
  }
}
