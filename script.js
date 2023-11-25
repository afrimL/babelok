var index = 0;

function changeColors() {

    var colors = ['red', 'blue', 'orange', 'yellow', 'teal', 'grey', 'green', 'purple'];
    // console.log(index);
    document.getElementsByTagName('body')[0].style.background = colors[index++];
    if (index > colors.length - 1)
        index = 0;

};
