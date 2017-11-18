/**
 * @desc 删除数组置指定项
 * @author snoob
 * @param {Array}
 * @param {any}
 * @return {Array}
 */
module.exports = (arr,val) => {
    let array = arr;
    let idx = array.indexOf(val);
    if (idx > -1) {
        array.splice(idx, 1); 
    }
    return array;
}