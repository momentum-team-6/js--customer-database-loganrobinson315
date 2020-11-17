console.log(customers)

//First Client Card
const firstCustomer = customers[0]
let date = new Date()

const customersDiv = document.createElement('div')
customersDiv.innerHTML = `<img src=${firstCustomer.picture.large}>`
customersDiv.innerHTML += `<h3>${firstCustomer.name.first}</h3>`
customersDiv.innerHTML += `<p>${firstCustomer.email}</p>`
customersDiv.innerHTML += `<p>${firstCustomer.location.street.number} ${firstCustomer.location.street.name} <br> ${firstCustomer.location.city} ${firstCustomer.location.state}`
customersDiv.innerHTML += `<p>${'DOB: ' + firstCustomer.dob.date}</p>`
customersDiv.innerHTML += `<p>${'Customer since: ' + firstCustomer.registered.date}</p>`

document.querySelector('body').appendChild(customersDiv)

//Second client card
const secondCustomer = customers[1]




// const firstCustomer = customers[0]

// const customersContainers = document.querySelector('.customers-person')


// // // customerCard.classList.add('customer-person')
// // // console.log(customerCard)

// customersContainers.innerHTML = `<div>
//     <h3>${firstCustomer.name.first}</h3>



// </div>`


