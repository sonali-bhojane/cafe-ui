import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
send(){
  alert('Thank you for your message! We ll get back to you within 24 hours. In the meantime, why not visit us for a cup of amazing coffee? ☕')
}
}
