let arr = ["a","b", "c"]
let arr1 = ["hi", "bye", "hello"]
let jso = {
    "hi":1,
    "bye":2
}

/*
pseudocode
simple loop
    Print each element sequentially
        for each element in len(arr)
            //element is the index of objects
            print arr[element] // gets the indexed element

loop with operations
    for each element in len(arr1)
        append "f" to arr[element] //when completed, each element in the arr has "f" at the end
        print(arr1[element])
looping over dictionaries/Jsonobject/hashmap/keyvalue object
    similar concept as above
    loop over the length of jsonObject
        var = find json[key] // return value of that key
        can be used for further use

Now to qid problem:
    create a random loop with the length of the test
        in each iteration,
            grab the qid on the test page
            var answer  = find qidArray[qid] //returns answer
            press answer

        */