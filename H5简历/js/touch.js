var div = document.getElementById("div");
var divitems = document.getElementsByClassName('itemMove')


div.addEventListener('touchstart', function (e) {
    //preventDefault是阻止默认行为，touch事件的默认行为就是滚动。
    e.preventDefault();
    let touch = e.targetTouches[0];//touches数组对象获得屏幕上所有的touch，取第一个touch
    startX = touch.clientX;//开始坐标X
    startY = touch.clientY;//开始坐标Y
    swipeTop = false;//上滑动动作
    swipeBottom = false;//下滑动动作
});

div.addEventListener('touchmove', function (e) {
    //preventDefault是阻止默认行为，touch事件的默认行为就是滚动。
    let touch = e.targetTouches[0];//touches数组对象获得屏幕上所有的touch，取第一个touch
    endX = touch.clientX;//开始坐标X
    endY = touch.clientY;//开始坐标Y
    if (Math.abs(endX - startX) - Math.abs(endY - startY) < 0) {
        // e.preventDefault();
        if (endY - startY < 0) {
            swipeTop = true;
            swipeBottom = false;//此时为向上滑状态
            console.log("上方向")
        } else {
            swipeTop = false;
            swipeBottom = true;//此时为向下滑状态
            console.log("下方向")
        }
    }
});

div.addEventListener('touchend', function (e) {
    if (Math.abs(endX - startX) - Math.abs(endY - startY) < 0) {
        // e.preventDefault();
        if (swipeTop) {
            swipeTop = !swipeTop;
            /*向上滑动*/
            up()

        }
        if (swipeBottom) {
            swipeBottom = !swipeBottom;
            /*向上滑动*/
            // down()
        }
    }
});

var index = 0;
divitems[index].classList.add('item_one')
function up() {
    index++
    if (index < 6) {
        div.style.transform = `translateY(${-46 * index}rem)`;
        if (index === 1) {
            var two_first = document.getElementById('one_first')
            var two_third = document.getElementById('one_third')
            two_first.className = 'one_first'
            two_third.className = 'one_third'
        } else if (index === 2) {
            var three_first = document.getElementById('third_move_one')
            three_first.className = "third_move_one"

            setTimeout(() => {
                var li = document.getElementsByClassName("third_li")
                for (var i = 0; i < li.length; i++) {
                    (function (i) {
                        setTimeout(function () {
                            console.log(li[i].innerHTML)
                            li[i].classList.add("third_li_move")
                        }, i * 700)
                    })(i)
                }
            }, 2000);
           
        } else if (index === 5) {

        }
    } else {
        return console.log("我也是有底线的！")

    }


}
// function down() {

//     if (index === 0) {
//         console.log('到头啦')
//     } else {
//         index--
//         div.style.transform = `translateY(${-46 * index}rem)`;

//     }
// }



