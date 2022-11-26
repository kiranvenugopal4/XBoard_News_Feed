const magazinesList = [
    "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thenewsdesk/the-latest-on-coronavirus-covid-19-t82no8kmz.rss",
    "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss",
    "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thehindu/sportstarlive-rj3ttinvz.rss"
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

    setCarousels();



    // Write the function to set Carousels

    function setCarousels(){


      
    }

  });



}

addAccordionDataAndCarousels();

  
  












