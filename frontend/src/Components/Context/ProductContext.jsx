const { createContext, useState, useEffect } = require("react");

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');

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
        <ProductContext.Provider value={{ products, loading, err }} >
            {children}
        </ProductContext.Provider>
    )

}

export { ProductContext , ProductProvider};

