import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  endBuy(){
    if(true){
      Swal.fire('¡Felicitaciones!', 'Su pago se hizo correctamente', 'success');
      this.router.navigateByUrl('/home');
    }
    else{

    }
  }

}
