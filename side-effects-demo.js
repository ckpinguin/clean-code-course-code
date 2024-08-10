function connectDatabase() {
  try {
    database.connect()
  } catch (error) {}
  if (!didConnect) {
    console.error(error.message)
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent()
  }
  return findAgentByRequestType(ticket.requestType)
}

function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    return false
  }
  return true
}
