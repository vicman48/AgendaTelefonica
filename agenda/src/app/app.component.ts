import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';


  items;
  checkoutForm;

  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    //this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    /*this.http.post('',customerData).subscribe(data => {
      console.log("Exitoso",data)
    },err => {
      console.log("No exitoso",err)
    })*/
    console.warn('Your order has been submitted', customerData);
  }
}
