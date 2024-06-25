const { createContext, useState, useEffect } = require("react");

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        // Check if the item is already in the cart
        const isItemInCart = cart.some(
            (cartItem) => cartItem.id === item.id && cartItem.size === cartItem.size
        );

        // If the item is not in the cart, add it
        if (!isItemInCart) {
            setCart([...cart, item]);
        }
        console.log(cart)

    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const fetchProducts = async () => {
        await fetch('http://localhost:6060/api/products').then(async (res) => {
            const resData = await res.json();
            // console.log(resData);
            setProducts(resData.product)
            setLoading(false)
        }).catch((e) => {
            setErr(e)
            setLoading(false)
            console.log("Error while fetching Product data : " + e)
        })
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading, err, cart, addToCart, removeFromCart }} >
            {children}
        </ProductContext.Provider>
    )

}

export { ProductContext, ProductProvider };

