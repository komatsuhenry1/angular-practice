import { Component, inject } from '@angular/core';
import { SendForm } from '../../services/send-form';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private sendForm = inject(SendForm); // private is a convention, not a rule
  myBolean = true;
  idButton = 'buton'
  items = ['item1', 'item2', 'item3'];

  changeBolean(value: boolean) {
    this.myBolean = value;
  }

  submit(){
    this.sendForm.sendFormService();
  }
}
