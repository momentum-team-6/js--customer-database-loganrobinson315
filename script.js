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

const secondCustomersDiv = document.createElement('div')
secondCustomersDiv.innerHTML = `<img src=${secondCustomer.picture.large}>`
secondCustomersDiv.innerHTML += `<h3>${secondCustomer.name.first}</h3>`
secondCustomersDiv.innerHTML += `<p>${secondCustomer.email}</p>`
secondCustomersDiv.innerHTML += `<p>${secondCustomer.location.street.number} ${secondCustomer.location.street.name} <br> ${secondCustomer.location.city} ${secondCustomer.location.state}`
secondCustomersDiv.innerHTML += `<p>${'DOB: ' + secondCustomer.dob.date}</p>`
secondCustomersDiv.innerHTML += `<p>${'Customer since: ' + secondCustomer.registered.date}</p>`

document.querySelector('body').appendChild(secondCustomersDiv)


//Third Client Card
const thirdCustomer = customers[2]

const thirdCustomersDiv = document.createElement('div')
thirdCustomersDiv.innerHTML = `<img src=${thirdCustomer.picture.large}>`
thirdCustomersDiv.innerHTML += `<h3>${thirdCustomer.name.first}</h3>`
thirdCustomersDiv.innerHTML += `<p>${thirdCustomer.email}</p>`
thirdCustomersDiv.innerHTML += `<p>${thirdCustomer.location.street.number} ${thirdCustomer.location.street.name} <br> ${thirdCustomer.location.city} ${thirdCustomer.location.state}`
thirdCustomersDiv.innerHTML += `<p>${'DOB: ' + thirdCustomer.dob.date}</p>`
thirdCustomersDiv.innerHTML += `<p>${'Customer since: ' + thirdCustomer.registered.date}</p>`

document.querySelector('body').appendChild(thirdCustomersDiv)


//Fourth Client Card
const fourthCustomer = customers[3]

const fourthCustomersDiv = document.createElement('div')
fourthCustomersDiv.innerHTML = `<img src=${fourthCustomer.picture.large}>`
fourthCustomersDiv.innerHTML += `<h3>${fourthCustomer.name.first}</h3>`
fourthCustomersDiv.innerHTML += `<p>${fourthCustomer.email}</p>`
fourthCustomersDiv.innerHTML += `<p>${fourthCustomer.location.street.number} ${fourthCustomer.location.street.name} <br> ${fourthCustomer.location.city} ${fourthCustomer.location.state}`
fourthCustomersDiv.innerHTML += `<p>${'DOB: ' + fourthCustomer.dob.date}</p>`
fourthCustomersDiv.innerHTML += `<p>${'Customer since: ' + fourthCustomer.registered.date}</p>`

document.querySelector('body').appendChild(fourthCustomersDiv)


//Fifth Client Card
const fifthCustomer = customers[4]

const fifthCustomersDiv = document.createElement('div')
fifthCustomersDiv.innerHTML = `<img src=${fifthCustomer.picture.large}>`
fifthCustomersDiv.innerHTML += `<h3>${fifthCustomer.name.first}</h3>`
fifthCustomersDiv.innerHTML += `<p>${fifthCustomer.email}</p>`
fifthCustomersDiv.innerHTML += `<p>${fifthCustomer.location.street.number} ${fifthCustomer.location.street.name} <br> ${fifthCustomer.location.city} ${fifthCustomer.location.state}`
fifthCustomersDiv.innerHTML += `<p>${'DOB: ' + fifthCustomer.dob.date}</p>`
fifthCustomersDiv.innerHTML += `<p>${'Customer since: ' + fifthCustomer.registered.date}</p>`

document.querySelector('body').appendChild(fifthCustomersDiv)


//Six Client Card
const sixCustomer = customers[5]

const sixCustomersDiv = document.createElement('div')
sixCustomersDiv.innerHTML = `<img src=${sixCustomer.picture.large}>`
sixCustomersDiv.innerHTML += `<h3>${sixCustomer.name.first}</h3>`
sixCustomersDiv.innerHTML += `<p>${sixCustomer.email}</p>`
sixCustomersDiv.innerHTML += `<p>${sixCustomer.location.street.number} ${sixCustomer.location.street.name} <br> ${sixCustomer.location.city} ${sixCustomer.location.state}`
sixCustomersDiv.innerHTML += `<p>${'DOB: ' + sixCustomer.dob.date}</p>`
sixCustomersDiv.innerHTML += `<p>${'Customer since: ' + sixCustomer.registered.date}</p>`

document.querySelector('body').appendChild(sixCustomersDiv)


//seven Client Card
const sevenCustomer = customers[6]

const sevenCustomersDiv = document.createElement('div')
sevenCustomersDiv.innerHTML = `<img src=${sevenCustomer.picture.large}>`
sevenCustomersDiv.innerHTML += `<h3>${sevenCustomer.name.first}</h3>`
sevenCustomersDiv.innerHTML += `<p>${sevenCustomer.email}</p>`
sevenCustomersDiv.innerHTML += `<p>${sevenCustomer.location.street.number} ${sevenCustomer.location.street.name} <br> ${sevenCustomer.location.city} ${sevenCustomer.location.state}`
sevenCustomersDiv.innerHTML += `<p>${'DOB: ' + sevenCustomer.dob.date}</p>`
sevenCustomersDiv.innerHTML += `<p>${'Customer since: ' + sevenCustomer.registered.date}</p>`

document.querySelector('body').appendChild(sevenCustomersDiv)


//eight Client Card
const eightCustomer = customers[7]

const eightCustomersDiv = document.createElement('div')
eightCustomersDiv.innerHTML = `<img src=${eightCustomer.picture.large}>`
eightCustomersDiv.innerHTML += `<h3>${eightCustomer.name.first}</h3>`
eightCustomersDiv.innerHTML += `<p>${eightCustomer.email}</p>`
eightCustomersDiv.innerHTML += `<p>${eightCustomer.location.street.number} ${eightCustomer.location.street.name} <br> ${eightCustomer.location.city} ${eightCustomer.location.state}`
eightCustomersDiv.innerHTML += `<p>${'DOB: ' + sevenCustomer.dob.date}</p>`
eightCustomersDiv.innerHTML += `<p>${'Customer since: ' + eightCustomer.registered.date}</p>`

document.querySelector('body').appendChild(eightCustomersDiv)


//nine Client Card
const nineCustomer = customers[8]

const nineCustomersDiv = document.createElement('div')
nineCustomersDiv.innerHTML = `<img src=${nineCustomer.picture.large}>`
nineCustomersDiv.innerHTML += `<h3>${nineCustomer.name.first}</h3>`
nineCustomersDiv.innerHTML += `<p>${nineCustomer.email}</p>`
nineCustomersDiv.innerHTML += `<p>${nineCustomer.location.street.number} ${nineCustomer.location.street.name} <br> ${nineCustomer.location.city} ${nineCustomer.location.state}`
nineCustomersDiv.innerHTML += `<p>${'DOB: ' + nineCustomer.dob.date}</p>`
nineCustomersDiv.innerHTML += `<p>${'Customer since: ' + nineCustomer.registered.date}</p>`

document.querySelector('body').appendChild(nineCustomersDiv)


//ten Client Card
const tenCustomer = customers[9]

const tenCustomersDiv = document.createElement('div')
tenCustomersDiv.innerHTML = `<img src=${tenCustomer.picture.large}>`
tenCustomersDiv.innerHTML += `<h3>${tenCustomer.name.first}</h3>`
tenCustomersDiv.innerHTML += `<p>${tenCustomer.email}</p>`
tenCustomersDiv.innerHTML += `<p>${tenCustomer.location.street.number} ${tenCustomer.location.street.name} <br> ${tenCustomer.location.city} ${tenCustomer.location.state}`
tenCustomersDiv.innerHTML += `<p>${'DOB: ' + tenCustomer.dob.date}</p>`
tenCustomersDiv.innerHTML += `<p>${'Customer since: ' + tenCustomer.registered.date}</p>`

document.querySelector('body').appendChild(tenCustomersDiv)


//eleven Client Card
const elevenCustomer = customers[10]

const elevenCustomersDiv = document.createElement('div')
elevenCustomersDiv.innerHTML = `<img src=${elevenCustomer.picture.large}>`
elevenCustomersDiv.innerHTML += `<h3>${elevenCustomer.name.first}</h3>`
elevenCustomersDiv.innerHTML += `<p>${elevenCustomer.email}</p>`
elevenCustomersDiv.innerHTML += `<p>${elevenCustomer.location.street.number} ${elevenCustomer.location.street.name} <br> ${elevenCustomer.location.city} ${elevenCustomer.location.state}`
elevenCustomersDiv.innerHTML += `<p>${'DOB: ' + elevenCustomer.dob.date}</p>`
elevenCustomersDiv.innerHTML += `<p>${'Customer since: ' + elevenCustomer.registered.date}</p>`

document.querySelector('body').appendChild(elevenCustomersDiv)


//twelve Client Card
const twelveCustomer = customers[11]

const twelveCustomersDiv = document.createElement('div')
twelveCustomersDiv.innerHTML = `<img src=${twelveCustomer.picture.large}>`
twelveCustomersDiv.innerHTML += `<h3>${twelveCustomer.name.first}</h3>`
twelveCustomersDiv.innerHTML += `<p>${twelveCustomer.email}</p>`
twelveCustomersDiv.innerHTML += `<p>${twelveCustomer.location.street.number} ${twelveCustomer.location.street.name} <br> ${twelveCustomer.location.city} ${twelveCustomer.location.state}`
twelveCustomersDiv.innerHTML += `<p>${'DOB: ' + twelveCustomer.dob.date}</p>`
twelveCustomersDiv.innerHTML += `<p>${'Customer since: ' + twelveCustomer.registered.date}</p>`

document.querySelector('body').appendChild(twelveCustomersDiv)

// const firstCustomer = customers[0]

// const customersContainers = document.querySelector('.customers-person')


// // // customerCard.classList.add('customer-person')
// // // console.log(customerCard)

// customersContainers.innerHTML = `<div>
//     <h3>${firstCustomer.name.first}</h3>



// </div>`


