"use strict";
// Global Variables
var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
// Function to find smallest number
function smallestNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var smallest = first;

    if(smallest > second){
        smallest = second;
    }
    if(smallest > third){
        smallest = third;
    }
    if(smallest > fourth){
        smallest = fourth;
    }
    if(smallest > fifth){
        smallest = fifth;
    }
    if(smallest > sixth){
        smallest = sixth;
    }
    output.innerHTML = " The smallest number is " + smallest;
}
// Function to find largest number
function largestNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var largest = first;

    if(largest < second){
        largest = second;
    }
    if(largest < third){
        largest = third;
    }
    if(largest < fourth){
        largest = fourth;
    }
    if(largest < fifth){
        largest = fifth;
    }
    if(largest < sixth){
        largest = sixth;
    }
    output.innerHTML = " The largest number is " + largest;
}
// Function to find mean
function meanNum(){
    var first = doc1.value;
    var second = doc2.value;
    var third = doc3.value;
    var fourth = doc4.value;
    var fifth = doc5.value;
    var sixth = doc6.value;
    var mean = (parseInt(first) + parseInt(second) + parseInt(third)
    + parseInt(fourth) + parseInt(fifth) + parseInt(sixth)) /6;
    output.innerHTML = " The mean is " + mean;
}
// Function for range
function rangeNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var largest = first;
    if(largest < second){
        largest = second;
    }
    if(largest < third){
        largest = third;
    }
    if(largest < fourth){
        largest = fourth;
    }
    if(largest < fifth){
        largest = fifth;
    }
    if(largest < sixth){
        largest = sixth;
    }
    console.log(largest);
    var smallest = first;
    if(smallest > second){
        smallest = second;
    }
    if(smallest > third){
        smallest = third;
    }
    if(smallest > fourth){
        smallest = fourth;
    }
    if(smallest > fifth){
        smallest = fifth;
    }
    if(smallest > sixth){
        smallest = sixth;
    }
    var range = parseInt(largest) - parseInt(smallest);
    console.log(smallest);
    output.innerHTML = " The range of the numbers is " + range;
}
// Function to find the median
function medianNum(){
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var median = (parseInt(third) + parseInt(fourth)) /2;
    output.innerHTML = " The median is " + median;
}
// Function to find the order
function order(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(first, second, third, fourth, fifth, sixth);
    
    if(o1 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o1 === second){
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o1 === third){
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o1 === fourth){
        fifth = fourth;
        sixth = fifth;
    }if(o1 === fifth){
        sixth = fifth;
    }else{
        o1 = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth);

    if(o2 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o2 === second){
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o2 === third){
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o2 === fourth){
        fifth = fourth;
        sixth = fifth;
    }if(o2 === fifth){
        sixth = fifth;
    }else{
        o2 = sixth;
    }

    o3 = Math.min(first, second, third, fourth);

    if(o3 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o3 === second){
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o3 === third){
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o3 === fourth){
        fifth = fourth;
        sixth = fifth;
    }if(o3 === fifth){
        sixth = fifth;
    }else{
        o3 = sixth;
    }

    o4 = Math.min(first, second, third);

    if(o4 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o4 === second){
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o4 === third){
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o4 === fourth){
        fifth = fourth;
        sixth = fifth;
    }if(o4 === fifth){
        sixth = fifth;
    }else{
        o4 = sixth;
    }

    o5 = Math.min(first, second);

    if(o5 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o5 === second){
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o5 === third){
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o5 === fourth){
        fifth = fourth;
        sixth = fifth;
    }if(o5 === fifth){
        sixth = fifth;
    }else{
        o5 = sixth;
    }

    o6 = Math.min(first);

    if(o6 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o6 === second){
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o6 === third){
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }if(o6 === fourth){
        fifth = fourth;
        sixth = fifth;
    }if(o6 === fifth){
        sixth = fifth;
    }else{
        o6 = sixth;
    }
    output.innerHTML = "The order is" + o1 + o2 + o3 + o4 + o5 + o6 + Number;
    /*
    parseFloat, vars 1-6 vars 01-06 = 0 o1=Math.min(one, two, three, four, five, six) if (o1 === first)
    first = second
    second = third etc
    o2=math.min(one, two, three, four, five)
    repeat
    */
}

function modeNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
}
