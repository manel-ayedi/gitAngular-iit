import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/user';
import {UsersService} from '../../../core/services/user/user.service' ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {YesOrNoComponent} from '../../../shared/yes-or-no/yes-or-no.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  private users: User [];
  displayedColumns: string[] = ['username', 'firstname', 'lastname', 'email', 'role', 'action'];

  // tslint:disable-next-line:variable-name
  constructor(private userService: UsersService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadUsers();
  }


  loadUsers() {
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(id: string) {
    const username = this.users.filter(user => user.id === id)[0].username;
    const dialogRef = this.dialog.open(YesOrNoComponent, {
      width: '250px',
      data: {message: 'voulez-vous supprimer ${username} ?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userService.deleteUser(id)
        .subscribe(
          data => {
            console.log(data);
            this.loadUsers();
          },
          error => console.log(error));
    });

  }
}
