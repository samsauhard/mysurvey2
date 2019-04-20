import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  title: string;
  contact: Contact;

  constructor(
    private contactListService: ContactListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.contact = new Contact();

    // fills in the contact._id property from the url
    this.activatedRoute.params.subscribe(params => {
      this.contact._id = params.id;
    });

    if (this.title === 'Edit Contact') {
      this.getContact(this.contact);
    }

  }

  getContact(contact: Contact): void {
    this.contactListService.getContact(contact).subscribe(data => {
      this.contact = data.contact;
    });
  }

  onContactDetailsSubmit(): void {
    switch (this.title) {
      case 'Add Contact':
        this.contactListService.addContact(this.contact).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          } else {
            this.flashMessage.show('Add Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          }
        });
        break;
      case 'Edit Contact':
        this.contactListService.editContact(this.contact).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          } else {
            this.flashMessage.show('Edit Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          }
        });
        break;
    }
  }

}
