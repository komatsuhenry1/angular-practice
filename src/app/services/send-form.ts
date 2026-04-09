import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendForm {

  constructor(){}

  // this block simulate a fetch on backend!!! 
  sendFormService() {
    
    const info = {name: 'Henry', age: 25};
    console.log(info);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
  }
}
