function generateInternCardHtml(name, title, id, email, school){
    return `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Employee: ${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
    </div>
</div>`;
};

module.exports = generateInternCardHtml;