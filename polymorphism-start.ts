type Purchase = any

let Logistics: any

class Delivery {
  protected purchase: Purchase

  constructor(purchase: Purchase) {
    this.purchase = purchase
  }
}

class ExpressDelivery extends Delivery {
  deliverProduct() {
    Logistics.issueExpressDelivery(this.purchase.product)
  }
  trackProduct() {
    Logistics.trackExpressDelivery(this.purchase.product)
  }
}

class InsuredDelivery extends Delivery {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product)
  }
  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product)
  }
}

class StandardDelivery extends Delivery {
  deliverProduct() {
    Logistics.issueStandardDelivery(this.purchase.product)
  }
  trackProduct() {
    Logistics.trackStandardDelivery(this.purchase.product)
  }
}

let delivery: Delivery

if (purchase.deliveryType === "express") {
  delivery = new ExpressDelivery({})
} else if (purchase.deliveryType === "insured") {
  delivery = new InsuredDelivery({})
} else {
  delivery = new StandardDelivery({})
}

delivery.deliverProduct()
