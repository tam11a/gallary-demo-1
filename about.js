var imageLocation = '/static/images/'
var images = [
    'erika-giraud-6oUY_Hnwmv8-unsplash.jpg',
    'moritz-kindler-RvBUKkT_i1Y-unsplash.jpg',
    'phonepic.jpg',
    'steve-johnson-mfYFY0XnFug-unsplash.jpg',
    'scott-webb--8iUezuL8iM-unsplash.jpg',
    'samantha-gades-fIHozNWfcvs-unsplash.jpg',
    'geert-pieters-AfgJpWQH4lw-unsplash.jpg'
]
//document.getElementById("background-img").style.backgroundImage = ""

function changeBackground(){
    var image_name = choose(images);
    //console.log(image_name);
    var image_url = "url('"+image_name+"')";
    var id_ = document.getElementById("background-img").style;
    id_.backgroundImage = image_url;
    id_.backgroundPosition = 'center';
    id_.backgroundRepeat = 'no-repeat';
    id_.backgroundSize = 'cover';
    id_.transition = 'background 0.5s';
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
}
changeBackground();
//setInterval(changeBackground, 4000);

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

// NickName Change Buttons
// const descHidden = document.querySelectorAll('.aboutbox');
// descHidden.forEach(el => el.addEventListener('click', event => {
//     console.log(event.target.innerHTML);
//     //event.target.classList.toggle('desc-explore');
// }));
