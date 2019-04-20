import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {
  title: string;

  contact: Contact;

  constructor(
    private activateRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private contactListService: ContactListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activateRoute.snapshot.data.title;
    this.contact = new Contact();

    this.activateRoute.params.subscribe(params => {
      this.contact._id = params.id;
    });

    this.deleteContact(this.contact);
  }

  deleteContact(contact: Contact): void {
    this.contactListService.deleteContact(contact). subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/contact/contact-list']);
      } else {
        this.flashMessage.show('Delete Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/contact/contact-list']);
      }
    });
  }

}
