/**
 * @desc 生成指定范围随机数
 * @author snoob
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
module.exports = (min=0, max=1) => {
    return Math.floor(min + Math.random() * (max - min));
}
