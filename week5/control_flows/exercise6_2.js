let height = 5;
for(let i = height; i >= 1 ; i--){
    let row = '';

    for(let j = i; j >= 1; j--){
        row += '*';
    }
    console.log(row);
}
