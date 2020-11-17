var firstnumber;  
var secondnumber;  
var result;  
var operations;  
  
        function numone() {  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "1";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                document.display.operations.value = document.display.operations.value + "1";  
            }  
  
        }  
  
        function numtwo() {  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "2";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                document.display.operations.value = document.display.operations.value + "2";  
            }  
            
        }  
  
        function numthree() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "3";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                document.display.operations.value = document.display.operations.value + "3";  
            }  
  
        }  
  
        function numfour() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "4";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                document.display.operations.value = document.display.operations.value + "4";  
            }  
  
        }  
  
        function numfive() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "5";  
  
            } else 
            {  
                document.display.operations.value = document.display.operations.value + "5";  
            }  
  
        }  
  
        function numsix() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "6";  
  
            } else
            {  
                document.display.operations.value = document.display.operations.value + "6";  
            }  
  
        }  
  
        function numseven() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "7";  
  
            } else 
            {  
                document.display.operations.value = document.display.operations.value + "7";  
            }  
        }  
  
        function numeight() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "8";  
  
            } else
            {  
                document.display.operations.value = document.display.operations.value + "8";  
            }  
        }  
  
        function numnine() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                document.display.operations.value = "9";  
  
            } else 
            {  
                document.display.operations.value = document.display.operations.value + "9";  
            }  
  
        }  
  
        function numzero() {  
  
            if (document.display.operations.value == "0") {  
  
                document.display.operations.value = "0";  
  
            } else if (document.display.operations.value == result) {  
                document.display.operations.value = "0";  
            } else 
            {  
                document.display.operations.value = document.display.operations.value + "0";  
            }  
  
        }  
  
        function numdobuzero() {  
  
            if (document.display.operations.value == "0" || document.display.operations.value == result) {  
  
                return;  
  
            } else   
            {  
                documentdocument.display.operations.value = document.display.operations.value + "00";  
            }  
  
        }  
  
        function clr() {  
            document.display.operations.value = "0";  
            document.display.numbers.value = "";  
            return;  
        }  
  
        function operationplus() {  
  
            operation = "+";  
            firstnumber = parseInt(document.display.operations.value);  
            document.display.operations.value = "0";  
            document.display.numbers.value = firstnumber + operation;  
            
  
        }  
  
        function operationmult() {  
  
            operation = "*";  
            firstnumber = parseInt(document.display.operations.value);  
            document.display.operations.value = "0";  
            document.display.numbers.value = firstnumber + operation;  
  
        }  
  
        function operationminus() {  
  
            operation = "-";  
            firstnumber = parseInt(document.display.operations.value);  
            document.display.operations.value = "0";  
            document.display.numbers.value = firstnumber + operation;  
  
        }  
  
        function operationdivid() {  
  
            operation = "/";  
            firstnumber = parseInt(document.display.operations.value);  
            document.display.operations.value = "0";  
            document.display.numbers.value = firstnumber + operation;  
  
        }  
  
        function operationperc() {  
  
            operation = "%";  
            firstnumber = parseInt(document.display.operations.value);  
            document.display.operations.value = "0";  
            document.display.numbers.value = firstnumber + operation;  
  
        }  
  
        function equalsto() {  
  
            secondnumber = parseInt(document.display.operations.value);  
  
            if (operation == "+") {  
                result = firstnumber + secondnumber;  
            } else if (operation == "*") {  
  
                result = firstnumber * secondnumber;  
  
            } else if (operation == "-") {  
  
                result = firstnumber - secondnumber;  
  
            } else if (operation == "/") {  
  
                result = firstnumber / secondnumber;  
  
            } else if (operation == "%") {  
  
                if (document.display.operations.value == "0") {  
  
                    result = firstnumber / 100;  
                    document.display.numbers.value = firstnumber + operation + "100";  
                } else if (document.display.operations.value != "0") {  
                    result = firstnumber / secondnumber * 100;  
                    document.display.numbers.value = firstnumber + operation + secondnumber + "*100 = " + result;  
                }  
            } else if (operation == "^") {  
  
                for (var i = 0; i < secondnumber; i++) {  
  
                    result = firstnumber * i;  
                }  
  
  
            }  
            document.display.operations.value = "";  
            document.display.operations.value = result.toString();  
            document.display.numbers.value = firstnumber + operation + secondnumber + " = " + result.toString();  
            return;  
  
        }  
  
        function sqrots() {  
            firstnumber = document.display.operations.value;  
            result = Math.sqrt(parseInt(document.display.operations.value));  
            document.display.operations.value = result;  
            document.display.numbers.value = "sqrt(" + firstnumber + ") = " + result;  
  
        }  
  
        function operationraistop() {  
  
            operation = "^";  
            firstnumber = parseInt(document.display.operations.value);  
            document.display.operations.value = "0";  
  
        }  


        display.operations