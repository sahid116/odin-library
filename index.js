let myLibrary=[];

function Book(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
}

function render(){
    let libraryEl=document.querySelector('#library')
   libraryEl.innerHTML="";
    for(let i=0;i<myLibrary.length;i++){
        let book=myLibrary[i]
        let BookEl=document.createElement('div')
        BookEl.setAttribute("class","book-card")
        BookEl.innerHTML=`<div class="card-header">
             <h3 class="title">${book.title}</h3>
             <h5 class="author">${book.author}</h5>
             </div>
             <div class="card-body">
             <p>${book.pages} pages</p>
             <p class="read-status">${book.read?"Read":"Not Read yet"} </p>
             <button class="remove-btn" onclick="remove(${i})">Remove</button>
             </div>
        `
        libraryEl.appendChild(BookEl)
    }
     
}
function remove(index){
    myLibrary.splice(index,1);
    render();
}
function addBooktoLibrary(){
    let author=document.querySelector("#Author").value;
    let title=document.querySelector('#title').value;
    let pages=document.querySelector('#pages').value;
    let read=document.querySelector('#read').checked;
    let mybook=new Book(title,author,pages,read)
    myLibrary.push(mybook)
    render()
}

let newBookbtn=document.querySelector('#newBook');
let newForm = document.querySelector("#newForm");
newBookbtn.addEventListener('click',function(){
    newForm.style.display='block';
})

newForm.addEventListener('submit',function(e){
    e.preventDefault()
    addBooktoLibrary()
})