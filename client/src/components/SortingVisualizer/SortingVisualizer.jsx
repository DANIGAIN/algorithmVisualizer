
// ------------------------------------------- end use case function --------------------//

 import '../style.css'
function SortingVisualizer({ newArray ,newClick ,speed}) {

    speed = speed * 50;

    //------------------------------------------  Implement algorithm  -------------------//
    async function bubbleSort() {
        const element = document.getElementsByClassName('array-bar');

        for (let i = 0; i < element.length; i++) {
            for (let j = 0; j < element.length - i - 1; j++) {

                element[j].style.backgroundColor = 'red';
                element[j + 1].style.backgroundColor = 'red';
                let val = parseInt(element[j].style.height);
                let val1 = parseInt(element[j + 1].style.height);

                if (val > val1) {
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, speed)
                    );

                    // swaping -->

                    let tamp = element[j].style.height;
                    element[j].style.height = element[j + 1].style.height;
                    element[j + 1].style.height = tamp;


                }
                element[j].style.backgroundColor = 'cyan';
                element[j + 1].style.backgroundColor = 'cyan';

            }
            element[element.length - i - 1].style.backgroundColor = 'green';


        }

    }


    async function selection() {
        const element = document.getElementsByClassName('array-bar');
        for (let i = 0; i < element.length; i++) {
            let min = i;
            element[i].style.backgroundColor = 'blue';
            for (let j = i + 1; j < element.length; j++) {
                element[j].style.backgroundColor = 'red';

                await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));
                let val = parseInt(element[j].style.height);
                let val1 = parseInt(element[min].style.height);
                if (val < val1) {

                    if (min !== i) {

                        element[min].style.backgroundColor = 'cyan';
                    }
                    min = j;
                } else

                    element[j].style.backgroundColor = 'cyan';

            }
            if (min !== i) {
                let tamp = element[i].style.height;
                element[i].style.height = element[min].style.height;
                element[min].style.height = tamp;
            }
            await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));

            element[min].style.backgroundColor = 'cyan';
            element[i].style.backgroundColor = 'green';
        }

    }





    async function merge(element, first, mid, last) {

        const n1 = mid - first + 1;
        const n2 = last - mid;
        let left = new Array(n1);
        let right = new Array(n2);

        // left half --> 
        for (let i = 0; i < n1; i++) {
            await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));
            element[first + i].style.backgroundColor = 'orange';
            left[i] = element[first + i].style.height;
        }

        //right  left  --> 
        for (let i = 0; i < n2; i++) {
            await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));
            element[mid + i + 1].style.backgroundColor = 'yellow';
            right[i] = element[mid + i + 1].style.height;
        }

        await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));
        let i = 0, j = 0, k = first;
        while (i < n1 && j < n2) {
            await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));
            if (parseInt(left[i]) <= parseInt(right[j])) {
                if ((n1 + n2) === element.length) {
                    element[k].style.backgroundColor = 'green';
                }
                else {
                    element[k].style.backgroundColor = 'lightgreen';
                }
                element[k].style.height = left[i];
                i++;
                k++;
            }
            else {
                if ((n1 + n2) === element.length) {
                    element[k].style.backgroundColor = 'green';
                } else {
                    element[k].style.backgroundColor = 'lightgreen';
                }
                element[k].style.height = right[j];
                j++;
                k++;
            }
        }

        //  // last  part ---> 
        while (i < n1) {
            await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));

            if ((n1 + n2) === element.length) {
                element[k].style.backgroundColor = 'green';
            }
            else {
                element[k].style.backgroundColor = 'lightgreen';
            }
            element[k].style.height = left[i];
            i++;
            k++;

        }

        while (j < n2) {
            await new Promise((resolve) => setTimeout(() => { resolve(); }, speed));

            if (n1 + n2 === element.length) {
                element[k].style.backgroundColor = 'green';
            } else {
                element[k].style.backgroundColor = 'lightgreen';
            }
            element[k].style.height = right[j];
            j++;
            k++;

        }


    }
    async function margeSort(element, first, last) {
        if (first >= last) return;
        const mid = first + Math.floor((last - first) / 2);

        await margeSort(element, first, mid);
        await margeSort(element, mid + 1, last);
        await merge(element, first, mid, last);

    }

   //--------------------------end algorithm ----------------------------------//
   console.log(newClick);

     if(newClick == 'bubble') bubbleSort();
     else if(newClick == 'marge') margeSort(newArray ,0,34);
     else if(newClick == 'selection') selection();
    //-------------------------------------------------------------------------------//
    // return (
    //     <>
    //         <div className="array-container">
    //             {newArray.map((value, index) =>
    //             (
    //                 <div
    //                     className="array-bar"
    //                     key={index}
    //                     style={{ height: `${value}px` }}>
    //                 </div>

    //             ))}
    //         </div>
    //     </>
    // )

}

export default SortingVisualizer;


