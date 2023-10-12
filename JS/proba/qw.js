function get(x) {
    if (x < 5) {
        x++
        console.log(get(x));
    }
    return x;
}
alert(get(1));