
DisFullRating = ''
fetch('./Games.json')
  .then(response => response.json())
  .then(Games => {
    // Loop through an array in the JSON data
    Games.forEach(Games => {
      DisFullRating = ageRating(Games, DisFullRating)
      
    });

    document.body.innerHTML += DisFullRating

    
    

  })
  

  

  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });
function ageRating(Games, DisFullRating) {

    switch (Games.ageRating){
      case "E":
        DisFullRating = DisFullRating + `<p> ${Games.Name} is rated E for everyone <br><\p>`
        
        console.log(`${Games.Name} is rated E for everyone`)
        break;
      case "E10":
        DisFullRating = DisFullRating + `<p> ${Games.Name} is rated E10 for everyone 10 years old or older <br><\p>`
        
        console.log(`${Games.Name} is rated E10 for everyone 10 years old or older`)
        break;
      default:
        DisFullRating = DisFullRating + `<p> ${Games.Name} is rated T for Teenagers <br><\p>`
       
        console.log(`${Games.Name} is rated T for T for Teenagers`)
    }
      return  DisFullRating
      
  }