const canvasSketch = require("canvas-sketch");
const { createCanvas } = require("canvas");
const { sketch } = require("./sketch");

// Create a new 'node-canvas' interface
const canvas = createCanvas({
    
});
const settings = {
  // Pass in the Cairo-backed canvas
  canvas,
  // Optionally set dimensions / units / etc
  // ...
//   dimensions: [15000, 15000],
};
canvasSketch(sketch, settings).then(() => {
  // Once sketch is loaded & rendered, stream a PNG with node-canvas
  const out = fs.createWriteStream("output.png");
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log("Done rendering"));
});
