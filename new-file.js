//You're prompted with a grild of number which can be conceived as a matrix .
    //-A diagonal of numbers within a matrix is so special that it has a eponymous name of its own , they're called 'diagonal matrix'

//we'll need an abstract function that will take three parameters (grid of numbers i.e. grid matrix ,number of adjacent numbers/pairs/points on the grid,direction[right,down,diagonally])
    //-I want the function to be fool-proof i.e. it should include all the fuss of checking whether the requuired number of adjacent numbers will divide evenly in the number of numbers on each line and so on .


let grid = `
08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
`
//This function needs additional refinemnt
//  -A conditional that check whether the first line/characters ins started off with a new line non-printable character (just mind that crap)
//  -Also a little forlines would be a gentle thing to do
function gridStringToArrays(string,separator){
    string = string.replace('\n','')
    let wholeNumbersArray = []
    let newlineBreakIndex = string.indexOf('\n')
    let i = 0
    while (i < string.length){
        wholeNumbersArray.push(string.slice(i,i+newlineBreakIndex))
        i = i + (newlineBreakIndex + 1)
    }
    let finalArrayOfNumberArrays = []
    for (let i=0 ; i<wholeNumbersArray.length ; i++){
        finalArrayOfNumberArrays.push(wholeNumbersArray[i].split(`${separator}`))
    }
    return (finalArrayOfNumberArrays)
}

//I wish i made this function list all of the products in a list to make it more versatile , 
//but it thought each item would be faster and less memory intensive especially for large grids if someone were to scale up
function twoValuesComparison(firstValue , secondValue){
    let greaterValue = (firstValue > secondValue) ? firstValue : secondValue
    return (greaterValue)
}

function doSomethingElse(numberOfadjacentNumbers ,topdown){
    finalArrayOfNumberArrays = gridStringToArrays(grid,' ')
    let adjacentNumbersProductValue = 0
    let currentAdjacentNumbersProductValue
    let n = 0
    for (let i=0 ; i<finalArrayOfNumberArrays.length ; i++){
        //I could've omitted this mediator loop , but the problem mandates that the numbers become adjacent
        let currentNestedArrayItem = finalArrayOfNumberArrays[i]
        for (let x=0 ; x<(currentNestedArrayItem.length - (numberOfadjacentNumbers+1) ) ; x++) {
            for (let y=0 ; y < numberOfadjacentNumbers ; y++){
                currentAdjacentNumbersProductValue *= (currentNestedArrayItem[x] * 1)
                x++
            }
            adjacentNumbersProductValue = twoValuesComparison (currentAdjacentNumbersProductValue , adjacentNumbersProductValue)
            //The following oneliner resets the adjacent numbers product with each loop iteration
            currentAdjacentNumbersProductValue = 1
        }
        //vertical matrices (top-down/down-top movement)
        if ( n <= finalArrayOfNumberArrays.length - numberOfadjacentNumbers ) {
            for (let y=0 ; y <numberOfadjacentNumbers ; y++) {
                console.log(finalArrayOfNumberArrays[n][0])
                currentAdjacentNumbersProductValue *= finalArrayOfNumberArrays[n][0]
                n ++
            }
            adjacentNumbersProductValue = twoValuesComparison(currentAdjacentNumbersProductValue ,adjacentNumbersProductValue)
            console.log(adjacentNumbersProductValue)
            //The following oneliner resets the adjacent numbers product with each loop iteration
            currentAdjacentNumbersProductValue = 1
            n = n - (numberOfadjacentNumbers -1)
        }
    }
    return (adjacentNumbersProductValue)
}

//function doSomething(numberOfadjacentNumbers){
    //let y = 3
    //let fourNumbersProduct = 1
    //let threeDiagonalNumbersProductArrayObject = []
    //let newNumbersArray = gridStringToArrays(grid,' ')
    //for (let i=0 ; i < newNumbersArray.length-(numberOfadjacentNumbers+1) ; i++){
        //for (let x=0 ; x<4 ; x++){
            //fourNumbersProduct *= newNumbersArray[i+x].substr(y,2) * 1
            //console.log(newNumbersArray[i+x].substr(y,2) * 1)
            //y += 3
        //}
        //console.log(fourNumbersProduct)
        //threeDiagonalNumbersProductArrayObject.push(fourNumbersProduct)
        //fourNumbersProduct = 1 
        //y -= 9
    //}
    //threeDiagonalNumbersProductArrayObject.sort(function(a,b){return a-b})
    //let largestDiagonalMatricesProduct = threeDiagonalNumbersProductArrayObject.slice(-1)
    //return(largestDiagonalMatricesProduct)
//}

//console.log(doSomethingElse(4))
//console.log(doSomething(4))
//

let anotherGrid = `
08 02 01
49 47 98
39 27 98
`
//29 35 67

console.log(grid)
//console.log(anotherGrid)
//console.log(gridStringToArrays(anotherGrid,' '))



//Not only does this function return all of the slatning adjacent elements , but also it ....
function consecutiveDiagonalMatricesArray(gridArrays,startingGridArrayItem,startingIndex){
    //someNumber variable needs to be refined and stated explicitly
    let matrixDiagonalNumbersLength = gridArrays[startingGridArrayItem].length - startingIndex
    let diagonalMatricesArray = []
    let ListItem = []
    for (let i=0 ; i<matrixDiagonalNumbersLength ; i++){
        //The appending of this try/catch statement is due to the fact that the grand original list is quite faulty ... something like that ... just check it out
        try {
            let currentMatrixValue = gridStringArrays[startingGridArrayItem][startingIndex]
            if ((currentMatrixValue != undefined) && (isNaN(parseInt(currentMatrixValue)) != true)) {
                ListItem.push(parseInt(currentMatrixValue))
            }else{
                break
            }
        }catch {
            break
        }
        startingGridArrayItem++
        startingIndex++
    }
    diagonalMatricesArray.push(ListItem)
    //ListItem.length = 0
    return(diagonalMatricesArray) }

let gridStringArrays = gridStringToArrays(grid,' ')

//right rectangle right-triangle
//for (let i=0 ; i<gridStringArrays[0].length ; i++){
    //console.log(consecutiveDiagonalMatricesArray(gridStringArrays,0,i))
//}

//hypotenuse points
//console.log(consecutiveDiagonalMatricesArray(gridStringArrays,0,0))

//left rectangle right-triangle
for (let i=1 ; i<gridStringArrays.length ; i++){
    console.log(consecutiveDiagonalMatricesArray(gridStringArrays,i,0))
}

function diagonalMatricesProduct(){
    //let gridStringArrays = gridStringToArrays(anotherGrid,' ')
    //I want to add this long-winded commenting about the parameters passed to the function , like for instance the fact that this function takes zero-based array index 
    //for (let i=0 ; i<gridStringArrays.length ; i++){
       //firstVerticalArrayLine.push(gridStringArrays[i][0]) 
    //}
    //let diagonalMatricesProductValue = 1
    //the following loop with be wrapped up with another loop for full obtain of the horizontal products
    //for (let x=0 ; x<firstHorizontalArrayLine.length ;x++){
        //consecutiveDiagonalMatricesProduct(x)
    //}
    //for (let x=1 ; x<firstHorizontalArrayLine.length ;x++){
        //consecutiveDiagonalMatricesProduct(x)
    //}
    //return([firstVerticalArrayLine,firstHorizontalArrayLine,diagonalMatricesProductValue])
}
//console.log(diagonalMatricesProduct())
