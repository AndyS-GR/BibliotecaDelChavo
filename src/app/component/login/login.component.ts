import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string = "";
  password:string = "";
  users:User[] = [];

  constructor(public uS:UserService) {
    uS.list().subscribe( (data) => {
      this.users = data;
    })
  }
  ngOnInit(): void {}

  verify_user() {
  }
}
