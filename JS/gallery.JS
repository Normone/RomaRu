function Large(obj) {
    var imgBox = document.getElementById("imgbox");
    imgBox.style.display='block';
    imgBox.onclick = function() {imgBox.style.display= 'none'};
    var img = document.createElement("img");
    img.src = obj.src;
    var imgHeight = (window.innerHeight * 0.60);
    img.style.height = imgHeight + 'px';
    //var parentTopoffset = obj.parentElement.offsetTop;
    //var positionTop = parentTopoffset - imgHeight - 10;
    //imgBox.style.top = positionTop + 'px';
    //imgBox.style.left = (window.innerWidth / 2 - obj.width / obj.height * imgHeight / 2) + 'px';      
    imgBox.innerHTML = '';
    imgBox.appendChild(img);
};


    var kva = 700;
    var kvaposition = 0;
    var list = gacon.querySelector('ul');
    var listElem = gacon.querySelectorAll('li');
    
    function right() {
        kvaposition -= kva;
        list.style.marginLeft = kvaposition + 'px';
    };
    
    function left() {
        if (kvaposition < 0) {
            kvaposition += kva;
            list.style.marginLeft = kvaposition + 'px';
            } else {
                alert('Нона пидор');
        };
    };