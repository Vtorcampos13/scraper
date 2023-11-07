/* const products =[
    {
        "name": "Lavadora",
        "marca": "LG",
        "precio": 1000
    },
    {
        "name": "Television",
        "marca": "Samsung",
        "precio": 2000
    },
    {
        "name": "Refrigeradora",
        "marca": "LG",
        "precio": 3000
    },
    {
        "name": "Laptop",
        "marca": "HP",
        "precio": 4000
    },
    {
        "name": "Laptop",
        "marca": "HP",
        "precio": 4000
    }
];
 let nextId = 5;
 const getAllProducts = (req, res) => {
    return getAllProducts;
    };


const getProductById = (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).send("Product not found");
    }
};


const createProduct = (req, res) => {
    const product = req.body;
    product.id = nextId++;
    products.push(product);
    res.status(201).json(product);
};

const updateProduct = (req, res) => {
    const id = req.params.id;
    const product = req.body;
    product.id = id;
    const index = products.findIndex((product) => product.id === id);
    products[index] = product;
    res.status(200).json(product);
};


const removeProduct = (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((product) => product.id === id);
    products.splice(index, 1);
    res.status(200).send();
};


export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    removeProduct,
}; */