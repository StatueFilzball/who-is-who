class Character{
    constructor(name, isFemale, age, hasEyewear, hasHeadwear, billboardHot100, colorImage,bwImage){
        this.name = name,
        this.isFemale = isFemale,
        this.age = age
        this.hasEyewear = hasEyewear,
        this.hasHeadwear = hasHeadwear,
        this.billboardHot100 = billboardHot100,
        this.colorImage = colorImage,
        this.bwImage = bwImage
    }

}

const wuTangClan = new Character("Wu Tang Clan", false, 53, false, true, 0, "./images/images-color/wu-tang-clan-square.png", "./images/images-bw/i24_wu-tang-clan-square.png")
const carlosSantana = new Character("Carlos Santana", false, 75, false, true, 1, "./images/images-color/Carlos-Santana-Square.png", "./images/images-bw/i06_carlos-santana-square.png")
const coldplay = new Character("Coldplay", false, 44, false, true, 24, "./images/images-color/Coldplay-Square.jpg", "./images/images-bw/i07_coldplay-square.jpg")
const kendrickLamar = new Character("Kendrick Lamar", false, 35, false, true, 69, "./images/images-color/Kendrick-Lamar-Square.png", "./images/images-bw/i12_kendrick-lamar-square.png")
const robbieWilliams = new Character("Robbie Williams", false, 48, true, false, 2, "./images/images-color/Robbie-Williams-Square.png", "./images/images-bw/i18_robbie-williams-square.png")
const backstreetBoys = new Character("Backstreet Boys", false, 46, true, false, 18, "./images/images-color/Backstreet-Boys-Square.jpg", "./images/images-bw/i04_backstreet-boys-square.jpg")
const snoopDogg = new Character("Snoop Dogg", false, 51, true, false, 45, "./images/images-color/Snoop-Dogg-Square.png", "./images/images-bw/i20_snoop-dogg-square.png")
const hanson = new Character("Hanson", false, 39, false, false, 3, "./images/images-color/Hanson-Square.png", "./images/images-bw/i10_hanson-square.png")
const drDre = new Character("Dr Dre", false, 57, false, false, 16, "./images/images-color/Dr-Dre-Square.png", "./images/images-bw/i09_dr-dre-square.png")
const shawnMendes = new Character("Shawn Mendes", false, 24, false, false, 17, "./images/images-color/Shawn-Mendes-Square.png", "./images/images-bw/i19_shawn-mendes-square.png")
const oneDirection = new Character("One Direction", false, 30, false, false, 29, "./images/images-color/One-Direction-Square.png", "./images/images-bw/i16_one-direction-square.png")
const justinBieber = new Character("Justin Bieber", false, 28, false, false, 104, "./images/images-color/Justin-Bieber-Square.jpg", "./images/images-bw/i11_justin-bieber-square.jpg")
const missyElliot = new Character("Missy Elliot", true, 51, false, true, 0, "./images/images-color/Missy-Elliot-Square.jpg", "./images/images-bw/i15_missy-elliot-square.jpg")
const destinysChild = new Character("Destiny's Child", true, 42, false, true, 14, "./images/images-color/Destinys-Child-Square.png", "./images/images-bw/i08_destinys-child-square.png")
const britneySpears = new Character("Britney Spears", true, 41, false, true, 46, "./images/images-color/Britney-Spears-Square.png", "./images/images-bw/i05_britney-spears-square.png")
const aliciaKeys = new Character("Alicia Keys", true, 41, true, false, 28, "./images/images-color/Alicia-Keys-Square.jpg", "./images/images-bw/i02_alicia-keys-square.jpg")
const mariahCarey = new Character("Mariah Carey", true, 52, true, false, 49, "./images/images-color/Mariah-Carey-Square.png", "./images/images-bw/i13_mariah-carey-square.png")
const rihanna = new Character("Rihanna", true, 34, true, false, 63, "./images/images-color/Rihanna-Square.png", "./images/images-bw/i17_rihanna-square.png")
const spiceGirls = new Character("Spice Girls", true, 48, true, false, 8,"./images/images-color/Spice-Girls-Square.jpg", "./images/images-bw/i21_spice-girls-square.jpg")
const tlc = new Character("TLC", true, 52, false, true, 16, "./images/images-color/TLC-Square.jpg", "./images/images-bw/i23_tlc-square.jpg")
const adele = new Character("Adele", true, 34, false, false, 25, "./images/images-color/Adele-Square.png", "./images/images-bw/i01_adele-square.png")
const pointerSisters = new Character("Pointer Sisters", true, 72, false, false, 26, "./images/images-color/The-Pointer-Sisters Square.jpg", "./images/images-bw/i22_the-pointer-sisters-square.jpg")
const mileyCyrus = new Character("Miley Cyrus", true, 29, false, true, 53, "./images/images-color/Miley-Cyrus-Square.jpg", "./images/images-bw/i14_miley-cyrus-square.jpg")
const arianaGrande = new Character("Ariana Grande", true, 29, false, false, 71, "./images/images-color/Ariana-Grande-Square.png", "./images/images-bw/i03_ariana-grande-square.png")

const characterArray = [wuTangClan, carlosSantana, coldplay, kendrickLamar, robbieWilliams, backstreetBoys, snoopDogg, hanson, drDre, shawnMendes, oneDirection, justinBieber, missyElliot, destinysChild, britneySpears, aliciaKeys, mariahCarey, rihanna, spiceGirls, tlc, adele, pointerSisters, mileyCyrus, arianaGrande]
const yourIdentity = characterArray[Math.floor(Math.random()*characterArray.length)]
console.log("The Winner Pick", yourIdentity)


const myAudio = document.getElementById("myAudio")
function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  }

let guessCount = 0
const imgElements = document.querySelectorAll("img")
const olElement = document.getElementById("guess-history")
const guessboxElement = document.getElementById("guess-box")
const instructionsElement = document.getElementById("instruction")
const audioElements = document.querySelectorAll("audio")
for (let i=0; audioElements.length; i++){
    audioElements[i].volume = 0.15
}

function selectorManipulator(buttonInput) {

if(buttonInput === 1){
    guessboxElement.innerHTML = `<p>I think I am
<button class="button-style" onclick="valueCheckerSex(true); togglePlay()">Female</button>
<button class="button-style" onclick="valueCheckerSex(false); togglePlay()">Male</button></p>`
}

if(buttonInput === 2){
    guessboxElement.innerHTML = `<p>I think I am between
<span><input type="number" id="firstValue"></input><span> and <span><input type="number" id="secondValue"></input><span> years old.</p> <button class="button-style" onclick="valueCheckerAge()">Hit it</button>`
}

if(buttonInput === 3){
    guessboxElement.innerHTML = `<p>I think I am
<button class="button-style" onclick="valueCheckerEyewear(true)">wearing glasses</button>
<button class="button-style" onclick="valueCheckerEyewear(false)">not wearing glasses</button></p>`
}

if(buttonInput === 4){
    guessboxElement.innerHTML = `<p>I think I am
<button class="button-style" onclick="valueCheckerHeadwear(true)">wearing headwear</button>
<button class="button-style" onclick="valueCheckerHeadwear(false)">not wearing headwear</button></p>`
}

if(buttonInput === 5){
    guessboxElement.innerHTML = `<p>I think I had between
<span><input type="number" id="firstValueBillBoard"></input><span> and <span><input type="number" id="secondValueBillboard"></input><span> hits in the Billboard Hot 100.</p> <button class="button-style" onclick="valueCheckerBillboard()">Hit it</button><br><p>Note: The Billboard Hot 100 is the industry standard record chart in the US for songs, published weekly. Charts are based on sales, radio play, and streaming in the US.<p>`
}

}

function valueCheckerSex(value){  

    //setting up the guess history

    if(value === true && value !== yourIdentity.isFemale){
    let liElement=document.createElement("li")
liElement.innerText = "You guessed wrong. Your Character is male."
document.getElementById("guess-history").appendChild(liElement)}
        else if(value === false && value !== yourIdentity.isFemale){
            let liElement=document.createElement("li")
        liElement.innerText = "You guessed wrong. Your Character is female."
        document.getElementById("guess-history").appendChild(liElement)}
        else if(value === false && value === yourIdentity.isFemale){
            let liElement=document.createElement("li")
        liElement.innerText = "You guessed right. Your Character is male."
        document.getElementById("guess-history").appendChild(liElement)}
        else if(value === true && value === yourIdentity.isFemale){
            let liElement=document.createElement("li")
        liElement.innerText = "You guessed right. Your Character is female."
        document.getElementById("guess-history").appendChild(liElement)}

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].isFemale !== yourIdentity.isFemale){ 


characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 


pictureSwapper()

 }
    }
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    if(characterArray.length === 1){
        endGame()
    } else{
    rickAstley()
    }

}

function valueCheckerEyewear(valueEyewear){

    if(valueEyewear === true && valueEyewear !== yourIdentity.hasEyewear){
        let liElement=document.createElement("li")
    liElement.innerText = "You guessed wrong. Your Character is not wearing glasses."
    document.getElementById("guess-history").appendChild(liElement)}
            else if(valueEyewear === false && valueEyewear !== yourIdentity.hasEyewear){
                let liElement=document.createElement("li")
            liElement.innerText = "You guessed wrong. YourCharacter is wearing glasses."
            document.getElementById("guess-history").appendChild(liElement)}
            else if(valueEyewear === false && valueEyewear === yourIdentity.hasEyewear){
                let liElement=document.createElement("li")
            liElement.innerText = "You guessed right. Your Character is not wearing glasses."
            document.getElementById("guess-history").appendChild(liElement)}
            else if(valueEyewear === true && valueEyewear === yourIdentity.hasEyewear){
                let liElement=document.createElement("li")
            liElement.innerText = "You guessed right. Your Character is wearing glasses."
            document.getElementById("guess-history").appendChild(liElement)}

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].hasEyewear !== yourIdentity.hasEyewear){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 



pictureSwapper()


 }
    }
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    if(characterArray.length === 1){

    endGame()}
    renderGuessbox()
}

function valueCheckerHeadwear(valueHeadwear){

    if(valueHeadwear === true && valueHeadwear !== yourIdentity.hasHeadwear){
        let liElement=document.createElement("li")
    liElement.innerText = "You guessed wrong. Your Character is not wearing a hat."
    document.getElementById("guess-history").appendChild(liElement)}
            else if(valueHeadwear === false && valueHeadwear !== yourIdentity.hasHeadwear){
                let liElement=document.createElement("li")
            liElement.innerText = "You guessed wrong. Your Character is wearing a hat."
            document.getElementById("guess-history").appendChild(liElement)}
            else if(valueHeadwear === false && valueHeadwear === yourIdentity.hasHeadwear){
                let liElement=document.createElement("li")
            liElement.innerText = "You guessed right. Your Character is not wearing a hat."
            document.getElementById("guess-history").appendChild(liElement)}
            else if(valueHeadwear === true && valueHeadwear === yourIdentity.hasHeadwear){
                let liElement=document.createElement("li")
            liElement.innerText = "You guessed right. Your Character is wearing a hat."
            document.getElementById("guess-history").appendChild(liElement)}

    for(let i = 0; i < characterArray.length; i++){
        
        if(characterArray[i].hasHeadwear !== yourIdentity.hasHeadwear){

            characterToSwapImage = characterArray[i]
            characterArray.splice(i, 1) 
            i -= 1 




            pictureSwapper()

}
    }
    
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    if(characterArray.length === 1){

        endGame()}
        renderGuessbox()
    
}

function valueCheckerAge(){

    let lowValue = document.getElementById("firstValue").value
    let highValue = document.getElementById("secondValue").value

    if(lowValue <= yourIdentity.age && yourIdentity.age <= highValue){
        let liElement=document.createElement("li")
    liElement.innerText = `You guessed right. Characters younger than ${lowValue} or older than ${highValue} years were removed.`
    document.getElementById("guess-history").appendChild(liElement)}
            else{
                let liElement=document.createElement("li")
            liElement.innerText = `You guessed wrong. All characters between ${lowValue} and ${highValue} years were removed.`
            document.getElementById("guess-history").appendChild(liElement)}
            

if(lowValue <= yourIdentity.age && highValue >= yourIdentity.age){
    console.log("Age guess correct triggered")

    for(let i = 0; i < characterArray.length; i++){
        
        if(lowValue >= characterArray[i].age || highValue <= characterArray[i].age){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 



pictureSwapper()

        }
 }
    } 
    
    
else if(lowValue > yourIdentity.age || highValue < yourIdentity.age){
    console.log("Age guess incorrect triggered")
        for(let i = 0; i < characterArray.length; i++){
        
            if(lowValue <= characterArray[i].age && highValue >= characterArray[i].age){ //this is always gonna be true
    
    characterToSwapImage = characterArray[i]
    characterArray.splice(i, 1) 
    i -= 1 
    
    
    pictureSwapper()

            }
     }
    }
    guessCounter()
    guessProbability()
    console.log("Updated array",characterArray)
    if(characterArray.length === 1){

        endGame()}
        renderGuessbox()

}

function valueCheckerBillboard(){

    let lowValue = document.getElementById("firstValueBillBoard").value
    let highValue = document.getElementById("secondValueBillboard").value

    if(lowValue <= yourIdentity.billboardHot100 && yourIdentity.billboardHot100 <= highValue){
        let liElement=document.createElement("li")
    liElement.innerText = `You guessed right. Characters with less than ${lowValue} or more than ${highValue} Hot100 Hits were removed.`
    document.getElementById("guess-history").appendChild(liElement)}
            else{
                let liElement=document.createElement("li")
            liElement.innerText = `You guessed wrong. Characters with ${lowValue} to ${highValue} Hot100 Hits were removed.`
            document.getElementById("guess-history").appendChild(liElement)}

if(lowValue <= yourIdentity.billboardHot100 && highValue >= yourIdentity.billboardHot100){
    console.log("Age guess correct triggered")

    for(let i = 0; i < characterArray.length; i++){
        
        if(lowValue > characterArray[i].billboardHot100 || highValue < characterArray[i].billboardHot100){

characterToSwapImage = characterArray[i]
characterArray.splice(i, 1) 
i -= 1 


pictureSwapper()

        }
 }
    } 
    
    
else if(lowValue > yourIdentity.billboardHot100 || highValue < yourIdentity.billboardHot100){
    console.log("Age guess incorrect triggered")
        for(let i = 0; i < characterArray.length; i++){
        
            if(lowValue <= characterArray[i].billboardHot100 && highValue >= characterArray[i].billboardHot100){ //this is always gonna be true
    
    characterToSwapImage = characterArray[i]
    characterArray.splice(i, 1) 
    i -= 1 
    

    pictureSwapper()

            }
     }
    }
    console.log("Updated array",characterArray)
    guessCounter()
    guessProbability()
    if(characterArray.length === 1){

        endGame()}
        renderGuessbox()
}


function rickAstley(){
    guessboxElement.innerHTML = `<div id="bunny-box-full"><div id="bunny-box"><h2>OMG, Rick Astley is trying a comeback</h2><p>Hey there, still groovin' to <i>Never gonna give you up</i>? Wanna buy a copy? $10 for a signed one.</p><div id="bunny-buttons"><button style="margin-Right:5px" class="button-style" onclick="renderGuessbox(); togglePlay()">No. Why are you even here?</button><button class="button-style" onclick="gameOver()">Just $10? Sure!</button></div></div><br><img src=./images/images-color/rick-astley.gif></div>`
}

function renderGuessbox(){            
    

    guessboxElement.innerHTML = `<h2>Take your guess!</h2><p>I got a feeling I know stuff about my</p>
    <div id="renderGuessbox"><button class="button-style" onclick="selectorManipulator(1)">Sex</button>
    <button class="button-style" onclick="selectorManipulator(2)">Age</button>
    <button class="button-style" onclick="selectorManipulator(3)">Eyewear</button>
    <button class="button-style" onclick="selectorManipulator(4)">Headwear</button>
    <button class="button-style" onclick="selectorManipulator(5)">Billboard Success</button></div>`
    
}

function gameOver(){
    instructionsElement.innerHTML = `<p>You lost. You really did not read the instructions, did you :(</p><button class="button-style" onClick="history.go(0);">Try again</button>`
    instructionsElement.style.justifyContent = "center"
    instructionsElement.style.alignItems = "center"
}

function guessCounter(){
guessCount++

document.getElementById("counter").innerText = `${guessCount}`
} 

function guessProbability(){
    let winningChance = Math.floor(100/ characterArray.length)
    document.getElementById("guess-probability").innerHTML = `${winningChance}`
}

function pictureSwapper(){
    for(let j = 0; j < imgElements.length; j++){
      if(imgElements[j].alt === characterToSwapImage.name){
          imgElements[j].src = characterToSwapImage.bwImage
      }
  }
}

function endGame(){
    console.log("Endgame triggered")
    

    document.getElementById("instruction").innerHTML = `<p>Damn champ, you figured it out! You are ${yourIdentity.name}!</p><br><img src=${yourIdentity.colorImage}><br><p>Cool little fun fact: You are way better at DOM Manipulation than ${yourIdentity.name} ever will be. Keep rocking the Bootcamp, you little superstar!</p><br><button class="button-style" onClick="history.go(0);">Play again</button>`
    document.getElementById("instruction").classList = "endGameFlex"
    instructionsElement.style.justifyContent = "center"
    instructionsElement.style.alignItems = "center"
   
    }

function wrongGuess(){
    console.log("Am i triggered?")
    instructionsElement.innerHTML = `<p>Today ain't your lucky day :(</p><br><button class="button-style" onClick="history.go(0);">Try again</button>`
    instructionsElement.style.justifyContent = "center"
    instructionsElement.style.alignItems = "center"
}

function identityGuess(){
    console.log("Hiiiii")
    let inputStr = document.getElementById("myIdentityGuess").value
    console.log(inputStr)
    console.log(yourIdentity.name)
    if (inputStr === yourIdentity.name){
        endGame()
    } else{
        wrongGuess()
    }
}




