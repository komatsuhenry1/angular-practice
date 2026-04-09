import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  myBolean = true;
  idButton = 'buton'
  items = ['item1', 'item2', 'item3'];

  changeBolean(value: boolean) {
    this.myBolean = value;
  }

  submit(){
    console.log('CLICOU!! ');
  }
}
