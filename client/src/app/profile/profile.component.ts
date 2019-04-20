import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: User;
  private authToken: any = null;
  private authService: AuthService;
  constructor() { 

    this.user = new User();

  }

  ngOnInit() {
    
    this.loadToken();
  }



  private loadToken() {
    this.user = JSON.parse(localStorage.getItem('user'));
    
  }

}
