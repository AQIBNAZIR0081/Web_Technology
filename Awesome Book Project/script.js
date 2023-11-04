const mainfield = document.getElementById("Record");
const TitleInput = document.getElementById("title");
const AuthorInput = document.getElementById('author');

var btn = document.getElementById("button");
btn.onclick = function(){

    // Create the Paragraph Element at Runtime and Store the Input Value
    const containtitle = document.createElement('p');
    containtitle.textContent = (TitleInput.value);
    const containauthor = document.createElement('p');
    containauthor.textContent = (AuthorInput.value);

    // Create Button at Runtime and Add text In that Button
    const Removebutton = document.createElement('button');
    Removebutton.textContent = 'Remove';
    
    // Create Div Element at Runtime and Store All the Child in it
    const TitleAndAuthor = document.createElement('div');
    TitleAndAuthor.appendChild(containtitle);
    TitleAndAuthor.appendChild(containauthor);
    
    if(!TitleInput.value && !AuthorInput.value){
        alert("Please enter the input values");
    }else{
        TitleAndAuthor.appendChild(Removebutton);
    }

    // Insert New Record before the Previous Record
    // mainfield.insertBefore(TitleAndAuthor,mainfield.firstChild);
       mainfield.appendChild(TitleAndAuthor);

    // Remove the whole record by clicking remove button
    Removebutton.addEventListener('click', ()=>{
        mainfield.removeChild(TitleAndAuthor);
    });


    // Set the Attribute of created element on Runtime 
    TitleAndAuthor.setAttribute('class','values');
    Removebutton.setAttribute('id','removerecord');

    // Styling the Created element 
    TitleAndAuthor.style.display='flex';
    TitleAndAuthor.style.justifyContent='space-between';
    Removebutton.style.width = '60px';
    Removebutton.style.height='20px';
    Removebutton.style.marginTop= '15px';
    mainfield.style.margin = '5px';
}