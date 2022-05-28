


let slideshow_div=document.getElementById("images")
    let i=0;

    let id;

        let movies_arr=[
            "https://images6.alphacoders.com/114/thumbbig-1141749.webp",
            "https://images5.alphacoders.com/689/thumbbig-689398.webp",
            "https://images4.alphacoders.com/573/thumbbig-57394.webp",
            "https://images2.alphacoders.com/589/thumbbig-589553.webp",
            "https://images8.alphacoders.com/859/thumbbig-859672.webp",
            "https://images.alphacoders.com/306/thumbbig-306943.webp",
        ];

        let img = document.createElement("img");

       id= setInterval(function(){
         if(i==movies_arr.length){
             i=0
         }
         slideshow_div.innerHTML=null;

         img.src = movies_arr[i];
         
         slideshow_div.append(img)
         
         i++;
        },2000);
    
movie_data=[
    {
        name:"Future Fight",
        release_date:"15 Dec 2020",
        poster:"https://images6.alphacoders.com/978/thumbbig-978123.webp",
        imdb:"2.2",

    },
    {
        name:"Captain Marvel",
        release_date:"25 Dec 2019",
        poster:"https://images8.alphacoders.com/984/thumbbig-984103.webp",
        imdb:"2.1",
    },
    {
        name:"Iron Man",
        release_date:"25 feb 2011",
        poster:"https://images4.alphacoders.com/102/thumbbig-1026684.webp",
        imdb:"5.5",
    },
    {
        name:"Captain America",
        release_date:"15 april 2011",
        poster:"https://images5.alphacoders.com/102/thumbbig-1026685.webp",
        imdb:"4.2",
    },
    {
        name:"Marvel Agent",
        release_date:"15 april 2011",
        poster:"https://images8.alphacoders.com/100/thumbbig-1002390.webp",
        imdb:"3.2",
    },
    {
        name:"Spider Man",
        release_date:"18 april 2016",
        poster:"https://images2.alphacoders.com/102/thumbbig-1026683.webp",
        imdb:"5.2",
    },
    {
        name:"Avenger",
        release_date:"18 march 2014",
        poster:"https://images5.alphacoders.com/102/thumbbig-1028051.webp",
        imdb:"6.0",
    },
    {
        name:"Women",
        release_date:"14 dec 2017",
        poster:"https://images6.alphacoders.com/104/thumbbig-1042418.webp",
        imdb:"2.0",
    },
    {
        name:"Future Revoluation",
        release_date:"19 dec 2013",
        poster:"https://images4.alphacoders.com/117/thumbbig-1179096.webp",
        imdb:"4.0",
    },
]

localStorage.setItem("movies",JSON.stringify(movie_data));
let data =JSON.parse(localStorage.getItem("movies"));


  function displayData(data){
    document.querySelector("#movies").innerHTML="";
    data.map(function(ele){
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.poster;

        let l1=document.createElement("label");
        l1.innerText="Movie name:-"
        let name=document.createElement("h3");
        name.innerText=ele.name;

        let l2=document.createElement("label");
        l2.innerText="Release_date:-"
        let release_date=document.createElement("h3");
        release_date.innerText=ele.release_date;

        let l3=document.createElement("label");
        l3.innerText="Imdb rating:-"
        let imdb=document.createElement("h3");
        imdb.innerText=ele.imdb;

        div.append(image,l1,name,l2,release_date,l3,imdb);
        
        document.querySelector("#movies").append(div)
    })
  }

  function lowtohigh(){
     
      data.sort(function(a,b){
          return a.imdb-b.imdb;
      });
      displayData(data);
  }

  

  function hightolow(){
    data.sort(function(a,b){
        return b.imdb-a.imdb;
        
    })
    displayData(data);
}




  window.addEventListener("load",function(){
      displayData(data);
  });