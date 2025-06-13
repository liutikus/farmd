const galleryContainer = document.querySelector(".gallery-container");

let cardGalleryHTML = "";

const galleryImagesRo = [
    "assets/img/blog/gallery-far-1.jpg",
"assets/img/blog/gallery-far-2.jpg",
"assets/img/blog/gallery-far-3.jpg",
"assets/img/blog/gallery-far-4.jpg",
"assets/img/blog/gallery-far-5.jpg",
"assets/img/blog/gallery-far-6.jpg",
"assets/img/blog/gallery-far-7.jpg",
"assets/img/blog/gallery-far-8.jpg",
"assets/img/blog/gallery-far-9.jpg",
"assets/img/blog/gallery-far-10.jpg",
"assets/img/blog/gallery-far-11.jpg",
"assets/img/blog/gallery-far-12.jpg",]

const galleryImagesRu = [
    "../assets/img/blog/gallery-far-1.jpg",
"../assets/img/blog/gallery-far-2.jpg",
"../assets/img/blog/gallery-far-3.jpg",
"../assets/img/blog/gallery-far-4.jpg",
"../assets/img/blog/gallery-far-5.jpg",
"../assets/img/blog/gallery-far-6.jpg",
"../assets/img/blog/gallery-far-7.jpg",
"../assets/img/blog/gallery-far-8.jpg",
"../assets/img/blog/gallery-far-9.jpg",
"../assets/img/blog/gallery-far-10.jpg",
"../assets/img/blog/gallery-far-11.jpg",
"../assets/img/blog/gallery-far-12.jpg",]



const RenderGallery = ()=>{
  let cardHTML = "";
  if (document.querySelector(".langInfo").innerHTML === "Румынский"){

 galleryImagesRu.forEach(img=>{
    cardHTML += `     <div class="process-block--style2 col-lg-3 col-md-6 ">
          <div class="process-block__body">
           <img src="${img}" alt="Gallery Image">
          </div>
        </div>
     `
})

  }else if(document.querySelector(".langInfo").innerHTML === "Română"){
  galleryImagesRo.forEach(img=>{
    cardHTML += `     <div class="process-block--style2 col-lg-3 col-md-6 ">
          <div class="process-block__body">
           <img src="${img}" alt="Gallery Image">
          </div>
        </div>
     `
})


  }
  galleryContainer.innerHTML = cardHTML;
}

RenderGallery();

