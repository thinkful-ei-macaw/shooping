//i was missing this because i thought we would have to do a separate function
    //for every action (per earlier lessons)

function shoppingList (){ 

("#js-shopping-list-form").submit(function( event ) {
    event.preventDefault();
//this is the event handling.. we set an event above, and now
//this is what is going to happen during the event
const listItem = $('.js-shopping-list-entry').val();   
//if the above was a regular function, it would be ??an object?


//if loop starts here, i choose append initially because it seemed like
//thats how you'd add to an existing list
if (listItem !== "") {
    $('.shopping-list').append(`<li>
      <span class="shopping-item">${listItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    <li>`);
    $('.js-shopping-list-entry').val("");
}
});//this just tells it to make a list item with buttons, etc.
//did not know I could just copy the html text right into it


$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
$(this).closest('.shopping-item-controls').siblings('shopping-item').toggleClass('shopping-item__checked');
});

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
$(this).closest('li').remove();
});
}
//above is the DOM manipulation. so event is the click, and 
//i previously used li, and ul, but I should've been using the actual names

//call function at the end with

$(shoppingList);



