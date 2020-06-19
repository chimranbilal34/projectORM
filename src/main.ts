import { getRepository } from "typeorm";
import { Product } from "./entity/Product";
import { Variant } from "./entity/Variant";
import { Options } from "./entity/Options";
import { Images } from "./entity/Images";
import { Image } from "./entity/Image";

export const Main = async () => {
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

  const variants: any = new Variant();
  const variantRepo = getRepository(variants);

  variants.variantid = 33743427534892;
  variants.product_id = 5075261882412;
  variants.title = "test value";
  variants.price = "950.00";
  variants.sku = "120202006_PK-1274794672";
  variants.position = 1;
  variants.inventory_policy = "deny";
  variants.compare_at_price = "0.00";
  variants.fulfillment_service = "manual";
  variants.inventory_management = "shopify";
  variants.option1 = "test value";
  variants.option2 = null;
  variants.option3 = null;
  variants.created_at = "2020-04-21T01:10:33-04:00";
  variants.updated_at = "2020-05-15T05:43:15-04:00";
  variants.taxable = true;
  variants.barcode = "";
  variants.grams = 55000;
  variants.image_id = 15865517178924;
  variants.weight = 55;
  variants.weight_unit = "kg";
  variants.inventory_item_id = 35624661352492;
  variants.inventory_quantity = -4;
  variants.old_inventory_quantity = -4;
  variants.requires_shipping = true;

  // const variantss = await variantRepo.create(variants);

  await variantRepo.save(variants).catch((err) => console.log(err));

  prod.variants = [variants];

  // const options: any = new Options();

  // options.optionsid = 6514656378924;
  // options.product_id = 5075261882412;
  // options.name = "test name";
  // options.position = 1;
  // options.values = ["test value"];
  
  // const optionsRepo = getRepository(options);
  // await optionsRepo.save(options).catch((err) => console.log(err));
  // prod.options = [options];

  // const image: any = new Images();
  // const imageRepo = getRepository(image);

  // image.imageid = 15865517178924;
  // image.product_id = 5075261882412;
  // image.position = 1;
  // image.created_at = "2020-04-21T01:10:32-04:00";
  // image.updated_at = "2020-04-21T01:10:32-04:00";
  // image.alt = null;
  // image.width = 720;
  // image.height = 1001;
  // image.src =
  //   "https://cdn.shopify.com/s/files/1/0363/3286/3532/products/74b60e7c1c7b7a5d1632a45374893fdf.jpg?v=1587445832";
  // image.variant_ids = [33743427534892];

  // await imageRepo.save(image).catch((err) => console.log(err));
  // prod.images = [image];


  // const img: any = new Image();
  // const imgRepo = getRepository(img);

  // img.imageid = 15865517178924;
  // img.product_id = 5075261882412;
  // img.position = 1;
  // img.created_at = "2020-04-21T01:10:32-04:00";
  // img.updated_at = "2020-04-21T01:10:32-04:00";
  // img.src = 
  //   "https://cdn.shopify.com/s/files/1/0363/3286/3532/products/74b60e7c1c7b7a5d1632a45374893fdf.jpg?v=1587445832";
    
  // img.alt = null;
  // img.width = 720;
  // img.height = 1001;
  // img.variant_ids = [33743427534892];
  
  // prod.image = img;



  prod.storeId = "5e7a0092e8763d0cdc6b34f8";
  prod.productId = "5075261882412";
  prod.createdAt = "2020-06-10T13:41:02.128Z";
  prod.updatedAt = "2020-06-10T13:41:02.128Z";

  const p= await productRepo.save(prod).catch((err) => console.log(err));
  console.log(p)

};
