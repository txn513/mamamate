;function pop(val, fn) {

  $('#pop').remove();
  $(document.body).append('<div id="pop"></div>');
  $('#pop').html(val);
  var pop_style = {
    "position": "fixed",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%,-50%)",
    "z-index": 3000,
    "height": "0.9rem",
    "border-radius": "0.08rem",
    "background": "rgba(0,0,0,0.5)",
    "line-height": " 0.9rem",
    "text-align": "center",
    "transition": "all 0.4s",
    "opacity": 1,
    "visibility": "visible",
    "color": "#fff",
    "font-size": "0.26rem",
    "padding": "0 0.2rem",
    "white-space": "nowrap",
    "display": "block",
    "top": document.documentElement.clientHeight / 2,
    "left": document.documentElement.clientWidth / 2
  }

  $("#pop").css(pop_style).animate({ "opacity": 0.5 }, 2000, function() {
    $(this).remove();
    if (fn) {
      fn();
    }
  });

}