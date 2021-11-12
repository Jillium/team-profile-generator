const generateHTML = (employeeData) => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet">
        <link rel = "stylesheet" href= "style.css">
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
                <div class="col-4">
                    <div class = "card">
                        <div class = "card-header">
                            <h5>${employeeData.managerName}</h5>
                            <span>Icon</span><span>Role</span>
                        </div>
                        <div class = "card-body">
                            <ul class = "list-group list-group-flush">
                                <li class = "list-group-item">ID:${data.managerId}</li>
                                <li class = "list-group-item">Email:${data.managerEmail}</li>
                                <li class = "list-group-item">Office Number:${data.managerOffice}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class = "card">
                        <div class = "card-header">
                            <h5>${data.employeeName}</h5>
                            <span>Icon</span><span>${data.Role}</span>
                        </div>
                        <div class = "card-body">
                            <ul class = "list-group list-group-flush">
                                <li class = "list-group-item">ID:${data.employeeId}</li>
                                <li class = "list-group-item">Email:${data.employeeEmail}</li>
                                <li class = "list-group-item"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class = "card">
                        <div class = "card-header">
                            <h5>Name</h5>
                            <span>Icon</span><span>Role</span>
                        </div>
                        <div class = "card-body">
                            <ul class = "list-group list-group-flush">
                                <li class = "list-group-item">ID:</li>
                                <li class = "list-group-item">Email:</li>
                                <li class = "list-group-item">Office Number:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </body>
    </html>`

}   

module.exports = { generateHTML };