
var ARRAY_SIZE=5
const array1 = [1, 30, 4, 21, 100000];
sortt(ARRAY_SIZE,array1);
console.log(array1);
function sortt(ARRAY_SIZE, array1){ 
    for (var i= 0; i < ARRAY_SIZE; ++i)
    {
        for (var j = i + 1; j < ARRAY_SIZE; ++j)
        {
            if (array1[i] > array1[j])
            {
                temp =  array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
        }
    }
    return array1;
}