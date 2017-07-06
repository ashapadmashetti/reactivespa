import {Component} from '@angular/core';

//load services
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';

@Component({
    selector: 'contact-list',    
    providers:[ContactService],
    templateUrl: './app/components/contactlist.html' 
})
export class ContactListComponent{
  public contacts:Contact[];
  public selected:any={};
  public showDetails:boolean=false;

  constructor(private _contactService:ContactService){   
     }

 ngOnInit(){
     this._contactService.getContacts()
        .then( (cnts:any) => this.contacts=cnts)
   }
 
  selectedContact(contact:Contact){
  	this.selected=contact.name;    
  	this.showDetails=true;    
  }
}