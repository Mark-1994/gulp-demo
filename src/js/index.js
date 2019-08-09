window.onload = function() {
    var ulList = document.getElementById('ulList');
    var contentRight = document.getElementsByClassName('contentRight');
    // console.log(contentRight);

    // console.log(ulList.children.length);
    for (var i = 0; i < ulList.children.length; i++) {
        (function(i) {
            ulList.children[i].addEventListener('click', function() {
                // console.log(this);
                for (var j = 0; j < ulList.children.length; j++) {
                    ulList.children[j].className = '';
                }
                this.index = i;
                this.className = 'bgThis';
                for (var k = 0; k < contentRight.length; k++) {
                    contentRight[k].className = 'contentRight';
                }
                contentRight[i].className = 'contentRight onShow';
                // console.log(contentRight);

            })
        })(i);
    }
}

const x = 100;
let y = 200;
const fn = () => {
    console.log('1234');
}