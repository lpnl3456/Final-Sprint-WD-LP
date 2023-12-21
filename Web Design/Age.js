html = ``
fetch('./Games.json')
  .then(response => response.json())
  .then(Games => {
    // Loop through an array in the JSON data
    Games.forEach(Games => {

      
      console.log(Games.Name)
      html = age(Games, html);
      
      
    });
    ///document.body.innerHTML += html
    

  })

  

  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });
  

function age(Games, html) {

  html = html + `<p> ${Games.Name} is currently ${new Date().getFullYear() - 
    new Date(Games.releaseDate).getFullYear()} years old<br><\p>`

    
  
  console.log(`${Games.Name} is currently ${new Date().getFullYear() - 
    new Date(Games.releaseDate).getFullYear()} years old`)

    return html
}

