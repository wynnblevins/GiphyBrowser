'use strict';

$(document).ready(function () {
    var BASE_URL = 'https://api.giphy.com/v1/gifs/search?q=';
    var API_KEY = '&api_key=Sa9egT2O8QKTXw9j87UZM9BcTQ5NxjMv';
    var animals = ['Squirrel', 'Cat', 'Dog', 'Crab', 'Chimpanzee', 'Aligator',
        'Rat', 'Turtle', 'Snake', 'Penguin', 'Ostrich', 'Zebra', 'Skunk', 
        'Pig', 'Gorilla', 'Shark', 'Blue Whale', 'Aardvark', 'Cow', 'Horse', 
        'Antelope', 'Lion', 'Tiger', 'Bear', 'Velocorapter', 'Eagle', 'Sheep',
        'Yeti', 'Jackalope', 'Sasquatch', 'Chupacabra', 'Baboon', 'Ermine', 'Fox',
        'Hedgehog', 'Iguana', 'Jackrabbit', 'Killer Whale', 'Lemur', 'Mongoose'
    ];

    function createRowDiv() {
        return $('<div class="row"></div>');
    }

    function onDataReturn(responseData) {
        var gifData = null, imageString = null, row = null;
        
        for (var i = 0; i < responseData.data.length; i++) {
            if (i % 4 === 0) {
                row = createRowDiv();
                $('#search-results').append(row);
            }
        
            var $col = $('<div class="col-sm-3"><div>');
            row.append($col);
            
            imageString = '<img class="img-responsive" src="' + 
            responseData.data[i].images.fixed_height_still.url + '"/>'
        
            $col.append(imageString);
        }
    }

    function createURL(searchString) {
        return BASE_URL + searchString + API_KEY;
    }

    function initAnimals() {
        var $animalElements = $('#gif-buttons');
        
        animals.forEach(function (animal) {
            $animalElements.append(`<button type="button" class="animal-button 
                slight-right-margin sligh-left-margin slight-top-margin">` + 
                animal + '</button>');
        });
    }

    $('#submit-button').click(function () {
        // get url 
        var searchString = $('#add-animal-input').val();
        
        // format it the way giphy likes
        var url = createURL(searchString);

        $.ajax({ 
            type: "GET",
            dataType: "json",
            url: url,
            success: function(data){        
                onDataReturn(data);
            }, 
            error: function () {
                alert('Unable to grab gifs :-(');
            }
        });
    });

    initAnimals();
});