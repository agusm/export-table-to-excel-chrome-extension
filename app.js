const tbl = document.getElementById('tblData')
let row = tbl.getElementsByTagName('tbody')[0].getElementsByTagName('tr')
let items = Array.from(row)
items.shift()

let table = document.createElement("table");
table.setAttribute('id', 'table-export')

for (let item of items) {
    let tr = document.createElement('tr')
    let data = Array.from(item.getElementsByTagName('td'))

    let index = 0
    for (let datum of data) {
        if (index != 2) {
            let td = document.createElement('td')
            td.innerHTML = datum.innerText

            tr.appendChild(td)
        }
        index++
    }
    table.appendChild(tr)
}

var downloadLink;
var dataType = 'application/vnd.ms-excel';
var tableHTML = table.outerHTML.replace(/ /g, '%20');

// Specify file name
let filename = 'tracking_data.xls';

// Create download link element
downloadLink = document.createElement("a");
downloadLink.innerHTML = 'Download Excel'
// downloadLink.innerHTML = 'Link'

document.body.appendChild(downloadLink);


// Create a link to the file
downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

// Setting the file name
downloadLink.download = filename;

//triggering the function
// downloadLink.click();