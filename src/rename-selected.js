import sketch from 'sketch'

export default function() {
  let document = sketch.getSelectedDocument();
  let selection = document.selectedLayers.layers;

  if (selection.length > 0) {
    selection.forEach(layer => {
      if (layer.type === "Text" && layer.sharedStyleId) layer.name = layer.sharedStyle.name;
    });
  } else {
    sketch.UI.message('Please select a text layer to rename it');
  }
  return
}