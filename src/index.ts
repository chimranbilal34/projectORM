import { Main } from './main';
import { createCategory } from "./createCatagory";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    await createCategory().catch((err) => console.log(err));

}).catch(error => console.log(error));
