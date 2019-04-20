import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(
    private contactListService: ContactListService,
    private flashMessages: FlashMessagesService,
    private router: Router
    )
    { }

  ngOnInit() {
    this.contacts = new Array<Contact>();

    this.displayContactList();
  }

  private displayContactList(): void {
    this.contactListService.getList().subscribe(data => {
      if(data.success) {
        this.contacts = data.contactList;
      } else {
        this.flashMessages.show('User must be looged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/contact/contact-list']);
    }
  }

}
