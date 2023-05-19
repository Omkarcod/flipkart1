import { products } from "./constantsData/Data.js";
import product from "./model/ProductSchema.js";

const DefaultData = async() => {
  try {
    // await product.deleteMany({})
    await product.insertMany(products);
    console.log("Data inserted Sucessfully");
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};
export default DefaultData;
