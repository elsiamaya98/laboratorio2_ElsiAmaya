function calcSurface(figure) {
    let surfaces = require ('./surfaces.js');
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    switch (figure) {
        case 'cuadro':
            process.stdout.write('Por favor entre un lado del cuadro: ');
            process.stdin.on('dato', function (chunk) {
                let side = parseFloat(chunk);
                let surface = surfaces.square(side);
                process.stdout.write('la superficie del cuadrado es ' + surface + ' metros cuadrados\n');
                process.stdin.destroy();
            });
            break;
        case 'triangulo':
            process.stdout.write('Por favor entre la base y altura del triangulo, separados por un espacio: ');
            process.stdin.on('dato', function (chunk) {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height);
                process.stdout.write('La superficie del triangulo es ' + surface + ' metros cuadrados\n');
                process.stdin.destroy();
            });
            break;
        case 'rectangulo':
            process.stdout.write('Por favor entre la base y altura del rectangulo, separados por un espacio: ');
            process.stdin.on('dato', function (chunk) {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);
                process.stdout.write('La superficie del rectangulo es ' + surface + ' metros cuadrados\n');
                process.stdin.destroy();
            });
            break;
        case 'circulo':
            process.stdout.write('Por favor ingrese el area del circulo: ');
            process.stdin.on('dato', function (chunk) {
                let surface = surfaces.circle(parseFloat(chunk));
                process.stdout.write('La superficie del circulo es ' + surface + ' metros cuadrados\n');
                process.stdin.destroy();
            });
            break;
        default:
            process.stdout.write('Se perdió esa opción. Por favor intente de nuevo.\n');
            process.exit();
            break;
    }
}
calcSurface(process.argv[2]);
process.on('exit', function() {
    process.stdout.write('¡Hasta la próxima amigo!\n');
});