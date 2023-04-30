//---------------------------------------------- Merge sort ------------------------------------------------------//
export const getMargeSortAnimation = a => {
    const animation = [];
    const b = a.slice();
    margeSort(a, 0, a.length-1, b, animation);
    return animation ;
}

function margeSort(a, first, last, b, animation) {

    if (first === last) return;

    const mid = Math.floor((first + last) / 2);
    margeSort(b, first, mid, a, animation);
    margeSort(b, mid + 1, last, a, animation);
    meage(a, first, mid, last, b, animation);

}


function meage(a, first, mid, last, b, animation) {
    let i = first, j = mid + 1, k = first;
    while (i <= mid && j <= last) {
        animation.push([i,j]);
        animation.push([i,j]);
        if (b[i] <= b[j]) {
            animation.push([k, b[i]]);
            a[k++] = b[i++];
        } else {
            animation.push([k, b[j]]);
            a[k++] = b[j++];
        }
    }

    while (i <= mid) {
        animation.push([i, i]);
        animation.push([i, i]);

        animation.push([k, b[i]]);


        a[k++] = b[i++];
    }

    while (j <= last) {
        animation.push([j, j]);
        animation.push([j, j]);

        animation.push([k, b[j]]);
        a[k++] = b[j++];

    }

}






//------------------------------------------------- bubble sort ----------------------------------------//

export const getBubbleSortAnimation = (a)=>
{
    const animation = [];
    bubbleSort(a, 0, a.length-1, animation);
    return animation;
}


function bubbleSort(a , first,last,animation)
{
    
    for(let i = 0 ;i<=last ;i++)
    {
        for(let j = 0 ;j<= last-i; j++)
        {
            animation.push([i,j]);
            animation.push([i,j]);
            if(a[i] < a[j])
            {
                animation.push([i , a[j]]);
                let tamp = a[i];
                a[i] = a[j];
                a[j] = tamp;
            }
        }
    }

}