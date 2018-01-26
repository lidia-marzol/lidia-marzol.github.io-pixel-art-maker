(function() {
  'use strict';

  // set global variables
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixel_canvas");

  // add listener to select grid size
  $sizePicker.addEventListener('submit', function() {
    // prevent page refresh on submit
    event.preventDefault();

    // get input data and draw grid
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    makeGrid(width, height);
  })

  // Draw grid
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 0; row < width; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < height; cell++ ) {
          // add new cell with listener to change color
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        }
    }
  }

  // change the color of the clicked cell to current color
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();
