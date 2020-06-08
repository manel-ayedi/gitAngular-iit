import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {UsersService} from '../../../core/services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) {
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
      this._snackBar.open('utilisateur modifié', 'ok', {
        duration: 2000,
      });
    } else {
      this.userService.addUser(this.user).subscribe(user => this.router.navigate(['/users/list']));
    }
  }
}
