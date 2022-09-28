
function mortyCard(name, statusAndRace, life, lastKnownLocation, firstSeenIn, image){
    this.name = name;
    this.statusAndRace = statusAndRace;
    this.lastKnownLocation = lastKnownLocation;
    this.firstSeenIn = firstSeenIn;
    this.image = image; //this is a un url
    


    this.mortyCard = function(){
        console.log('Hi im '+ this.name)
    }
}

const mortyCharacter = new mortyCard();
console.log(mortyCard.name);
