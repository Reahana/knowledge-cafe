// use local storage to manage cart data
const addToDb = id => {
    let bookCart = getBookCart();
    // add quantity
    const quantity = bookCart[id];
    if (!quantity) {
        bookCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        bookCart[id] = newQuantity;
       
    }
    localStorage.setItem('book-cart', JSON.stringify(bookCart));
}
const getBookCart = () => {
    let bookCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('book-cart');
    if (storedCart) {
        bookCart = JSON.parse(storedCart);
    }
    return bookCart;
}
export {
    addToDb,
    getBookCart
}