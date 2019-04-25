/* eslint-disable react/jsx-one-expression-per-line */
import React, {Component} from 'react';
import NavBar from './NavBar'
import ButtonGeneric from '../containers/ButtonGeneric';
import { checkGovernment, round } from '../../auxiliaryFunctions';

class VATRefund extends Component {
  printBusiness(business) {
    if(business[2] !== "await refund"){ //check payment status
      return (
        <li className="list-group-item">
          <strong>Company name: </strong>{business[0]}<br />
          <strong>VAT number: </strong>{business[1]}<br />
          <strong>Payment status: </strong>{business[2]}<br />
          <strong>Balance: </strong>{round(business[3])}<br />
        </li>
      )
    }else{
      return (
        <li className="list-group-item">
          <strong>Company name: </strong>{business[0]}<br />
          <strong>VAT number: </strong>{business[1]}<br />
          <strong>Payment status: </strong>{business[2]}<br />
          <strong>Balance: </strong>{round(business[3])}<br />
          <ButtonGeneric text="Refund" />
        </li>
      )
    }
  }

  render() {
    if(checkGovernment()===false){window.location.href = "/"}
    //need to check if user type is government, else redirect to home like previous line
    let totalBusiness = 500
    let name
    let vatNumber
    let paymentStatus
    let balance
    let business
    let businessArray = []
    for(var i=0; i<totalBusiness; i++){
      name = "Company name"
      vatNumber = "VAT"
      paymentStatus = "await refund"
      balance = 999
      business = [name, vatNumber, paymentStatus, balance]
      businessArray[i] = business;
    }

    return (
      <div>
        <NavBar />
        <ul className="list-group list-group-flush top-2rem">
          {businessArray.map(i => this.printBusiness(i))}
        </ul>
      </div>
    )
  }
}

export default VATRefund;
