function romanCompare (a,b){
    let nums = {
        i:1,
        x:10,
        m:1000,
        d:500,
        v:5
    }
    return ((nums[a])-(nums[b]));
};
module.exports = (a,b) => {
    return ((a+b).split('').sort(romanCompare).reverse().join(''));
}