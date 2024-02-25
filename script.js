const tBody = document.getElementById("table-body");

addNewRow =()=> {
    const row = document.createElement("tr");
    row.className = "single-row";
    row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product"></td>
                    <td><input type="number" placeholder="0" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                    <td style="text-align: right;"><span class="material-icons" action="delete">delete_outline</span></td>`

    tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
}

document.getElementById("add-row").addEventListener("click", (e)=> {
    e.preventDefault();
    addNewRow();
});

//GET INPUTS, MULTIPLY AND GET THE ITEM PRICE
getInput =()=> {
    var rows = document.querySelectorAll("tr.single-row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#unit").value;
        var price = currentRow.querySelector("#price").value;

        amount = unit * price;
        currentRow.querySelector("#amount").value = amount;
        overallSum();

    })
};

//Get the overall sum/Total
overallSum =()=> {
    var arr = document.getElementsByName("amount");
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].value) {
            total += +arr[i].value;
            

        }
    }
    document.getElementById("total").value = total;
    // Apply discount if total price is greater than 3000
    if (total > 3000) {
        total *= 0.85; // Apply 15% discount
    
    }

        document.getElementById("total").value = total;
        

    
    }


//Delete row from the table
tBody.addEventListener("click", (e)=>{
    let el = e.target;
    const deleteROW = el.getAttribute("action");
    if(deleteROW == "delete") {
        delRow(el);
        overallSum();
        
    }
    
});

//Target row and remove from DOM;
delRow =(el)=> {
    el.closest('tr').remove();

}

function updateDate(){

        
    var currentDate=new Date();
    var dateString=currentDate.toDateString();
    document.getElementById("date").innerHTML=dateString;
    }  
    setInterval(updateDate,1000);  
document.getElementById('generate-pdf-and-redirect').addEventListener('click', function() {
        const element = document.body; // Choose the element you want to convert to PDF
        html2pdf().from(element).toPdf().get('pdf').then(function(pdf) {
            // Generate a unique filename for the PDF
            const filename = 'bill_' + new Date().getTime() + '.pdf';
            // Save the PDF
            pdf.save(filename);
            // Redirect to the generated PDF
            window.location.href = filename;
        });

    });

    
    


   
    

    
    

