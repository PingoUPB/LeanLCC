var dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}


function handleDrop(e) {
    console.log(this);
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the columnwe dropped on.
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function printEvent(e){
 console.log(e);   
}

var dropTargets = document.querySelectorAll('.canvas-field');
[].forEach.call(dropTargets, function(col) {
 // col.addEventListener('dragenter', handleDragEnter, false)
 col.addEventListener('dragover', handleDragOver, false);
 // col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  //col.addEventListener('dragend', printEvent, false);
});

var draggables = document.querySelectorAll('.canvas-draggable');
[].forEach.call(draggables, function(col) {
 col.addEventListener('dragstart', handleDragStart, false);
});
