document.getElementById('equationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let d = parseInt(document.getElementById('d').value);

    
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    let gcd_ab = gcd(a, b);
    if (d % gcd_ab !== 0) {
        document.getElementById('result').textContent = 'Решений нет, так как d не делится на НОД(a, b).';
        return;
    }

    function extendedGcd(a, b) {
        if (b === 0) {
            return [1, 0];
        } else {
            let [x1, y1] = extendedGcd(b, a % b);
            let x = y1;
            let y = x1 - Math.floor(a / b) * y1;
            return [x, y];
        }
    }

    let [x, y] = extendedGcd(a, b);
    x *= d / gcd_ab;
    y *= d / gcd_ab;

    // Выводим результат
    document.getElementById('result').textContent = `Решение: x = ${x}, y = ${y}`;
});