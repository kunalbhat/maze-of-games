var col1, col2, col3, col4, col5, col6, col7,
col8, col9, col10, col11, col12, col13 = [];

var columns = [
  col1  = ['T', 'W', 'T', 'M', 'A', 'C', 'T', 'N', 'W', 'B', 'T', 'O', 'F'],
  col2  = ['U', 'O', 'N', 'I', 'H', 'E', 'H', 'O', 'N', 'A', 'H', 'A', 'I'],
  col3  = ['R', 'E', 'L', 'I', 'S', 'D', 'L', 'O', 'V', 'T', 'T', 'L', 'E'],
  col4  = ['N', 'I', 'P', 'S', 'G', 'C', 'S', 'T', 'P', 'I', 'U', 'I', 'H'],
  col5  = ['T', 'A', 'O', 'L', 'H', 'E', 'B', 'G', 'G', 'I', 'O', 'F', 'E'],
  col6  = ['H', 'A', 'N', 'W', 'T', 'R', 'T', 'T', 'M', 'A', 'A', 'R', 'R'],
  col7  = ['E', 'B', 'Z', 'P', 'A', 'T', 'T', 'T', 'W', 'T', 'S', 'A', 'E'],
  col8  = ['T', 'S', 'E', 'H', 'E', 'H', 'O', 'K', 'K', 'S', 'Y', 'A', 'L'],
  col9  = ['A', 'P', 'E', 'B', 'E', 'N', 'E', 'E', 'A', 'R', 'R', 'E', 'E'],
  col10 = ['B', 'M', 'A', 'E', 'L', 'I', 'D', 'X', 'Y', 'S', 'A', 'M', 'E'],
  col11 = ['L', 'N', 'O', 'I', 'O', 'Y', 'T', 'I', 'G', 'A', 'U', 'B', 'P'],
  col12 = ['E', 'T', 'T', 'U', 'N', 'U', 'O', 'H', 'N', 'I', 'R', 'S', 'O'],
  col13 = ['S', 'G', 'R', 'U', 'S', 'D', 'N', 'S', 'T', 'W', 'R', 'O', 'H']
];

var turn = function(key) {
  $('#col' + key + ' ul').html('');

  for (i=0; i<columns[key].length; i++) {
    $('#col' + key + ' ul').append("<li>" + columns[key][i] + "</li>");
  }
}

var shift = function(direction, key) {

  if (direction === 0) {
    l = columns[key].shift();
    columns[key].push(l);
  }

  if (direction === 1) {
    l = columns[key].pop();
    columns[key].unshift(l);
  }

  turn(key);
}

var setupBoard = function() {
  for(i=0; i<columns.length; i++) {
    $('#board').append("<div id='col" + i + "' class='column' data-id='" + i + "'><ul></ul></div>");

    column = columns[i];
    $col = $('#col' + i);

    for (n=0; n<columns[i].length; n++) {
      $('#col' + i + ' ul').append("<li>" + columns[i][n] + "</li>");
    }

    if (i != 0) {
      $col.append('<span class="arrow up">^</span>')
        .append('<span class="arrow down">^</span>')
        .append('<span class="count">0</span>');
    }
  }
}

var updateCount = function(direction, key) {
  $count = $('#col' + key + ' .count');
  count = parseInt($count.html());
  columnLength = columns[key].length;

  if (direction === 1) {
    if (count <= columnLength - 2) {
      offset = 1;
    } else {
      count = 0;
      offset = 0;
    }
  }

  if (direction === 0) {
    if (count >= (columnLength - 2) * -1) {
      offset = -1;
    } else {
      count = 0;
      offset = 0;
    }
  }

  $count.html('').html(count + offset);
}

// Generate the UI
setupBoard();

// Click events
$('.arrow').on('click', function() {
  $this = $(this);
  direction = 0;
  key = $this.parent().data('id');

  if($this.hasClass('up')) {
    direction = 1;
  }

  shift(direction, key);
  updateCount(direction, key);
});
