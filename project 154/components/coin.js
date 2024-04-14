AFRAME.registerComponent("coin", {
  init: function () {
    for (var i = 1; i <= 10; i++) {
      const id = `coin${i}`;

      const posX = Math.random() * 100 + -50;
      const posY = Math.random() * 5 + 5;
      const posZ = Math.random() * 60 + -40;

      const position = { x: posX, y: posY, z: posZ };
      this.createCoins(id, position);
    }
  },
  createCoins: function (id, position) {
    const treasureEntity = document.querySelector("#island-model");
    var coinEl = document.createElement("a-entity");

    coinEl.setAttribute("id", id);
    coinEl.setAttribute("position", position);
    coinEl.setAttribute("material", "color", "#ff9100");
    coinEl.setAttribute('dynamic-body', 'mass: 0');
   
    coinEl.setAttribute("geometry", { primitive: "circle", radius: 1 });

    coinEl.setAttribute("animation", {
      property: "rotation",
      to: "0 360 0",
      loop: "true",
      dur: 1000,
    });  
     
    
    treasureEntity.appendChild(coinEl);
  }
});
AFRAME.registerComponent("coin", {
  init: function () {
    for (var i = 1; i <= 10; i++) {
      const id = `coin${i}`;

      const posX = Math.random() * 100 + -50;
      const posY = Math.random() * 5 + 5;
      const posZ = Math.random() * 60 + -40;

      const position = { x: posX, y: posY, z: posZ };
      this.createCoins(id, position);
    }
  },
  createFish: function (id, position) {
    const treasureEntity = document.querySelector("#island-model");
    var fishEl = document.createElement("a-entity");

    fishEl.setAttribute("id", id);
    fishEl.setAttribute("position", position);
    fishEl.setAttribute("gltf-model","./assets/models/fish/scene.gltf");
    fishEl.setAttribute('dynamic-body', 'mass: 0');
    
    treasureEntity.appendChild(coinEl);
  }
});
