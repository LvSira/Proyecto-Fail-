const Juegos = [
    {
      title: "Grand Theft Auto: V",
      image:
        "https://i.postimg.cc/tg7BVV76/1366-2000.jpg",
      description: "Acción, Crimen",
    },
    {
      title: "The Binding Of Isaac: Repentance",
      image:
        "https://i.postimg.cc/yNd7gnFT/capsule-616x353.jpg",
      description: "Roguelike, Indie",
    },
    {
      title: "Sekiro: Shadows Die Twice",
      image:
        "https://i.postimg.cc/3JR1qvCc/Sekiro-art.jpg",
      description: "Accion, Samurais",
    },
    {
      title: "Elden Ring",
      image:
        "https://i.postimg.cc/HnBgkyVN/apps-30323-14537704372270848-6ecb6038-5426-409a-8660-158d1eb64fb0.jpg",
      description: "Accion, Rol",
    },
    {
      title: "Garry's Mod",
      image:
        "https://i.postimg.cc/ZRmPTBkp/header.jpg",
      description: "Rol, Sandbox, Multijugador",
    },
    {
      title: "The Forest",
      image:
        "https://i.postimg.cc/yNd7gnFT/capsule-616x353.jpg",
      description: "Supervivencia, Horror",
    },
    {
      title: "Minecraft",
      image:
      "https://i.postimg.cc/Fz92JHSJ/images.jpg",
      description: "Sandbox, Multijugador, Solojugador",
    },
    {
      title: "Persona 5: Royale",
      image:
      "https://i.postimg.cc/fWJptyJm/persona-5-royal.jpg",
      description: "Acción, Rol, Anime",
    },
    {
      title: "Dragon Ball Super: Sparking Zero",
      image:
        "https://i.postimg.cc/431z8fM5/DBSZ-banner-mobile.jpg",
      description: "Anime, Multijugador, Accion",
    },
    {
      title: "Mortal Kombat",
      image:
      "https://i.postimg.cc/wMCGH5zH/header-1.jpg",
      description: "Acción, Violencia",
    },
    {
      title: "Red Dead Redemption II",
      image:
      "https://i.postimg.cc/T20j6JRc/1019-producto-red-dead-redemption-2-ps4-1383.jpg",
      description: "Acción, Aventura, Solojugador",
    },
    {
      title: "Apex Legends",
      image:
      "https://i.postimg.cc/zfN3v47H/header-2.jpg",
      description: "Multijugador, Accion",
    },
    {
      title: "God Of War: Ragnarok",
      image:
      "https://i.postimg.cc/sg4GYVv4/god-of-war-ragnarok-20221131016774-1.jpg",  
      description: "Acción, Aventura, Fantasía",
    },
    {
      title: "Star Wars: Battlefront II",
      image:
      "https://i.postimg.cc/DyVc5wy9/images-1.jpg",
      description: "Multijugador, Ciencia ficcion",
    },
    {
      title: "Sonic x Shadow Generations",
      image:
        "https://i.postimg.cc/HsprTqSJ/images-2.jpg",
      description: "Aventura, Plataformas",
    },
    {
      title: "Baldur's Gate III",
      image:
        "https://i.postimg.cc/MpVNtLSD/apps-16348-13979283744563866-8ade8915-d9bd-4323-a968-869ea471a077.jpg",
      description: "Rol, Aventura, Sandbox",
    },
    {
      title: "Devil May Cry V",
      image:
      "https://i.postimg.cc/QCMVJ5KQ/Vf-NZh8pg3-Jt-Im-OYNs-WMwfw1-H.jpg",
      description: "Accion, Ciencia Ficción,",
    },
    {
      title: "Call Of Duty: Black Ops 6",
      image:
        "https://i.postimg.cc/cCWCPwnt/Call-Of-Duty-Img.jpg",
         description: "Drama, Accion, Shooter",
    },
    {
      title: "Fifa 24",
      image:
      "https://i.postimg.cc/NjxMSp86/FifaImg.jpg",
      description: "Deportes, Multijugador",
    },
    {
      title: "Killer Bean forever",
      image:
      "https://i.postimg.cc/4yNyJtJK/capsule-616x353-2.jpg",
      description: "Acción, Aventura",
    },
    {
      title: "Resident Evil 4(Remake)",
      image:
      "https://i.postimg.cc/mgMHpYhR/maxresdefault.jpg",
      description: "Accion, Aventura, Horror",
    },
    {
      title: "Street Fighter 6",
      image:
      "https://i.postimg.cc/hPK4RVCc/images-3.jpg",
      description: "Accion, Multijugador",
    },
    {
      title: "Star Wars Jedi: Survivor",
      image:
      "https://i.postimg.cc/5N8LXLvX/1019-producto-star-wars-jedi-survivor-3055.jpg",
      description: "Aventura, Ciencia Ficcion",
    },
    {
      title: "Howarts Legacy",
      image:
      "https://i.postimg.cc/JzbxCSKd/images-4.jpg",
      description: "Aventura, Sandbox, Ciencia Ficción",
    },
    {
      title: "Diablo IV",
      image:
      "https://i.postimg.cc/44VQ9DR4/images-5.jpg",
      description: "Sandbox, Aventura",
    },
  ];
  
  function mostrarJuegos(){
    const games = document.getElementById('catalogo-Juegos');
    Juegos.forEach (Juego => {
        const divJuego = document.createElement('div');
        div.classList.add('Product'); 
        
        const ImgJuego = document.createElement('img');
        ImgJuego.src = Juego.image;
        ImgJuego.alt = Juego.title;

        const h3Juego = document.createElement('h3')
        h3Juego.textContent = Juego.title;

        const pJuego = document.createElement('p');
        pJuego.textContent = Juego.description;

        divJuego.appendChild(ImgJuego);
        divJuego.appendChild(h3Juego);
        divJuego.appendChild(pJuego);

        games.appendChild(divJuego);
    
  });
}

document.addEventListener('DOMContentLoaded', mostrarJuegos);

function toggleMenu(){
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('active');
}

function showContactPopup(){
    event.preventDefault();
        document.getElementById('contact-popup').style.display = 'block';
    }
function closePopup(){
    document.getElementById('contact-popup').style.display = 'none';
}