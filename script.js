  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
  }

 // Disable form submissions if there are invalid fields
 (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  //hand made javacript

 function getandupdate(){
  console.log("Updating List...");
  tit = document.getElementById('title').value;
  desc = document.getElementById('description').value; 
  if (localStorage.getItem('itemsJson')==null){
    itemJsonArry = [];
    itemJsonArry.push([tit,desc]);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArry))
  }
  else{
     itemJsonArraystr = localStorage.getItem('itemsJson')
     itemJsonArray = JSON.parse(itemJsonArraystr);
     itemJsonArray.push([tit,desc]);
     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
  }
  update();

 }
  function update(){
    if (localStorage.getItem('itemsJson')==null){
      itemJsonArry = [];
      itemJsonArry.push([tit,desc]);
      localStorage.setItem('itemsJson',JSON.stringify(itemJsonArry))
    }
    else{
       itemJsonArraystr = localStorage.getItem('itemsJson')
       itemJsonArray = JSON.parse(itemJsonArraystr);
      
    }
    tablebody = document.getElementById("tablebody")
    let str = "";
    itemJsonArray.forEach((element, index) => {
      str += `
      <tr>
      <th scope="row">${index + 1}</th>
      <td>${element[0]}</td>
      <td>${element[1]}</td>
      <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})" type="submit">Delete</button></td>
    </tr>
     `
    });
    tablebody.innerHTML = str; 

  }
  add = document.getElementById("add");
  add.addEventListener("click", getandupdate);
  update();  
   function deleted(itemIndex){
        console.log("Delete", itemIndex);
        itemJsonArraystr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArraystr);
       // Delete itemindex element from the array
        itemJsonArray.splice(itemIndex, 1);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        update(); 
   }
   function clearStorage(){
    console.log('clearing the storage')
    itemJsonArraystr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArraystr);
       // Delete itemindex element from the array
        itemJsonArray.splice(0, itemJsonArray.length);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
     update();
   } 