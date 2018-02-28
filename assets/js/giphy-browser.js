(function () {
    'use strict';
    
    var API_KEY = 'Sa9egT2O8QKTXw9j87UZM9BcTQ5NxjMv';
    var animals = ['Squirrel', 'Cat', 'Dog', 'Crab', 'Chimpanzee', 'Aligator',
        'Rat', 'Turtle', 'Snake', 'Penguin', 'Ostrich', 'Zebra', 'Skunk', 
        'Pig', 'Gorilla', 'Shark', 'Blue Whale', 'Aardvark', 'Cow', 'Horse', 
        'Antelope', 'Lion', 'Tiger', 'Bear', 'Velocorapter', 'Eagle', 'Sheep',
        'Yeti', 'Jackalope', 'Sasquatch', 'Chupacabra', 'Baboon', 'Ermine', 'Fox',
        'Hedgehog', 'Iguana', 'Jackrabbit', 'Killer Whale', 'Lemur', 'Mongoose'
    ];

    function initAnimals() {
        var $animalElements = $('#gif-buttons');
        
        animals.forEach(function (animal) {
            $animalElements.append(`<button type="button" class="animal-button 
                slight-right-margin sligh-left-margin slight-top-margin">` + 
                animal + '</button>');
        });
    }

    initAnimals();
})();