AFRAME.registerComponent("school-playground", {
  init: function() {
    // Solution for Getting Entities.
    var sceneEl = document.querySelector("a-scene"); // Or this.el since we're in a component.
    console.log(sceneEl);
    console.log(sceneEl.querySelectorAll("a-entity"));
    console.log(sceneEl.querySelector("a-box"));
    console.log(sceneEl.querySelectorAll("a-sphere, a-cylinder"));
    console.log(sceneEl.querySelectorAll(".coolshape"));
  },
});

AFRAME.registerComponent("school-playground2", {
  init: function() {
    // Solution for Modifying Entities.
    var sceneEl = document.querySelector("a-scene");
    sceneEl
      .querySelector("a-box")
      .setAttribute("rotation", { x: 0, y: 0, z: 0 });
    sceneEl.querySelector("a-cylinder").setAttribute("geometry", "height", 0.5);
    sceneEl
      .querySelector("a-sphere")
      .setAttribute("material", { metalness: 1 });
  },
});

AFRAME.registerComponent("school-playground3", {
  init: function() {
    // Solution for Creating Entities.
    var sceneEl = document.querySelector("a-scene");

    for (var i = 0; i < 50; i++) {
      var boxEl = document.createElement("a-box");
      boxEl.setAttribute("material", { color: "#EF2D5E" });
      boxEl.setAttribute("position", {
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
        z: Math.random() * 20 - 10,
      });
      boxEl.setAttribute("scale", {
        x: Math.random() / 2,
        y: Math.random() / 2,
        z: Math.random() / 2,
      });
      sceneEl.appendChild(boxEl);
    }
  },
});

AFRAME.registerComponent("school-playground4", {
  init: function() {
    // Solution for Handling Events.
    var sceneEl = document.querySelector("a-scene");
    var boxEl = sceneEl.querySelector("a-box");

    boxEl.addEventListener("foo", function() {
      boxEl.setAttribute("color", "blue");
    });
    boxEl.emit("foo");
  },
});
