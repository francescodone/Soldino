import { GETMYPRODUCTS, GETSTOREPRODUCTS, SETTOTALNUMBEROFPRODUCTS, SETTOTALNUMBEROFMYPRODUCTS, PASSKEYPROD, SETINVOICES, SETPERIODS, SELECTEDPERIOD, RESETINVOICES } from "../constants/actionTypes";

export  function getMyProducts(myProductsArray) {
  return {
    type: GETMYPRODUCTS,
    myProductsArray
  };
}
export  function getStoreProducts(storeProducts) {
  return {
    type: GETSTOREPRODUCTS,
    storeProducts
  };
}
export  function setTotalNumberOfProducts(value) {
  return {
    type: SETTOTALNUMBEROFPRODUCTS,
    value
  };
}
export  function setTotalNumberOfMyProducts(value) {
  return {
    type: SETTOTALNUMBEROFMYPRODUCTS,
    value
  };
}
export  function passKeyProd(keyProd) {
  return {
    type: PASSKEYPROD,
    keyProd
  };
}

export function setInvoices(invoices) {
  return {
    type: SETINVOICES,
    invoices
  }
}

export function setPeriods(periods) {
  return {
    type: SETPERIODS,
    periods
  }
}

export function selectedPeriod(period) {
  return {
    type: SELECTEDPERIOD,
    period
  }
}

export function resetInvoices() {
  return {
    type: RESETINVOICES
  }
}