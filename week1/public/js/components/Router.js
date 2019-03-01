"use strict"

import { getData } from '../helpers/api.js'
import { sanitize } from '../helpers/collection.js'
import { renderPlanetDetail } from './planetDetail.js'

class Router {
    constructor(){}
init () {
    getData()
    window.addEventListener('hashchange', () => {
        sanitize()
        let hash = window.location.hash.substring(1)
        if (hash == "") {
            getData();
        } else {
            renderPlanetDetail(hash)
                }
            }
        )
    }
}
export { Router }