import Product from "../../src/models/productModel";


describe("Tests de modelo de producto", () => {
    let id = null;
    const nombre = "Aifon";
    const descripcion = "La manzanita querida";
    const precio = 5000;

    test("Crear un producto nuevo",async () => {
        const product = await Product.create({nombre, descripcion, precio});
        expect(product).not.toBeNull();
        expect(product).not.toBeUndefined();
        expect(product.nombre).toEqual(nombre);
        expect(product.descripcion).toEqual(descripcion);
        expect(product.precio).toEqual(precio);
        id = product._id;
    });

    test("Conseguir todos los productos", async () => {
        const productos = await Product.find();
        expect(productos.length).toBeGreaterThan(0);
        expect(productos[0]).toHaveProperty("nombre");
        expect(productos[0]).toHaveProperty("descripcion");
        expect(productos[0]).toHaveProperty("precio");
    })
    test("Conseguir un producto por id", async () => {
        const producto = await Product.findOne({_id:id});
        expect(producto).not.toBeNull();
        expect(producto).not.toBeUndefined();
        expect(producto.nombre).toEqual(nombre);
        expect(producto.descripcion).toEqual(descripcion);
        expect(producto.precio).toEqual(precio);
    })
    test("Editar un producto por id", async () => {
        const producto = await Product.findOne({_id:id});
        producto.nombre = "Anderoid";
        producto.precio = 9999,
        producto.save();
        const productoEditado = await Product.findOne({_id:id});
        expect(productoEditado).not.toBeNull();
        expect(productoEditado).not.toBeUndefined();
        expect(productoEditado.nombre).toEqual("Anderoid");
        expect(productoEditado.descripcion).toEqual(descripcion);
        expect(productoEditado.precio).toEqual(9999);
    })
    test("Eliminar un producto por id", async () => {
        await Product.deleteOne({_id:id});
        const oldProduct = await Product.findOne({_id:id});
        expect(oldProduct).toBeNull();
    })
});
