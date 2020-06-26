import { StoreImages } from "./entity/StoreImages";
import { StoreProduct } from "./entity/StoreProduct";
import { getRepository } from "typeorm";
import { User } from "./entity/User";
import { Tweet } from "./entity/Tweet";
import { Test } from "./entity/Test";
import { StoreVariant } from "./entity/StoreVariant";
import { StoreOption } from "./entity/StoreOption";
import { StoreImage } from "./entity/SimpleImage";
import { Product } from "./entity/Product";

export const createProduct = async () => {

  //StoreProductandStoreVariant Relationship ALL
  
/*   const storeVariantRepo = getRepository(StoreVariant);
  const storevarient = new StoreVariant();
  storevarient.title = "Black";
  storevarient.variantid = "33743427534892";
  storevarient.product_id = "5075261882412";
  storevarient.price = "950.00";
  storevarient.sku = "120202006_PK-1274794672";
  storevarient.position = 1;
  storevarient.inventory_policy = "deny";
  storevarient.compare_at_price = "0.00";
  storevarient.fulfillment_service = "manual";
  storevarient.inventory_management = "shopify";
  storevarient.option1 = "test value";
  storevarient.option2 = null;
  storevarient.option3 = null;
  storevarient.created_at = "2020-04-21T01:10:33-04:00";
  storevarient.updated_at = "2020-05-15T05:43:15-04:00";
  storevarient.taxable = true;
  storevarient.barcode = "";
  storevarient.grams = 55000;
  storevarient.image_id = "15865517178924";
  storevarient.weight = 55;
  storevarient.weight_unit = "kg";
  //id convert to string because limit exceed in mysql
  storevarient.inventory_item_id = "35624661352492";
  storevarient.inventory_quantity = -4;
  storevarient.old_inventory_quantity = -4;
  storevarient.requires_shipping = true;
  const storevar = await storeVariantRepo.create(storevarient);
  await storeVariantRepo.save(storevar).catch((err) => console.log(err));
  console.log("StoreVariant save :", storevar);

  //options
  const optionRepo = getRepository(StoreOption);
  const storeOption = new StoreOption();
  storeOption.optionid = "6514656378924";
  storeOption.product_id = "5075261882412";
  storeOption.name = "test name";
  storeOption.position = 1;
  storeOption.values = ["test value"];
  const storeopt: any = await storeVariantRepo.create(storeOption);
  await optionRepo.save(storeopt).catch((err) => console.log(err));
  console.log("StoreOption save :", storeopt);

  //Images
  const imageRepo = getRepository(StoreImages);
  const storeImage = new StoreImages();
  storeImage.image_id = "15865517178924";
  storeImage.product_id = "5075261882412";
  storeImage.position = 1;
  storeImage.created_at = "2020-04-21T01:10:32-04:00";
  storeImage.updated_at = "2020-04-21T01:10:32-04:00";
  storeImage.alt = null;
  storeImage.width = 720;
  storeImage.height = 1001;
  storeImage.src =
    "https://cdn.shopify.com/s/files/1/0363/3286/3532/products/74b60e7c1c7b7a5d1632a45374893fdf.jpg?v=1587445832";
  storeImage.variant_ids = ["33743427534892"];
  const storeimg = await imageRepo.create(storeImage);
  await imageRepo.save(storeimg).catch((err) => console.log(err));
  console.log("StoreOption save :", storeimg);

  //Image
  const imgRepo = getRepository(StoreImage);
  const img = new StoreImage();
  img.image_id = "15865517178924";
  img.product_id = "5075261882412";
  img.position = 1;
  img.created_at = "2020-04-21T01:10:32-04:00";
  img.updated_at = "2020-04-21T01:10:32-04:00";
  img.src =
    "https://cdn.shopify.com/s/files/1/0363/3286/3532/products/74b60e7c1c7b7a5d1632a45374893fdf.jpg?v=1587445832";
  img.alt = null;
  img.width = 720;
  img.height = 1001;
  img.variant_ids = ["33743427534892"];
  const storesingleimg = await imgRepo.create(storeImage);
  await imgRepo.save(storesingleimg).catch((err) => console.log(err));
  console.log("StoreOption save :", storesingleimg);

  const prodcutRepo = getRepository(StoreProduct);
  const storeProduct = new StoreProduct();
  storeProduct.title = "1 ton - 1.5 ton AC Cover - Safety Protector";
  storeProduct.body_html =
    '<p></p><h2>Specifications<br>\n</h2>\n\t\t<div class="product-tabs-content-inner clearfix"><div class="additional-info">\n<span class="title">General</span>\n\t\t\t\t<table class="data-table" id="product-attribute-specs-table">\n<colgroup> <col width="25%"> <col> </colgroup>\n\t\t\t\t<tbody>\n<tr class="firstodd&lt;tr class=" even>\n\t\t\t\t<th class="t-label">SKU</th>\n<td class="data">120202006_PK-1274794672</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">CAPACITY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">DESCRIPTION/0</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">BOX</th>\n<td class="data">AC cover 2 pieces , 1 for inner other for outer</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">CONNECTING WIRE</th>\n<td class="data">No</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">KIT INCLUDED</th>\n<td class="data">No</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">WARRANTY PERIOD</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">INVERTER</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">HOME FEATURES</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">HORSE POWER</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">ROOM SIZE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">POWER CONSUMPTION</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">MODEL</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">WARRANTY TYPE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PRODUCT WARRANTY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">COLOR FAMILY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">SHORT DESCRIPTION EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">NAME EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">DESCRIPTION EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">IMPORTED</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PRODUCT WARRANTY EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">QUANTITY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">DELIVERY OPTION ECONOMY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">SPECIAL PRICE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">SPECIAL FROM DATE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">SPECIAL TO DATE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">SELLER PROMOTION</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">PACKAGE WEIGHT</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PACKAGE LENGTH</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">PACKAGE WIDTH</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PACKAGE HEIGHT</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">TAX CLASS</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">HAZMAT</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">EXPRESS DELIVERY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="lasteven">\n\t\t\t\t<th class="t-label"></th>\n<td class="data"></td>\n</tr>\n</tbody>\n</table>\n</div></div>';
  storeProduct.vendor = "mibc-store";
  storeProduct.product_type = "self made";
  storeProduct.created_at = "2020-04-21T01:10:32-04:00";
  storeProduct.handle = "1-ton-15-ton-ac-cover-safety-protector";
  storeProduct.updated_at = "2020-05-15T05:45:58-04:00";
  storeProduct.published_at = "2020-04-21T02:08:43-04:00";
  storeProduct.template_suffix = null;
  storeProduct.published_scope = "web";
  storeProduct.tags = "";
  storeProduct.storeId = "5e7a0092e8763d0cdc6b34f8";
  storeProduct.productId = "5075261882412";
  storeProduct.createdAt = "2020-06-10T13:41:02.128Z";
  storeProduct.updatedAt = "2020-06-10T13:41:02.128Z";

  storeProduct.varient = [storevar];
  storeProduct.option = [storeopt];
  storeProduct.images = [storeimg];
  storeProduct.image = storesingleimg;
  await prodcutRepo.save(storeProduct).catch((err) => console.log(err));
  console.log("New Product save ", storeProduct);

 */

   //Find record query
/*   const storeRepo = getRepository(StoreProduct);
  const productfind = await storeRepo
    .find({ relations: ["images", "varient","option","image"] })
    .then((res) => {
      console.log(res[0]);
    })
    .catch((err) => console.log(err));  */

 

  //Relationship with json data
  const prod = new Product();
  const productRepo = getRepository(Product);

  prod.title = "1 ton - 1.5 ton AC Cover - Safety Protector";
  prod.body_html =
    '<p></p><h2>Specifications<br>\n</h2>\n\t\t<div class="product-tabs-content-inner clearfix"><div class="additional-info">\n<span class="title">General</span>\n\t\t\t\t<table class="data-table" id="product-attribute-specs-table">\n<colgroup> <col width="25%"> <col> </colgroup>\n\t\t\t\t<tbody>\n<tr class="firstodd&lt;tr class=" even>\n\t\t\t\t<th class="t-label">SKU</th>\n<td class="data">120202006_PK-1274794672</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">CAPACITY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">DESCRIPTION/0</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">BOX</th>\n<td class="data">AC cover 2 pieces , 1 for inner other for outer</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">CONNECTING WIRE</th>\n<td class="data">No</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">KIT INCLUDED</th>\n<td class="data">No</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">WARRANTY PERIOD</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">INVERTER</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">HOME FEATURES</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">HORSE POWER</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">ROOM SIZE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">POWER CONSUMPTION</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">MODEL</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">WARRANTY TYPE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PRODUCT WARRANTY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">COLOR FAMILY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">SHORT DESCRIPTION EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">NAME EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">DESCRIPTION EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">IMPORTED</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PRODUCT WARRANTY EN</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">QUANTITY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">DELIVERY OPTION ECONOMY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">SPECIAL PRICE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">SPECIAL FROM DATE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">SPECIAL TO DATE</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">SELLER PROMOTION</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">PACKAGE WEIGHT</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PACKAGE LENGTH</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">PACKAGE WIDTH</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">PACKAGE HEIGHT</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">TAX CLASS</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="even">\n\t\t\t\t<th class="t-label">HAZMAT</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="odd">\n\t\t\t\t<th class="t-label">EXPRESS DELIVERY</th>\n<td class="data">N/A</td>\n</tr>\n<tr class="lasteven">\n\t\t\t\t<th class="t-label"></th>\n<td class="data"></td>\n</tr>\n</tbody>\n</table>\n</div></div>';
  prod.vendor = "mibc-store";
  prod.product_type = "";
  prod.created_at = "2020-04-21T01:10:32-04:00";
  prod.handle = "1-ton-15-ton-ac-cover-safety-protector";
  prod.updated_at = "2020-05-15T05:45:58-04:00";
  prod.published_at = "2020-04-21T02:08:43-04:00";
  prod.template_suffix = null;
  prod.published_scope = "web";
  prod.tags = "";
  prod.variants = [
    {
      id: 33743427534892,
      product_id: 5075261882412,
      title: "test value",
      price: "950.00",
      sku: "120202006_PK-1274794672",
      position: 1,
      inventory_policy: "deny",
      compare_at_price: "0.00",
      fulfillment_service: "manual",
      inventory_management: "shopify",
      option1: "test value",
      option2: null,
      option3: null,
      created_at: "2020-04-21T01:10:33-04:00",
      updated_at: "2020-05-15T05:43:15-04:00",
      taxable: true,
      barcode: "",
      grams: 55000,
      image_id: 15865517178924,
      weight: 55,
      weight_unit: "kg",
      inventory_item_id: 35624661352492,
      inventory_quantity: -4,
      old_inventory_quantity: -4,
      requires_shipping: true,
    },
  ];
  prod.options = {
    id: 6514656378924,
    product_id: 5075261882412,
    name: "test name",
    position: 1,
    values: ["test value"],
  };
  prod.images = [
    {
      id: 15865517178924,
      product_id: 5075261882412,
      position: 5,
      created_at: "2020-04-21T01:10:32-04:00",
      updated_at: "2020-04-21T01:10:32-04:00",
      alt: null,
      width: 720,
      height: 1001,
      src:
        "https://cdn.shopify.com/s/files/1/0363/3286/3532/products/74b60e7c1c7b7a5d1632a45374893fdf.jpg?v=1587445832",
      variant_ids: [33743427534892],
    },
  ];
  prod.image = {
    id: 15865517178924,
    product_id: 5075261882412,
    position: 1,
    created_at: "2020-04-21T01:10:32-04:00",
    updated_at: "2020-04-21T01:10:32-04:00",
    alt: null,
    width: 720,
    height: 1001,
    src:
      "https://cdn.shopify.com/s/files/1/0363/3286/3532/products/74b60e7c1c7b7a5d1632a45374893fdf.jpg?v=1587445832",
    variant_ids: [33743427534892]
  };
  prod.storeId = "5e7a0092e8763d0cdc6b34f8";
  prod.productId = "5075261882412";
  prod.createdAt = "2020-06-10T13:41:02.128Z";
  prod.updatedAt = "2020-06-10T13:41:02.128Z";

  const product = await productRepo.create(prod);
  await productRepo.save(product).catch((err) => console.log(err));
  console.log("New user saved ", product); 

  //   //Find record query
  // const productRepo= getRepository(Product)
  //   const productfind = await productRepo.findOne({
  //     where: { images: { position: 5 } }}).then(res => {
  //       console.log(res)
  //   }).catch(err => console.log(err))
  
};
