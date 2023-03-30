const checkbox = document.getElementById('clickhere');

checkbox.addEventListener('click', function() {
  if (this.checked) {

    console.log('Checkbox is checked - daymode on');
    
    document.querySelector('h1').style.color = '#0c0c0c';
    document.querySelector('h2').style.color = '#0c0c0c';

    document.getElementById('titlediv').style.backgroundColor = '#d2d2d2';
    document.getElementById('subtitlediv').style.backgroundColor = 'white';
    document.getElementById('titleinnerdiv').style.backgroundColor = '#d2d2d2';
    document.getElementById('mainsection').style.backgroundColor = '#d2d2d2';
    document.getElementById('mainsection').style.color = '#0c0c0c';
    document.getElementById('aside').style.backgroundColor = '#d2d2d2';
    document.getElementById('aside').style.color = '#0c0c0c';

    var containers = document.getElementsByClassName('headerspace-01');
    for (var i = 0; i < containers.length; i++)
    {containers[i].style.backgroundColor = '#d2d2d2';}

    var containers = document.getElementsByClassName('headerspace-02');
    for (var i = 0; i < containers.length; i++)
    {containers[i].style.backgroundColor = '#d2d2d2';}

    var containers = document.getElementsByClassName('headerspace-03');
    for (var i = 0; i < containers.length; i++)
    {containers[i].style.backgroundColor = '#d2d2d2';} 
    
  } else {
    console.log('Checkbox is not checked - nightmode on');

    document.querySelector('h1').style.color = '#d2d2d2';
    document.querySelector('h2').style.color = '#d2d2d2';
    
    document.getElementById('titlediv').style.backgroundColor = '#0c0c0c';
    document.getElementById('subtitlediv').style.backgroundColor = '#1d1d1d';
    document.getElementById('titleinnerdiv').style.backgroundColor = '#0c0c0c';
    document.getElementById('mainsection').style.backgroundColor = '#0c0c0c';
    document.getElementById('mainsection').style.color = '#d2d2d2';
    document.getElementById('aside').style.backgroundColor = '#0c0c0c';
    document.getElementById('aside').style.color = '#d2d2d2';

    var containers = document.getElementsByClassName('headerspace-01');
    for (var i = 0; i < containers.length; i++)
    {containers[i].style.backgroundColor = '#0c0c0c';}

    var containers = document.getElementsByClassName('headerspace-02');
    for (var i = 0; i < containers.length; i++)
    {containers[i].style.backgroundColor = '#0c0c0c';}

    var containers = document.getElementsByClassName('headerspace-03');
    for (var i = 0; i < containers.length; i++)
    {containers[i].style.backgroundColor = '#0c0c0c';}
    
  }
});






