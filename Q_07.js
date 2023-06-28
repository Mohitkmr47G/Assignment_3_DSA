Q.7-
var summaryRanges = function(nums) {
    let i=0, j=0;
    let ret=[];
    while(i<nums.length) {
        j=i+1;
        while(j<nums.length && nums[j]-1===nums[j-1]) {
            j++;
        }
        if(i!==j-1) {
            ret.push(""+nums[i]+"->"+nums[j-1]);
        }else {
            ret.push(""+nums[i]);
        }
        i=j;
    }
    return ret;
};
