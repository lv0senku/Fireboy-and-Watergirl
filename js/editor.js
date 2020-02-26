/**
 * @author rrcat920 <wuqieor@outlook.com>
 * @date 2020/2/26 21:56
 */

let canvasArray = document.querySelectorAll("#display>canvas");
let spanArray = document.querySelectorAll("#tab>span");
tab(spanArray, canvasArray);


/**
 * 使用lhs控制rhs的tab选项
 * @param lhs {NodeListOf<Element>} tab选项
 * @param rhs {NodeListOf<Element>} 显示页面
 */
function tab(lhs, rhs) {
    for (let i = 0; i < lhs.length; ++i) {
        lhs[i].index = i;
        lhs[i].onclick = function () {
            rhs[this.index].style.display = "block";
            this.style.backgroundColor = "#383838";
            for (let j = 0; j < rhs.length; ++j) {
                if (j === this.index) {
                    continue;
                }
                rhs[j].style.display = "none";
            }

            for (let k = 0; k < lhs.length; ++k) {
                if (k === this.index) {
                    continue;
                }
                lhs[k].style.backgroundColor = "#292a27";
            }
        };
    }
}