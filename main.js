
function submit() {
    const expense = document.createElement("div")
    const date = document.createElement("div")
    const note = document.createElement("div")
    const amount = document.createElement("div")
    const noteControl = document.querySelector(".note")
    const amountControl = document.querySelector(".amount")
    const dateControl = document.querySelector('input[type="date"]')
    expense.className = "expense"
    date.className= "info"
    note.className = "info"
    amount.className = "info" 

    date.innerHTML = dateControl.value
    note.innerHTML = noteControl.value
    amount.innerHTML = amountControl.value

    expense.append(date,note,amount)

    const currentDiv = document.querySelector(".expenses")
    currentDiv.append(expense)
}