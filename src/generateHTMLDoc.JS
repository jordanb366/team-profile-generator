
function ManagerHTML(Manager){
    return `<div>
    <div>
        <h3>${Manager.getName()}</h3>
        <h4>${Manager.getRole()}</h4>
    </div>
    <div>
        <p>ID: ${Manager.getId()} </p>
        <p>Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></p>
        <p>Office number: ${Manager.getOfficeNumber()}</p>
    </div>
</div>`
}


function EngineerHTML(Engineer){
    if (!Engineer) {
        return "";
    }
    else {
        return `<div>
        <div>
            <h3>${Engineer.getName()}</h3>
            <h4>${Engineer.getRole()}</h4>
        </div>
        <div>
            <p>ID: ${Engineer.getId()} </p>
            <p>Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
            <p>Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></p>
        </div>
    </div>`;
    } 
}

function InternHTML(Intern){
    if (!Intern) {
        return "";
    }
    else {
        return `<div>
        <div>
            <h3>${Intern.getName()}</h3>
            <h4>${Intern.getRole()}</h4>
        </div>
        <div>
            <p>ID: ${Intern.getId()} </p>
            <p>Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></p>
            <p>Scool: ${Intern.getSchool()}</p>
        </div>
    </div>`;
    } 
}

function HTMLDoc(Manager, EngineerData, InternData) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body class="container bg-dark">
    <section class="bg-primary">
        <h1>My Team</h1>
    </section>
    <section class="bg-light">
        ${ManagerHTML(Manager)}
        ${EngineerHTML(EngineerData)}
        ${InternHTML(InternData)}
        
    </section>
      
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`;
    
            
} 

module.exports = {HTMLDoc, ManagerHTML, EngineerHTML, InternHTML};