const canvasSketch = require("canvas-sketch");
const load = require("load-asset");

const settings = {
  dimensions: [800, 800],
  fps: 30,
  // suffix: ".xd",
};

const bgImagePath = "/assets/bg.jpeg";

const imagePaths = [
  {
    id: 8,
    uuid: "ec439fea-7637-47a4-9631-901c8351aee3",
    imagePath: null,
    width: 327.02,
    height: 328.41,
    centerX: 402.02,
    centerY: 387.33,
    rotation: 0.0,
    color: '{"alpha":1,"hex":"#000000","cmyk":"0,0,0,1"}',
    fullColor: true,
    grading: false,
    opacity: 1.0,
    skewX: 0.0,
    skewY: 0.0,
    zIndex: 0,
    hasStaticImage: false,
    imageUrl: null,
    maskPath: null,
    dynamicImagesPath: "[]",
    mapConfig: null,
    coverMaskArea: false,
    rotationStep: 1.0,
    colors: [],
    colorLibraryId: null,
    imageLibraryId: 180384,
    imageLibraryObject: {
      ImageId: 5728653,
      position: 2,
      Path: "assets/head.png",
    },
    removeWhiteBackground: false,
    RemoveBackground: false,
    cartoonize: null,
    CutoutFace: null,
    removeBackgroundCOP: null,
    locked: false,
    visible: true,
  },
  {
    id: 9,
    uuid: "9cf61e95-bedb-4cb3-abb2-621321f2b0eb",
    imagePath: null,
    width: 268.74,
    height: 271.58,
    centerX: 395.68,
    centerY: 330.08,
    rotation: 0.0,
    color: '{"alpha":1,"hex":"#000000","cmyk":"0,0,0,1"}',
    fullColor: true,
    grading: false,
    opacity: 1.0,
    skewX: 0.0,
    skewY: 0.0,
    zIndex: 1,
    hasStaticImage: false,
    imageUrl: null,
    maskPath: null,
    dynamicImagesPath: "[]",
    mapConfig: null,
    coverMaskArea: false,
    rotationStep: 1.0,
    colors: [],
    colorLibraryId: null,
    imageLibraryId: 98933,
    imageLibraryObject: {
      ImageId: 2949249,
      position: 2,
      Path: "assets/hair.png",
    },
    removeWhiteBackground: false,
    RemoveBackground: false,
    cartoonize: null,
    CutoutFace: null,
    removeBackgroundCOP: null,
    locked: false,
    visible: true,
  },
];

const loadBackground = async (ctx, { width, height }) => {
  const image = await load(bgImagePath);
  // console.log(image);
  // Once the image is loaded, we can update the output
  // settings to match it
  // console.log(width, height, width/2, imageHolder.centerX)
  ctx.drawImage(image, 0, 0, width, height);
};

const loadHair = async (ctx, { width, height }) => {
  const imageHolder = imagePaths[1];
  const image = await load(imageHolder.imageLibraryObject.Path);
  // console.log(image);
  // Once the image is loaded, we can update the output
  // settings to match it
  console.log(
    image,
    (width - imageHolder.width) * 0.5,
    (height - imageHolder.height) * 0.5,
    imageHolder.width,
    image.height
  );
  ctx.drawImage(
    image,
    (width - imageHolder.width) * 0.5,
    (height - imageHolder.height) * 0.5,
    imageHolder.width,
    imageHolder.height
  );
};

const loadConfig = async (ctx, { width, height }) => {
  const imageHolder = imagePaths[0];
  const image = await load(imageHolder.imageLibraryObject.Path);
  // console.log(image);
  // Once the image is loaded, we can update the output
  // settings to match it
  console.log(image.width, image.height)
  ctx.drawImage(
    image,
    (width - imageHolder.width) * 0.5,
    (height - imageHolder.height) * 0.5,
    imageHolder.width,
    imageHolder.height
  );
};

// Start the sketch
const sketch = async () => {
  return async ({ context, width, height, playhead }) => {
    await loadBackground(context, { width, height });
    await loadConfig(context, { width, height });
    await loadHair(context, { width, height });

    // const cx = width / 2;
    // const cy = height / 2;
    context.fillStyle = "white";
    context.save();
    // context.translate(cx, cy);
    context.restore();
  };
};
canvasSketch(sketch, settings).then((v) => {
  console.log(v);
});

module.exports = {
  sketch,
};
