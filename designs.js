(function(document){
    'use strict';

    const $colorPicker = document.getElementById("colorPicker");
    const $sizePicker = document.getElementById("sizePicker");
    const $table = document.getElementById("pixel_canvas");

    $sizePicker.addEventListener('submit', function() {
      
      event.preventDefault();

      let width = document.getElementById("input_width").value;
      let height = document.getElementById("input_height").value;
      makeGrid(width, height);
    })

    function makeGrid(width, height) {
      $table.innerHTML = '';
      for (let row = 0; row < width; row++) {
        let newRow = $table.insertRow();
          for (let cell= 0; cell < height; cell++ ) {

            let newCell = newRow.insertCell();
          
            newCell.onmousedown = function() { drawing = true; this.style.background = $colorPicker.value; };
            newCell.onmouseup = function() { drawing = false; };
            newCell.onmouseover = changeColor;
          }
      }
    }
    function setGridColor(event) {
        let color = elements.colorPicker.value;

        event.target.setAttribute('style', 'background-color: ' + color);
    }
    function clearCanvas() {
        elements.gridCanvas.innerHTML = '';
    }
    function getGridSize() {
        let numberOfRows = elements.heightInput.value;
        let numberOfColumns = elements.widthInput.value;

        return {
            numberOfColumns: parseInt(numberOfColumns),
            numberOfRows: parseInt(numberOfRows)
        }
      }
    function changeColor() {
        if (drawing) { 
          this.style.background = $colorPicker.value;
        }
      }
    
    init();

}(document));




