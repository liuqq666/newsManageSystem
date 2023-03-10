var spiralOrder = function(matrix) {
    if(matrix.length == 0) return [];
    let left = 0,top = 0, right = matrix[0].length-1,bottom = matrix.length-1,ans = [];
    while( true ){
        for(let i = left; i <= right; i++){
            ans.push(matrix[top][i])
        }
        if(++top > bottom)break;

        for(let i = top; i <= bottom; i++){
            ans.push(matrix[i][right])
        }
        if(--right < left )break;

        for(let i = right; i >= left; i--){
            ans.push(matrix[bottom][i])
        }
        if(--bottom < top)break;

        for(let i = bottom; i >= top; i--){
            ans.push(matrix[i][left])
        }
        if( ++left > right)break;
    }
    return ans;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(spiralOrder(matrix));