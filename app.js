const imageInp = document.getElementById("imageInp");
const emptyDiv = document.getElementById("emptyDiv");
const nextBtn = document.getElementById("nextBtn");
const imgArr = [];
let i = 0;

window.addEventListener("load", function () {
  if (imgArr.length === 0) {
    emptyDiv.innerHTML = `
       
        <img class="h-[100%] object-fit max-w-full p-0" src="https://imgs.search.brave.com/l-dkto_jaR9Gz9ZNO_redhjJ1qT6Bmg5B5sLNH5wDSc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2p1/ZXJnZW53ZWIvSmtJ/bWFnZVBsYWNlaG9s/ZGVyL21hc3Rlci9p/bWFnZXMvcGxhY2Vo/b2xkZXJpbWFnZS5q/cGc_cmF3PXRydWU" alt="image description">
        
                `;
  }
});

imageInp.addEventListener("change", function (e) {
  const files = e.target.files;
  storeImages(files);
});

function storeImages(arr) {
  //function to store images
  for (let i = 0; i < arr.length; i++) {
    const url = URL.createObjectURL(arr[i]); //URL object given by javascript
    imgArr.push(url);
  }
  return displayImages(imgArr);
}

function displayImages(arr) {
  //function to display images

  emptyDiv.innerHTML = `
       
    <img class="h-full object-fit max-w-full" src=${arr[i]} alt="image description">
    
            `;
}

nextBtn.addEventListener("click", function () {
  i++;
  nextBtn.innerHTML = i;
  displayImages(imgArr);
  console.log(i);
  if (i == imgArr.length - 1) {
    i = 0;
  }
});
