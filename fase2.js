const charTypes = {
    vowel: new RegExp(/[aeiou]/, "i"),
    consonant: new RegExp(/[bcdfghjklmnñpqrstvwxyz]/, "i"),
    number: new RegExp(/[0-9]/, "i"),
    
    verify(char) {
        if (this.vowel.test(char)) return "vowel";
        if (this.consonant.test(char)) return "consonant";
        if (this.number.test(char)) return "number";
    }
}

function fase2() {
    const myName = "Dari0 Scattolini";
    console.log("Partimos del nombre " + myName);
    
    for (let char of myName) {
        switch (charTypes.verify(char)) {
            case "vowel":
                console.log("He encontrado la VOCAL: " + char);
                break;
            case "consonant":
                console.log("He encontrado la CONSONANTE: " + char);
                break;
            case "number":
                console.log("Los nombres de persona no contienen el número: " + char);
                break;
        }
    }
}