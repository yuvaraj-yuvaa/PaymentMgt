import { Component, OnInit } from '@angular/core';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent implements OnInit {

  userDetails = {
    usrName: '',
    priceDetail: '',
    cardNum: ''
  };
  newUerDetails: any = {}
  data: any;

  constructor(public paymentService: PaymentserviceService) { }

  ngOnInit(): void {
    
  }

  addPaymentDetails() {
    this.data = this.paymentService.paymentList
    this.newUerDetails = 
      {
        userName: this.userDetails.usrName,
        price:this.userDetails.priceDetail,
        cardNumber: this.userDetails.cardNum 
      }
    this.data.push(this.newUerDetails)
    this.userDetails = {usrName: '', priceDetail: '', cardNum: ''}
  }

  onClear() {
    this.userDetails = {usrName: '', priceDetail: '', cardNum: ''}
  }

}
