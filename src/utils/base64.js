/* // converting selected template to base64 format
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const getImageData = img => {
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);
  return canvas.toDataURL("image/png");
};

export const base64 = template => {
  var img = new Image();
  img.src = template;
  img.onload = () => {
    console.log("template img", img);
    return getImageData(img);
  };
}; */

export const base64 = (template, callback) => {
  if (typeof document === "undefined") return; // Ensure code only runs in browser environment

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const getImageData = img => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  };

  var img = new Image();
  img.crossOrigin = "Anonymous"; // To handle CORS issues if any
  img.src = template;
  img.onload = () => {
    console.log("template img", img);
    const base64Data = getImageData(img);
    callback(base64Data);
  };
};
