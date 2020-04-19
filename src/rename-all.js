import sketch from 'sketch'

export default function() {
  let textLayers = sketch.find('Text');

  if (textLayers.length > 0) {
    textLayers.forEach(layer => {
      if (layer.sharedStyleId) {
        layer.name = layer.sharedStyle.name;
      } else {
        sketch.UI.message("Seems like you don't have any text layers with assigned text styles.");
      }
      });
} else {
    sketch.UI.message("Seems like you don't have any text layers in your document.");
  }
  return
}