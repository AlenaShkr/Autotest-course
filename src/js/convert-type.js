let convert = function(type, value) {
    let result = 'type don/\'t exist'
    if (type === 'string') {
        result= String(value);
    } else if (type === 'boolean') {
        result= Boolean(value);
    } else if (type === 'number') {
        result= Number(value);
    }
    console.log(`convert ${value} to ${type} = ${result}`)
}

export { convert };