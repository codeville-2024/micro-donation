const recipients = [
  {
    id: 1,
    name: "flood in lambo",
    desc: "Lamboa community needs your help for crisis management from 3 days of non-stop flooding.",
    donation: 230,
    image:"images/Rectangle 41 (1).png",
  },
  {
    id: 2,
    name:"Tsunami in Malika",
    desc:"Emergency! A tsunami has just hit Malika, Tarasudi District. Help our affected brothers and sisters.",
    donation:1090,
     image:"images/help.jpg"
  },
  {
    id: 3,
    name:"Help African Children",
    desc:"African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
    donation:"748",
  }
];

recipients.forEach((recipient) => {
    const donationContainer = document.getElementById("donation-container")

    
    donationContainer.innerHTML += `
     <div class="donations-images-card">
          <img src="${recipient.image}" alt="image" class="donations-images-card-pic">
          <div class="donations-images-card-words">
            <h5>${recipient.donation} donations</h5>
            <h1>${recipient.name}</h1>
            <p>${recipient.desc}</p>
          </div>
          <div class="donations-images-card-buttons">
            <div class="donations-images-card-button-one"><img src="/images/fluent_bookmark-20-regular.png" alt="icon" id="icons" ></div>
            <button class="donations-images-card-button-two">Donate</button>
          </div>
         
    `;
  
    // declare productId as a block-scoped variable
    let recipientId = recipient.id;
  
    // productElement.addEventListener("click", () => {
    //   // redirect to the details page with the product ID as a parameter
  
    //   window.location.href = `details.html?id=${productId}`;
    // });
  

    // productList.appendChild(productElement);
  });
