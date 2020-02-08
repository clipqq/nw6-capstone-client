const validateData = (objects) => {
    for (var i = 0; i < objects.length; i++) {
        var obj = objects[i]
        for (var prop in obj) {
            if (
                obj.hasOwnProperty(prop) &&
                obj[prop] !== null &&
                !isNaN(obj[prop])
            ) {
                obj[prop] = +obj[prop]
            }
        }
    }

    return objects
}

export { validateData }