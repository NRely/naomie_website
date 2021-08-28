const Houses = [
    {
      image_url: 'GlendaleNY.png',
      price: '$850,000',
      sqft: '1,742',
      bedroom: '3',
      bathroom: '2',
      estimated_payment: '$3,700/month',
      address: '80-08 78th Ave, Glendale, NY 11385'
    },
      {
      image_url: 'BaysideNY.png',
      price: '$875,000',
      sqft: '2,614',
      bedroom: '3',
      bathroom: '1.5',
      estimated_payment: '$3,901/month',
      address: '67-28 Bell Blvd, Bayside, NY 11364'
    },
    {
      image_url: 'RidgewoodNY.png',
      price: '$1,150,000',
      sqft: '1,742',
      bedroom: '3',
      bathroom: '3',
      estimated_payment: '$4,766/month',
      address: '18-79 Suydam St, Ridgewood, NY 11385'
    },
    {
      image_url: 'FlushingNY.png',
      price: '$1,188,000',
      sqft: '2,718',
      bedroom: '6',
      bathroom: '2.5',
      estimated_payment: '$5,170/month',
      address: '46-90 Utopia Pkwy, Flushing, NY 11358'
    },
    {
      image_url: 'FloralParkNY.png',
      price: '$825,000',
      sqft: '4,792',
      bedroom: '3',
      bathroom: '2.5',
      estimated_payment: '$4,518/month',
      address: '261 Crocus Ave, Floral Park, NY 11001'
    },
    {
      image_url: 'MassapequaNY.png',
      price: '$1,199,000',
      sqft: '3,246',
      bedroom: '4',
      bathroom: '3.5',
      estimated_payment: '$6,404/month',
      address: '170 Whitewood Dr, Massapequa Park, NY 11762'
    },
  ];

  const container = document.getElementById("container")
  const textcreator = function (text, housecard) {
      const housepara = document.createElement("p")
      const textnode = document.createTextNode(text)
      housepara.appendChild(textnode);
      housecard.appendChild(housepara);
  }

  Houses.map(
    (house) => {
      const housecard = document.createElement("div");
      housecard.className = "housecard";

      const houseimages = document.createElement("img");
      houseimages.className = "houseimages"
      houseimages.src = ` ${house.image_url}`;
      housecard.appendChild(houseimages);

      textcreator(`price: ${house.price}`, housecard);
      
      textcreator(`sqft: ${house.sqft}`, housecard);

      textcreator(`bedroom: ${house.bedroom}`, housecard);

      textcreator(`bathroom: ${house.bathroom}`, housecard);
      
      textcreator(`estimated_payment: ${house.estimated_payment},`, housecard);

      textcreator(`address: ${house.address},`, housecard);

      container.appendChild(housecard); 

    }

  )

  

  