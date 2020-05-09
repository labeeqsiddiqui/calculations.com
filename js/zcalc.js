
            function OnCalculateAll() 
            {
                document.getElementById('Gold_24_EstimatedValue').value = document.getElementById('Gold_24_Weight').value*document.getElementById('Gold_24_PriceInGram').value;
                document.getElementById('Gold_24_ZakatPayable').value = document.getElementById('Gold_24_EstimatedValue').value/100*2.5 
                document.getElementById('Gold_22_EstimatedValue').value = document.getElementById('Gold_22_Weight').value*document.getElementById('Gold_22_PriceInGram').value;
                document.getElementById('Gold_22_ZakatPayable').value = document.getElementById('Gold_22_EstimatedValue').value/100*2.5
                document.getElementById('Gold_21_EstimatedValue').value = document.getElementById('Gold_21_Weight').value*document.getElementById('Gold_21_PriceInGram').value;
                document.getElementById('Gold_21_ZakatPayable').value = document.getElementById('Gold_21_EstimatedValue').value/100*2.5
                document.getElementById('Gold_18_EstimatedValue').value = document.getElementById('Gold_18_Weight').value*document.getElementById('Gold_18_PriceInGram').value;
                document.getElementById('Gold_18_ZakatPayable').value = document.getElementById('Gold_18_EstimatedValue').value/100*2.5
                document.getElementById('Total_Payable_Zakaat').value = parseFloat(document.getElementById('Gold_24_ZakatPayable')
                .value) +parseFloat(document.getElementById('Gold_22_ZakatPayable').value) + parseFloat(document.getElementById('Gold_21_ZakatPayable').value) + parseFloat(document.getElementById('Gold_18_ZakatPayable').value);
                
            }
            function message ()
            {
                document.getElementById("btnsubmit").value = document.getElementById('Gold_24_Weight').value;  var a = a-z
                var b = A-z
                alert("Please Check")
            }           
            