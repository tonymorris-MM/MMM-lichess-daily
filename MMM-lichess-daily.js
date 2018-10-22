Module.register("MMM-lichess-daily", {
  // Module config defaults.
  defaults: {
      // blue, blue2, blue3, canvas, wood, wood2, wood3, maple, green, marble, brown, leather, grey, metal, olive, purple
      theme: "auto",
      // light, dark
      bg: "auto",
      width: "224px",
      height: "264px",
  },

  // Define start sequence.
  start: function() {
      Log.info("Starting module: " + this.name);
  },

  getDom: function() {
    var wrapper = document.createElement("div");

    var frame = document.createElement("iframe");
    frame.src = "http://lichess.org/training/frame?bg=" + this.config.bg + "&amp;theme=" + this.config.theme;
    frame.class = "lichess-training-iframe";
    frame.allowtransparency = "true";
    frame.frameBorder = "0";
    frame.style = "width: " + this.config.width + "; height: " + this.config.height + ";";

    wrapper.appendChild(frame);

    return wrapper;
  }, 
});
