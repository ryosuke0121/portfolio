window.onload = function() {
    var textElement = document.querySelector('.animated-text');
    var text = textElement.innerHTML;
    var animatedText = '';
  
    for (var i = 0; i < text.length; i++) {
      animatedText += '<span>' + text.charAt(i) + '</span>';
    }
  
    textElement.innerHTML = animatedText;
  }
  
  