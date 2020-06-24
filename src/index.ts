import { Main } from './main';
import { createProduct } from "./createProduct";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    await createProduct().catch((err) => console.log(err));

}).catch(error => console.log(error));
