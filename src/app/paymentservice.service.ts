import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  paymentList: any = [
  {
    userName: "Yuvaraj",
    price: 100,
    cardNumber: 1234567889
  }
]
  paymentListRowValue: any = {}


constructor() { }

onDeleteItem(i: any) {
    if (confirm ("Are you sure wants to delete?") == true) {
        this.paymentList.splice(i, 1)
    } else {
        this.paymentList;
    }
  }

onUpdateItem(val: any) {
  this.paymentListRowValue = {
    userName: val.userName,
    price: val.price,
    cardNumber: val.cardNumber
  };
}

onSave(userDetails: any) {
  this.paymentList.forEach((element: any, index: any) => {
    if(index == userDetails.i) {
      element.userName = userDetails.userName; 
      element.price = userDetails.price;
      element.cardNumber = userDetails.cardNumber;
      element['place'] = "checnnai";
    }
  });
}


}

