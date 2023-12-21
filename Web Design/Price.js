html = ''
fetch('./Games.json')
  .then(response => response.json())
  .then(Games => {
    // Loop through an array in the JSON data
    Games.forEach(Games => {
        html += price(Games)
      
    });

    document.body.innerHTML += html

    
    

  })
  

  

  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  function price(Games){
    
    if (Games.Price < 70.00){
        html = `<p>${Games.Name} is currently ${Games.Price}, meaning it is on sale <br><\p>`
        console.log(`${Games.Name} is currently ${Games.Price}, meaning it is on sale`)
    }
    else if (Games.Price > 79.99){
        html = `${Games.Name} is currently ${Games.Price}, meaning it is expensive <br><\p>`
        console.log(`${Games.Name} is currently ${Games.Price}, meaning it is expensive`)
    }
    else{
        html = `${Games.Name} is currently ${Games.Price}, meaning it is normal price <br><\p>`
        console.log(`${Games.Name} is currently ${Games.Price}, meaning it normal price`)
    }
    
    return html
    
}