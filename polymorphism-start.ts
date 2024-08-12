type Purchase = any

let Logistics: any

class DeliveryImpl {
  protected purchase: Purchase

  constructor(purchase: Purchase) {
    this.purchase = purchase
  }
}

interface Delivery {
  deliverProduct(): any
  trackProduct(): any
}

class ExpressDelivery extends DeliveryImpl implements Delivery {
  deliverProduct() {
    Logistics.issueExpressDelivery(this.purchase.product)
  }
  trackProduct() {
    Logistics.trackExpressDelivery(this.purchase.product)
  }
}

class InsuredDelivery extends DeliveryImpl implements Delivery {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product)
  }
  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product)
  }
}

class StandardDelivery extends DeliveryImpl implements Delivery {
  deliverProduct() {
    Logistics.issueStandardDelivery(this.purchase.product)
  }
  trackProduct() {
    Logistics.trackStandardDelivery(this.purchase.product)
  }
}

function createDelivery(purchase: Purchase): Delivery {
  let delivery: Delivery

  if (purchase.deliveryType === "express") {
    delivery = new ExpressDelivery({})
  } else if (purchase.deliveryType === "insured") {
    delivery = new InsuredDelivery({})
  } else {
    delivery = new StandardDelivery({})
  }
  return delivery
}

const delivery = createDelivery({})

delivery.deliverProduct()
