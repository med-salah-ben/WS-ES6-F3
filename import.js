//named export
import {getUserAdress,getUserName} from "./modules.js";

//default export
import userCard,{getUserAdress,getUserName} from "./modules";

//all together
import * as all from './modules'

console.log(getUserAdress)