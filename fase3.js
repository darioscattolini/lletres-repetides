function fase3() {
    const myName = "Dario Scattolini";
    const myNameMap = new Map();
    for (let char of myName) {
        if (myNameMap.has(char)) {
            currentCharAmount = myNameMap.get(char);
            currentCharAmount++;
            myNameMap.set(char, currentCharAmount);
        } else {
            myNameMap.set(char, 1);
        }
    }
    console.log(myNameMap);
}