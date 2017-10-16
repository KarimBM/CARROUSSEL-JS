'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
var user;
var sword;
var youHit;

var slaying = true;
var beingSlayed = false;

function getRandomInteger(min,max)
{
    var random = Math.floor(Math.random()*(max - min + 1) + min);
    return random;
}
