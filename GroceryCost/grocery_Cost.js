let item_One, item_Two, item_Three;


function calculateCost(){
    item_One=parseFloat(document.getElementById('item_One').value);
    item_Two=parseFloat(document.getElementById('item_Two').value);
    item_Three=parseFloat(document.getElementById('item_Three').value);

    let cost=item_One+item_Two+item_Three;

    document.getElementById('result').innerText = `the cost of your groceries is: ${cost}`;

}