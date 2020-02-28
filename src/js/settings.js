let settings = {
  displayWidth: 80,
  displayHeight: 80
};

/**
 *
 * @param {String} path 图片路径
 */
function getImage(path) {
  let img = new Image();
  img.src = path;
  return img;
}
