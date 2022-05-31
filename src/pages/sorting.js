import React, { useState, useEffect } from "react";


//Sorting algo tests, unfinished

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
function fillArray(amount)
    {
        return(Array.from({length: amount}, () => getRandomNumber(1,50)))
}

function ArrayObject(props) {
    const [height, setHeight] = useState(getRandomNumber(0,50))
    const styles ={
        height: height,
        backgroundColor: 'black',
        width: '10px',
        transition: 'all 2s'
    }

    useEffect(() => {
      setHeight(props.height)
      return () => {}
    }, [props.height])
    return(
        <div>
        {props.children}
        <div style = {styles}><p></p></div>
        </div>
    )
}
export default function Sorting() {
    const [valueArray, setValueArray] = useState([])
    const arraySize = 20
    const array = {
        display: 'flex',
        flexDirection: 'row'
    }
    function handleSort(type)
    {
        let sortedValues = valueArray.slice()
        switch(type){
            case 1:
                quickSort(sortedValues, 0, sortedValues.length-1)
                setValueArray(sortedValues)
                break;
            default:
                throw new TypeError("No sort selected")
        }
    }
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function quickSort(array, lo, hi){
        var index;
        if (array.length > 1) {
            index = quickSortPartition(array, lo, hi)
            if (lo < index-1) {
                quickSort(array, lo, index-1)
                
            }
            if (index < hi) {
                quickSort(array, index, hi)
            }
        }
        return(array)
    }
    function quickSortPartition(array, lo, hi) {
        var pivot = array[Math.floor((lo + hi) /2)],
            i = lo,
            j = hi;
        while (i <= j) {
            while (array[i] < pivot ){
                i++
            }
            while (array[j] > pivot ){
                j--;
            }
            if (i <= j) {
                swap(array, i, j)
                i++;
                j--;
            }
        }
        return i;
    }
    useEffect(() => {
        setValueArray(fillArray(arraySize))
        return () => {}
      }, [])
    return (
        <div>
        <p>Hello world!</p>
        <button onClick={()=> setValueArray(fillArray(arraySize))}>Get a new array UwU!</button>
        <button onClick={()=> {handleSort(1)}}>Quick sort</button>
        <button onClick={()=> console.log(valueArray)}>Console log values</button>
        <div style={array}>
        {valueArray.map((value,index) => {return (<ArrayObject key={index} height={value}></ArrayObject>)})}
        </div>
        </div>
    )
}