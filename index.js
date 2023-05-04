let count =  0
function increment()  {
    count +=  1
    let newcount = document.getElementById("counter").innerText = count

    console.log('button was clicked');
}

let entries= document.getElementById('entries')
function save(){
    countEntries=count +' - '
    savedEntries= entries.innerHTML+=countEntries
    document.getElementById('counter').innerHTML = 0

    count =0

    console.log(countEntries);
}