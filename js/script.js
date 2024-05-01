// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function calculate() {
    let size = document.getElementById("size").value
    let toppings = document.getElementById("toppings").value

    let sizePrice = 0
    let toppingsPrice = 0

    if (size == "Large"){
        sizePrice = 6.00
    } else if (size == "Extra large") {
        sizePrice = 11.00
    } else {
        document.getElementById("size").innerHTML = "Error"
    }

    if (toppings == "1 topping") {
        toppingsPrice = 1.00
    } else if (toppings == "2 toppings") {
        toppingsPrice = 1.75
    } else if (toppings == "3 toppings") {
        toppingsPrice = 2.50
    } else if (toppings == "3 toppings") {
        toppingsPrice = 3.35
    } else {
        document.getElementById("toppings").innerHTML = "Error"
    }

    let totalPrice = ( sizePrice + toppingsPrice ) * 0.13 + ( sizePrice + toppingsPrice )  

    document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice + "! Enjoy your meal!"
}