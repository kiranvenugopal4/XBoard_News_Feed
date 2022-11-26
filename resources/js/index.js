console.log(magazines);
const magazinesList = [
    `https://api.rss2json.com/v1/api.json?rss_url=${magazines[0]}`,
    `https://api.rss2json.com/v1/api.json?rss_url=${magazines[1]}`,
    `https://api.rss2json.com/v1/api.json?rss_url=${magazines[2]}`
  ];

  async function getJSON(arr) {
    try{
    const firstResponse = await fetch(arr[0]);
    const firstJSON = await firstResponse.json();

    const secondResponse = await fetch(arr[1]);
    const secondJSON = await secondResponse.json();

    const thirdResponse = await fetch(arr[2]);
    const thirdJSON = await thirdResponse.json();
    
    const returnJSON = [firstJSON,secondJSON,thirdJSON];
    return returnJSON;
  }
  catch (err){
    alert(`Fetch Failed! ${err}`);
  }
    
  }

  async function addAccordionDataAndCarousels(){

  // GET JSON in an array
  const JSONData = await getJSON(magazinesList);
  console.log(JSONData);

  // Loop through the JSON array, set accordion content and add function to create carousels inside each accordion

  JSONData.forEach((element,index)=> {

    // Set Titles for Accordion

    let accordionHeader = document.getElementById(`heading${index}`);
    accordionHeader.innerHTML = element.feed.title;

   

    // Set Carousels inside the Accordion
    const topics = element.items;
    
    let carouselInner = document.getElementById(`carousel-inner-${index}`);
    carouselInner.innerHTML="";

    for(let i=0; i< topics.length; i++){          
          let carouselItem = document.createElement("div");
          if(i==0){
            carouselItem.classList.add("carousel-item","active");
          }
          else{
            carouselItem.classList.add("carousel-item");
          }   

          let dateWithTime = topics[i].pubDate;      
          let date = new Date(dateWithTime).toLocaleDateString('EN-SA');

          carouselItem.innerHTML= `<a href="${topics[i].link}" target = "_blank">
          <div class="card">
          <img src= ${topics[i].enclosure.link} class="d-block w-100 card-img-top" style="max-height:462px; object-fit:cover;">
          <div class="card-body">
          <p class= "slide-heading-text">${topics[i].title}</p> 
          <p class="author">${topics[i].author}   <span class="dot"></span>   ${date}</p>
          <p class = "slide-desc card-text">${topics[i].description}</p>
          </div>
          </div>
          </a>
          `;
          


          //append each carousel item to carousel inner
          carouselInner.append(carouselItem);

        }
      






  });



}

addAccordionDataAndCarousels();

  
  












