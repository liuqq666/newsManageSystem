var constructArr = function(a) {
    let ans = [];
    let left = new Array(a.length+1).fill(1);
     let right = new Array(a.length+1).fill(1);
    left[0] = 1;
    left[1] = a[0];
    for(let i = 2; i <= a.length; i++){
        left[i] = left[i-1] * a[i-1];
    }
    right[right.length-1] = 1;
    right[right.length-2] = a[a.length-1];
    for(let i = right.length-3; i >= 0; i--){
        right[i] = right[i+1] * a[i];
    }
    for(let i = 0;i<a.length;i++){
        ans[i] = right[i+1]*left[i]
    }
    return ans;
};

let a = [1, 2, 3, 4, 5];

constructArr(a)
