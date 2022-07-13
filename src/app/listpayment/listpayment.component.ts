import { Component, OnInit } from '@angular/core';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent implements OnInit {

  paymentListDetails: any = [];
  updateArray: any = [];
  updateFlag = false;
  searchText: string;
  userName = "";
  price: number;
  cardNumber: number;
  userDetails = {
    i: '',
    userName: '',
    price: '',
    cardNumber: ''
  };

  constructor(public paymentService: PaymentserviceService) { }

  ngOnInit(): void {
    this.paymentListDetails = this.paymentService.paymentList;
  }

  onDelete(i: any) {
    this.paymentService.onDeleteItem(i)
  }

  onEdit(val: any, i: any) {
    this.updateFlag = true;
    this.paymentService.onUpdateItem(val)
    this.userDetails = {
      i: i,
      userName: val.userName,
      price: val.price,
      cardNumber: val.cardNumber
    };

  }
  onUpdate(userDetails: any) {
    this.paymentService.onSave(userDetails);
    userDetails.userName = '', userDetails.price = '', userDetails.cardNumber = '';
    this.updateFlag = false;
  }
}
