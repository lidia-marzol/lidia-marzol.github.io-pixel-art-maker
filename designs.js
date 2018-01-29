(function(document){
    'use strict';

    const elements = {
        colorPicker: document.getElementById('colorPicker'),
        gridCanvas: document.getElementById('pixel_canvas'),
        widthInput: document.getElementById('input_width'),
        heightInput: document.getElementById('input_height')
    };
    const init = function() {

        document.getElementById('sizePicker').addEventListener('submit', makeGrid, false);

        elements.gridCanvas.addEventListener('click', setGridColor);
    };

    function makeGrid(event) {
      
        event.preventDefault();

        const gridSize = getGridSize();

        clearCanvas();

        for (let row = 0; row < gridSize.numberOfRows; row++) {
            let tr = elements.gridCanvas.insertRow(row);

            for (let col = 0; col < gridSize.numberOfColumns; col++) {
        
                tr.insertCell(col);
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

    init();

}(document));
