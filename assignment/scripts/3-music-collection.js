console.log('***** Music Collection *****')

let collection = [];
let addToCollection = (title, artist, yearPublished) => {  
    let newSong = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(newSong);
    return newSong;
}

console.log(addToCollection('Wasting Light', 'Foo Fighters', 2011));
console.log(addToCollection('Coastin\'', 'Iration', 2020));
console.log(addToCollection('Master of Puppets', 'Metallica', 1986));
console.log(addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', 1999));
console.log(addToCollection('Back In Black', 'AC/DC', 1980));
console.log(addToCollection('Hybrid Theory', 'Linkin Park', 2000));
console.log(collection);

