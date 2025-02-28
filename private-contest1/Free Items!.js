function processData(input) {
    let lines = input.split("\n");
    
    let [n, q] = lines[0].split(" ").map(Number);
    
    let prices = lines[1].split(" ").map(Number).sort((a, b) => b - a);

    let prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + prices[i];
    }

    let results = lines.slice(2, 2 + q).map(line => {
        let [x, y] = line.split(" ").map(Number);
        return prefixSum[x] - prefixSum[x - y];
    });

    console.log(results.join("\n"));
}