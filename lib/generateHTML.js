const generateCards = (employees) => {
    
    // for (var i = 0; i < employees.length; i++) {
       
       if (employees[0].employeeRole === 'Manager') {
           return `
           <div class = "card">
           <div class = "card-header">
               <h5>${employees[0].employeeName}</h5>
               <span>Icon</span><span>${employees[0].employeeRole}</span>
           </div>
           <div class = "card-body">
               <ul class = "list-group list-group-flush">
                   <li class = "list-group-item">ID:${employees[0].manager.managerID}</li>
                   <li class = "list-group-item">Email:${employees[0].employeeEmail}</li>
                   <li class = "list-group-item">Office Number:${employees[0].manager.managerOffice}</li>
               </ul>
           </div>
       </div>`
       } else if (employees[0].employeeRole === 'Engineer') {
           return `<div class = "card">
           <div class = "card-header">
               <h5>${employees[0].employeeName}</h5>
               <span>Icon</span><span>${employees[0].employeeRole}</span>
           </div>
           <div class = "card-body">
               <ul class = "list-group list-group-flush">
                   <li class = "list-group-item">ID:${employees[0].engineer.EngineerID}</li>
                   <li class = "list-group-item">Email:${employees[0].employeeEmail}</li>
                   <li class = "list-group-item">Office Number:${employees[0].engineer.engineerGithub}</li>
               </ul>
           </div>
       </div>`
       } else if (employees[0].employeeRole === 'Intern') {
           return `<div class = "card">
           <div class = "card-header">
               <h5>${employees[0].employeeName}</h5>
               <span>Icon</span><span>${employees[0].employeeRole}</span>
           </div>
           <div class = "card-body">
               <ul class = "list-group list-group-flush">
                   <li class = "list-group-item">ID:${employees[0].intern.internID}</li>
                   <li class = "list-group-item">Email:${employees[0].employeeEmail}</li>
                   <li class = "list-group-item">Office Number:${employees[0].intern.internSchool}</li>
               </ul>
           </div>
       </div>`
    //    }
       
   }
   
   
 
};







function generateHTML(cards) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet">
        <link rel = "stylesheet" href= "./output/style.css">
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
                <div class="col"> ${generateCards(cards)}</div>
                
              
            </div>
        </div>
        </div>
        
    </body>
    </html>`;

} 

module.exports = { generateHTML };

