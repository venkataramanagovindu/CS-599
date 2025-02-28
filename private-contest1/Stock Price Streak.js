function processData(input) {
    let prefixSum = [1]
    let lines = input.split('\n');
    let count = Number(lines[0]);
    let stocks = lines[1].split(' ').map(Number);
    
    for(let i = 1; i < count; i++)
    {
        let streak = 1;
        while(i - streak >= 0 && stocks[i] >= stocks[i - streak])
              {
              streak++
              }
        prefixSum.push(streak)
    }
    
    console.log(prefixSum.join(' '))
} 