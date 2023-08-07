const input = document.getElementById("inputValue")
const form = document.getElementById('form-submit')
 function fetchMeme(data){
    data.preventDefault();

    const search = input.Value;
    console.log(search)
fetch(`https://api.imgflip.com/get_memes`)
.then(respose => respose.json())
.then(data =>{
    console.log(data)
})
 }
 form.addEventListener('submit',fetchMeme)
 