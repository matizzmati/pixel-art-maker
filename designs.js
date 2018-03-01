//vars
let inputHeight, inputWidth, inputCellSize, colorValue;

//create a grid
function makeGrid(event) {
    //check the selected form is valid
    let checkValues = $("#sizePicker").valid();
    if (checkValues === false) {
        return false;
    }
    
    event.preventDefault(); //do not refresh website!
    $("table").empty(); //clear table if there is any
    
    //take inputs from html
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    inputCellSize = $("select#cell_size option:checked").val();
    
    for (let h = 0; h < inputHeight; ++h) {
        $("#pixel_canvas").append("<tr></tr>")
        for (let w = 0; w < inputWidth; ++w) {
            $("tr").last().append("<td></td>")
        }
    }
    //set padding according to your choice
    $("td").css("padding",String(inputCellSize)+"px");     
};

//change css properties
function colorCell(thisTd) {  
    colorValue = $(".jscolor").val();
    $(thisTd).css("background-color", "#"+colorValue);
};

//initialize validation for selected form
$( "#sizePicker" ).validate({
    rules: {
        input_height: {
            required: true,
            range: [1, 30]
        },
        input_width: {
            required: true,
            range: [1, 30]
        }
    }
});

//event handler for submit button
$("#sizePicker").submit(makeGrid);

//event handler for painting
$("#pixel_canvas")
    .on("mousedown mouseenter mousemove", "td", function (event) {
        event.preventDefault();
        if (event.which === 1) {
            colorCell(this);
            }
        if (event.shiftKey) {
            $(this).css("background-color", "#F7EDE0");
            }
    });