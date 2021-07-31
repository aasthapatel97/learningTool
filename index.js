firebase.database().ref();  // Specifies the database root
let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird2139279__340.webp",
    "answer": "Hummingbird"
    }
];

// Create/Update to database
// firebase.database().ref('deck/flashcards').set(myFlashcards);

// Remove myFlashcards from the database
// firebase.database().ref('deck/flashcards').remove();

// Read database
let fc = firebase.database().ref('deck/flashcards');
let jsonString;
// Tell Firebase to retrieve your data
fc.on("value", function(retrieve) {
    //Get the raw JSON data back from the database
    let queryData = retrieve.val();
    // Turn the data into a JSON String
    let jsonString = JSON.stringify(queryData);

    console.log (' JSON string:' + jsonString )
});
