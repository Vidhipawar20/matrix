// script.js
function multiplyMatrices() {
    var matrixA = JSON.parse(document.getElementById('matrixA').value);
    var matrixB = JSON.parse(document.getElementById('matrixB').value);
    
    var result = multiply(matrixA, matrixB);
    
    if (result) {
        document.getElementById('result').innerHTML = "<h2>Result:</h2><pre>" + JSON.stringify(result) + "</pre>";
    } else {
        document.getElementById('result').innerHTML = "<p>Please enter valid matrices.</p>";
    }
}

function multiply(matrixA, matrixB) {
    if (matrixA[0].length !== matrixB.length) {
        return null; // Invalid matrices for multiplication
    }
    
    var result = [];
    for (var i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrixB[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matrixB.length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
