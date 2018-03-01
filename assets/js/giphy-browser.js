'use strict';

$(document).ready(function () {
    var BASE_URL = 'https://api.giphy.com/v1/gifs/search?q=';
    var API_KEY = '&api_key=Sa9egT2O8QKTXw9j87UZM9BcTQ5NxjMv';
    
    var animals = [
        { name: 'Squirrel' }, 
        { name: 'Cat' }, 
        { name: 'Dog' }, 
        { name: 'Crab' }, 
        { name: 'Chimpanzee' }, 
        { name: 'Alligator' },
        { name: 'Rat' }, 
        { name: 'Turtle' }, 
        { name: 'Snake' }, 
        { name: 'Penguin' }, 
        { name: 'Ostrich' }, 
        { name: 'Zebra' }, 
        { name: 'Skunk' }, 
        { name: 'Pig' }, 
        { name: 'Gorilla' }, 
        { name: 'Shark' }, 
        { name: 'Blue Whale' }, 
        { name: 'Aardvark' }, 
        { name: 'Cow' }, 
        { name: 'Horse' }, 
        { name: 'Antelope' }, 
        { name: 'Lion' }, 
        { name: 'Tiger' }, 
        { name: 'Bear' }, 
        { name: 'Velocirapter' }, 
        { name: 'Eagle' }, 
        { name: 'Sheep' },
        { name: 'Yeti' }, 
        { name: 'Jackalope' }, 
        { name: 'Sasquatch' }, 
        { name: 'Chupacabra' }, 
        { name: 'Baboon' }, 
        { name: 'Ermine' }, 
        { name: 'Fox' },
        { name: 'Hedgehog' }, 
        { name: 'Iguana' }, 
        { name: 'Jackrabbit' }, 
        { name: 'Killer Whale' }, 
        { name: 'Lemur' }, 
        { name: 'Mongoose' }
    ];

    function createGifRowDiv() {
        return $('<div class="row result-row"></div>');
    }

    function onDataReturn(responseData) {
        var gifData = null, imageString = null, row = null;
        
        for (var i = 0; i < responseData.data.length; i++) {
            if (i % 3 === 0) {
                row = createGifRowDiv();
                $('#search-results').append(row);
            }
        
            var $col = $('<div class="col-sm-4"><h4 class="rating">Rating: ' + 
                responseData.data[i].rating + '</h4><div>');
            row.append($col);
            
            imageString = '<img class="img-responsive" src="' + 
            responseData.data[i].images.fixed_height_still.url + '"/>'
            $col.append(imageString);
        }
    }

    function initAnimals() {
        var $animalElements = $('#gif-buttons');
        
        animals.forEach(function (animal) {
            $animalElements.append(`<button type="button" class="animal-button 
                slight-right-margin sligh-left-margin slight-top-margin">` + 
                animal.name + '</button>');
        });
    }

    function clearAllResultRows() {
        $('#search-results > div.row.result-row').remove();
    }

    function createURL(searchString) {
        return BASE_URL + searchString + API_KEY;
    }

    function doGifSearch(url) {
        $.ajax({ 
            type: "GET",
            dataType: "json",
            url: url,
            success: function(data) {        
                onDataReturn(data);
            }, 
            error: function () {
                alert('Unable to grab gifs :-(');
            }
        });
    }

    $(document).on('click', 'button.animal-button', function () {
        // clear previous search results from screen
        clearAllResultRows();

        var searchString = this.textContent;
        var url = createURL(searchString);
        doGifSearch(url);
    });

    $('#submit-button').click(function () {
        // clear previous search results from screen
        clearAllResultRows();

        // get url search string value
        var searchString = $('#add-animal-input').val();
        
        // format it the way giphy likes
        var url = createURL(searchString);
        doGifSearch(url);
    });

    initAnimals();
});