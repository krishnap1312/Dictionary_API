async function gets(){
try {
    const heading = document.querySelector("#Heading");
    const word = document.querySelector("#word").value;
    const desword1 = document.querySelector("#king1");
    const desword2 = document.querySelector("#king2");
    const desword3 = document.querySelector("#king3");
    const synonym = document.querySelector("#king4");

    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const [data] = await res.json();

    heading.innerHTML = word;
     

    desword1.innerHTML = `Description 1 <br> ${data.meanings[0].definitions[0].definition} <br><br>`;
    desword2.innerHTML = `Description 2 <br> ${data.meanings[0].definitions[1].definition} <br><br>`;
    desword3.innerHTML = `Description 3 <br> ${data.meanings[0].definitions[2].definition} <br><br>`;
    synonym.innerHTML = `Synonyms <br> ${data.meanings[0].synonyms} <br><br>`;
    
} catch (error) {
    console.log(error);
}
}
