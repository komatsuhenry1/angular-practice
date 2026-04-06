import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  myBolean = false;
  idButton = 'buton'

  changeBolean(value: boolean) {
    this.myBolean = value;
  }

  submit(){
    console.log('CLICOU!! ');
  }
}
