function htmlMain(employeeCardStr) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
    <title>Team Profile</title>
    <style>
        body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         height: 100%;
         background-color: #0cbaba;
        background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
        }
    </style>

<body>
    <main>
        <div class="container bg-white d-flex justify-content-center my-5" style="height: 100px">
            <h3 class="d-flex justify-content-center mt-3">Meet Your Team</h3>
        </div>
        <div class="container">
            <div class="row">
                ${employeeCardStr}
            </div>
        </div>
    </main>
</body>

</html>`;

}

module.exports = htmlMain;