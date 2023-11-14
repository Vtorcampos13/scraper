import Product from "../../src/models/productModel";
import moongose from "mongoose";


describe("Tests de modelo de producto", () => {
    let id = null;
    const nombre = "Aifon";
    const imagen = "La manzanita querida";
    const precio = 5000;

    afterAll(async () => {
        await moongose.disconnect();
    });

    test("Crear un producto nuevo",async () => {
        const product = await Product.create({nombre,imagen,precio});
        expect(product).not.toBeNull();
        expect(product).not.toBeUndefined();
        expect(product.nombre).toEqual(nombre);
        expect(product.imagen).toEqual(imagen);
        expect(product.precio).toEqual(precio);
        id = product._id;
    });

    test("Conseguir todos los productos", async () => {
        const productos = await Product.find();
        expect(productos.length).toBeGreaterThan(0);
        expect(productos[0]).toHaveProperty("nombre");
        expect(productos[0]).toHaveProperty("imagen");
        expect(productos[0]).toHaveProperty("precio");
    })
    test("Conseguir un producto por id", async () => {
        const producto = await Product.findOne({_id:id});
        expect(producto).not.toBeUndefined();
        expect(producto).not.toBeNull();
        expect(producto.nombre).toEqual(nombre);
        expect(producto.imagen).toEqual(imagen);
        expect(producto.precio).toEqual(precio);
    })
    test("Editar un producto por id", async () => {
        const producto = await Product.findOne({_id:id});
        producto.nombre = "Anderoid";
        producto.precio = 9999,
        await producto.save();
        const productoEditado = await Product.findOne({_id:id});
        expect(productoEditado).not.toBeUndefined();
        expect(productoEditado).not.toBeNull();
        expect(productoEditado.nombre).toEqual("Anderoid");
        expect(productoEditado.imagen).toEqual(imagen);
        expect(productoEditado.precio).toEqual(9999);
    })
    test("Eliminar un producto por id", async () => {
        await Product.deleteOne({_id:id});
        const oldProduct = await Product.findOne({_id:id});
        expect(oldProduct).toBeNull();
    })
});
