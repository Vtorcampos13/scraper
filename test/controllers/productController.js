/* import { productController } from "../../src/controllers/productController.js";

describe('Pruebas de funciones CRUD', () => {
    test('getAll debería devolver una cadena con todos los productos', () => {
      expect(getAll(productos)).toBe("television, movil, microondas");
    });
  
    test('getByNombre debería devolver el producto correcto', () => {
      expect(getByNombre(productos, "movil")).toBe("movil");
    });
  
    test('createProduct debería agregar un producto al array', () => {
      expect(createProduct("nevera", productos)).toEqual([
        "television",
        "movil",
        "microondas",
        "nevera",
      ]);
    });
  
    test('updateProduct debería actualizar el nombre de un producto', () => {
      updateProduct(productos, "television", "televisionNueva");
      expect(productos).toEqual(["televisionNueva", "movil", "microondas"]);
    });
  
    test('removeItem debería eliminar un producto del array', () => {
      expect(removeItem(productos, "movil")).toEqual(["televisionNueva", "microondas"]);
    });
  });
  

 */