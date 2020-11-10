const buttons = document.querySelectorAll('.car-button');
const deleteModel = (event) => {
    const deleteButton = event.target;
    const brand = deleteButton.dataset.brand;
    const model = deleteButton.dataset.model;

    fetch(`/cars/${brand}/${model}`, {
        method: "DELETE"
    })
    .then((response) => {
        console.log(response);
        if(response.status === 204){
            const rowToDelete = deleteButton.closest('.car-model');
            rowToDelete.parentNode.removeChild(rowToDelete);
        }
    })
    .catch(reason => {
        console.log(reason);
    })
};

buttons.forEach(item => item.addEventListener('click', deleteModel));

const addNewModelButton = document.getElementById('sendCarModel');
addNewModelButton.addEventListener('click', (event) => {
    const addButton = event.target;
    const brand = addButton.dataset.brand;
    const model = addButton
        .closest('.model-form')
        .querySelector('input[name="model"]')
        .value;

    fetch(`/cars/${brand}/${model}`, {
        method: "POST"
    })

});


