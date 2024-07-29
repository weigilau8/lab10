var itemCount = 0;

function addItem() {
    itemCount++;
    var listItem = document.createElement('li');
    listItem.innerText  =  'Item ' + itemCount;
    document.getElementById('itemList').appendChild(listItem);
}