import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.user = new User();
  }

  onRegisterSubmit(): void {
    this.authService.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });
  }

}