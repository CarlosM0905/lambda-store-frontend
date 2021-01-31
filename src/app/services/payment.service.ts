import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  doPayment(amount: number, month: number, year: number, code: string, cardNumber: string){
    const body = {
      cardNumber: cardNumber, 
      amountCart: amount, 
      monthCard: month, 
      yearCard: year, 
      codeCard: code
    }

    return this.http.post(environment.BACKEND_URL + '/verify-card', body).toPromise();
  }
}
