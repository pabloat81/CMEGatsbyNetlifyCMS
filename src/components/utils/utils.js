export const elipsis = (str, cantCaracteres) => {
    if(!cantCaracteres)
        cantCaracteres = 22;
    if (str && str.length > 0) {
        str = str.toUpperCase();
        if (str.length > cantCaracteres) return str.substring(0, cantCaracteres) + '...';
        return str;
    }
    return 'PRODUCTO';
};