console.log('***** Music Collection *****')

let collection = [];
let addToCollection = (title, artist, yearPublished) => {  
    //creates object with title, artist, and yearPublished properties
    let newSong = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    //pushes object into collection array
    collection.push(newSong);
    //returns newly created object
    return newSong;
}

//adding ablums to collection array by testing addToCollection()
console.log(addToCollection('Wasting Light', 'Foo Fighters', 2011));
console.log(addToCollection('Coastin\'', 'Iration', 2020));
console.log(addToCollection('Master of Puppets', 'Metallica', 1986));
console.log(addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', 1999));
console.log(addToCollection('Back In Black', 'AC/DC', 1980));
console.log(addToCollection('Hybrid Theory', 'Linkin Park', 2000));
console.log(collection);

let showCollection = array => {
    //logs number of albums in collection
    console.log('Number of albums:', array.length);
    //iterates over each object and logs its properties in the string below
    array.forEach(album => {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`)
    });
}

//testing showCollection()
showCollection(collection);

let findByArtist = (array, name) => {
    //empty array
    let artistArray = [];
    //Compares each ablum's .artist property to value of name argument
    array.forEach(album => {
        //pushes matched name into new array
        if (name === album.artist) {
            artistArray.push(name);
        }
    });
    //returns array of matches from forEach iterator
    return artistArray;
}

//testing findByArtist()
console.log('Test - should return Foo Fighters:', findByArtist(collection, 'Foo Fighters'));

//Stretch Goals

function search(array, object) {
    let match = [];
    //if object is truthy (not an empty object)
    if ((object) && (Object.keys(object).length > 0)) {
        console.log('here')
        array.forEach(album => {
            if ((album.title === object.title) && (album.artist === object.artist) && (object.yearPublished === object.yearPublished)) {
                match.push(object);
            };
        });
        return match;
    } else {
        return collection;
    }
}

console.log('Test 1 - should return collection array:', search(collection));
console.log('Test 2 - should return collection array:', search(collection, {}));
console.log('Test 3 - should return collection array:', search());
console.log('Test 4 - should return empty array', search(collection, {artist: 'Ray Charles', yearPublished: 1957}));
console.log('Test 5 - should return array of matched result:', search(collection, {title: 'Wasting Light', artist: 'Foo Fighters', yearPublished: 2011}))
