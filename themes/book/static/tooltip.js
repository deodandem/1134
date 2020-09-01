
  var tooltipSpan = document.getElementsByClassName("tooltip-reveal");

  window.onmousemove = function(e) {
  var x = e.clientX,
    y = e.clientY;

  for (var i = 0; i < tooltipSpan.length; i++) {
    tooltipSpan[i].style.top = (y + 20) + 'px';
    tooltipSpan[i].style.left = (x + 20) + 'px';
  }

  };
