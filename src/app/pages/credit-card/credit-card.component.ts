import { NotificationFactory } from './../../classes/notificationFactory.class';
import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  firstName: string;
  lastName: string;
  cardNumber: string;
  cardMonth: number;
  cardYear: number;
  cardCode: string;
  notificationFactory: NotificationFactory = new NotificationFactory();

  constructor(
    private router:Router, 
    private paymentService: PaymentService,
   ) { }

  ngOnInit(): void {
  }

  endBuy(){
    const totalAmount: number = JSON.parse(localStorage.getItem('totalAmount'));
    this.paymentService.doPayment(totalAmount, this.cardMonth, this.cardYear, this.cardCode, this.cardNumber)
    .then(response => {
      console.log(response);
      this.notificationFactory.getNotification('El pago se hizo correctamente', 'success')
      this.router.navigateByUrl('/home');
    })
    .catch(err => {
      console.log(err);
    });
  }

}
