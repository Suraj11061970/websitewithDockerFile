document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const itemInput = document.getElementById('item-input');
    const groceryList = document.getElementById('grocery-list');

    addButton.addEventListener('click', addItem);
    itemInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText === '') return;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            groceryList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        groceryList.appendChild(listItem);
        itemInput.value = '';
        itemInput.focus();
    }
});
