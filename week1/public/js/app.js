'use strict';
// from component folder
import { Router } from './components/Router.js'
import { getData } from './helpers/api.js'
import { getAllData } from './helpers/allData.js'

let app = document.getElementById("root");
let submit = document.getElementById("submit");
    submit.addEventListener("click", getData)

let submitAllButton = document.getElementById("submitAll");
submitAllButton.addEventListener("click", getAllData)

const router = new Router();
router.init()

export { app }

