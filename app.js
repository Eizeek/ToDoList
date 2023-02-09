let  input = document.getElementById("input")
let btn = document.getElementById("btn")
let ulist = document.getElementById("list")


// // btn.addEventListener("click",()=>{
// // if (input.value === ""){
// // alert("Please add what to do")
// // }
// // else{
// // let liste = document.createElement("li");
// // liste.textContent = input.value;
// // ulist.append(liste);
// // input.value = "";

// // }
// // })




// btn.addEventListener("click",()=>{
// let  listarr =  [];
// listarr.push({id: Math.random(), data: input.value});

// listarr.forEach(e=>{
//     let liste = document.createElement("li");
//     liste.textContent = input.value ;
//     let close = document.createElement("i");
//     close.className = 'fa-solid fa-xmark';
//     liste.append(close);

//     ulist.append(liste);
    

//     close.addEventListener("click",()=>{

// liste.remove();


//     })
 
// })

// })




btn.addEventListener("click", () => {
  let listarr = JSON.parse(localStorage.getItem("listarr")) || [];
  listarr.push({ id: Math.random(), data: input.value });
  localStorage.setItem("listarr", JSON.stringify(listarr));
  ulist.innerHTML = [];
  listarr.forEach(e => {
    
    let liste = document.createElement("li");
    liste.textContent = e.data;
    let close = document.createElement("i");
    close.className = "fa-solid fa-xmark";
    liste.appendChild(close);

    close.addEventListener("click", () => {
      liste.remove();
      let updatedList = listarr.filter(el => el.id !== e.id);
      localStorage.setItem("listarr", JSON.stringify(updatedList));
    });
    
     ulist.appendChild(liste);
  });
  
});
