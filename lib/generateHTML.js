function generateCards(employees) {
    let cardArray = [];
        console.log(employees);
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].employeeRole === 'Manager') {
            cardArray.push( `
           <div class = "card">
                <div class = "card-header">
                    <h5>${employees[i].employeeName}</h5>
                    <span class="oi oi-briefcase"></span><span>${employees[i].employeeRole}</span>
                </div>
                <div class = "card-body">
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item">ID:${employees[i].manager.managerID}</li>
                        <li class = "list-group-item">Email:${employees[i].employeeEmail}</li>
                        <li class = "list-group-item">Office Number:${employees[i].manager.managerOffice}</li>
                    </ul>
                </div>
            </div>`)
        } else if (employees[i].employeeRole === 'Engineer') {
            cardArray.push( `<div class = "card">
           <div class = "card-header">
               <h5>${employees[i].employeeName}</h5>
               <span class="oi oi-headphones"></span><span>${employees[i].employeeRole}</span>
           </div>
           <div class = "card-body">
               <ul class = "list-group list-group-flush">
                   <li class = "list-group-item">ID:${employees[i].engineer.EngineerID}</li>
                   <li class = "list-group-item">Email:${employees[i].employeeEmail}</li>
                   <li class = "list-group-item">Office Number:${employees[i].engineer.engineerGithub}</li>
               </ul>
           </div>
       </div>`)
        } else if (employees[i].employeeRole === 'Intern') {
            cardArray.push( `<div class = "card">
           <div class = "card-header">
               <h5>${employees[i].employeeName}</h5>
               <span class="oi oi-book"></span><span>${employees[i].employeeRole}</span>
           </div>
           <div class = "card-body">
               <ul class = "list-group list-group-flush">
                   <li class = "list-group-item">ID:${employees[i].intern.internID}</li>
                   <li class = "list-group-item">Email:${employees[i].employeeEmail}</li>
                   <li class = "list-group-item">Office Number:${employees[i].intern.internSchool}</li>
               </ul>
           </div>
       </div>`)
        }
        
    }
    
    console.log("I am a card", cardArray.join(''));
    return cardArray.join('');



}







function generateHTML(employees) {
    
    // generateCards(employees);
    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel = "stylesheet" href= "../output/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <div class = "container">
            <div class = "col">
            <div class = "row">
                <header class = "header">
                <h1>Team Profile</h1>
            </header>
            </div>
        </div>
        <div class = "container">
            <div class= "row">
                <div class="col">
            
                ${generateCards(employees)}
                
                </div>
                
              
            </div>
        </div>
        </div>
        
    </body>
    </html>`

} 

module.exports = { generateHTML };






