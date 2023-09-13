import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  users: any;
  constructor(private userData: UserDataService) {
    userData.user().subscribe((data) => {
      this.users = data;
    });
    console.warn(this.users);
  }

  getUserFromData(data: any) {
    this.userData.addUsers(data).subscribe((result) => {
      console.log(result);
    });
  }
}
