function toggleTop(){
    document.getElementById("navOption").classList.toggle("moveDown");
    document.getElementById("navBtn").classList.toggle("tg-on");
    document.getElementById("navLogo").classList.toggle("tg-on");
    document.getElementsByTagName("header")[0].classList.toggle("header-transparent");
    try{
        document.getElementById("navFooter").classList.toggle("tg-on");
    }
    catch{
        //pass
    }
    //.classList.toggle("header-transparent");
}

function redirect(link){
    location.replace(link);
}

//https://www.lipsum.com/feed/html

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
function copyTextToClipboard(text) {
if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
}
navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
}, function(err) {
    console.error('Async: Could not copy text: ', err);
});
}
