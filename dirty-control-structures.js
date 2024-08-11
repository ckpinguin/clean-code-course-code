main()

function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ]
  try {
    processTransactions(transactions)
  } catch (err) {
    showErrorMessage(err.message)
  }
}

function processTransactions(transactions) {
  validateTransactions(transactions)

  for (const transaction of transactions) {
    processTransaction(transaction)
  }
}

function validateTransactions(transactions) {
  if (isEmpty(transactions)) {
    const error = new Error("No transactions provided!")
    error.code = 1 // just as an example
    throw error
  }
}

function processTransaction(transaction) {
  try {
    validateTransaction(transaction)

    if (usesTransactionMethod(transaction, "CREDIT_CARD")) {
      processCreditCardTransaction(transaction)
    } else if (usesTransactionMethod(transaction, "PAYPAL")) {
      processPayPalTransaction(transaction)
    } else if (usesTransactionMethod(transaction, "PLAN")) {
      processPlanTransaction(transaction)
    }
  } catch (error) {
    showErrorMessage(error.message, error.item)
  }
}

function validateTransaction(transaction) {
  if (!isOpen(transaction)) {
    const error = new Error("Invalid transaction status!")
    throw error
  }

  if (!isPayment(transaction) && !isRefund(transaction)) {
    const error = new Error("Invalid transaction type!")
    error.item = transaction
    throw error
  }
}

function usesCreditCard(transaction) {
  return transaction.method === "CREDIT_CARD"
}

function usesPayPal(transaction) {
  return transaction.method === "PAYPAL"
}

function usesPlan(transaction) {
  return transaction.method === "PLAN"
}

// Alternatively to above 3 functions:
function usesTransactionMethod(transaction, method) {
  return transaction.method === method
}

function isPayment(transaction) {
  return transaction.type === "PAYMENT"
}

function isRefund(transaction) {
  return transaction.type === "REFUND"
}

function isOpen(transaction) {
  return transaction.status === "OPEN"
}

function processCreditCardTransaction(transaction) {
  if (isPayment(transaction)) {
    processCreditCardPayment(transaction)
  } else if (isRefund(transaction)) {
    processCreditCardRefund(transaction)
  }
}

function processPayPalTransaction(transaction) {
  if (isPayment(transaction)) {
    processPayPalPayment(transaction)
  } else if (isRefund(transaction)) {
    processPayPalRefund(transaction)
  }
}

function processPlanTransaction(transaction) {
  if (isPayment(transaction)) {
    processPlanPayment(transaction)
  } else if (isRefund(transaction)) {
    processPlanRefund(transaction)
  }
}

/* function processPayment(transaction) {
  if (transaction.method === "CREDIT_CARD") {
    processCreditCardPayment(transaction)
  } else if (transaction.method === "PAYPAL") {
    processPayPalPayment(transaction)
  } else if (transaction.method === "PLAN") {
    processPlanPayment(transaction)
  }
}

function processRefund(transaction) {
  if (transaction.method === "CREDIT_CARD") {
    processCreditCardRefund(transaction)
  } else if (transaction.method === "PAYPAL") {
    processPayPalRefund(transaction)
  } else if (transaction.method === "PLAN") {
    processPlanRefund(transaction)
  }
} */

function showErrorMessage(message, item) {
  console.log(message)
  if (item) {
    console.log(item)
  }
}

function isEmpty(transactions) {
  return !transactions && transactions.length === 0
}

function processCreditCardPayment(transaction) {
  console.log(
    "Processing credit card payment for amount: " + transaction.amount
  )
}

function processCreditCardRefund(transaction) {
  console.log("Processing credit card refund for amount: " + transaction.amount)
}

function processPayPalPayment(transaction) {
  console.log("Processing PayPal payment for amount: " + transaction.amount)
}

function processPayPalRefund(transaction) {
  console.log("Processing PayPal refund for amount: " + transaction.amount)
}

function processPlanPayment(transaction) {
  console.log("Processing plan payment for amount: " + transaction.amount)
}

function processPlanRefund(transaction) {
  console.log("Processing plan refund for amount: " + transaction.amount)
}
