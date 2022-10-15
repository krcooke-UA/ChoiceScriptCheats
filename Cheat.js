import React, { useState } from 'react';

function log() {
    console.log(this.stats);
    var headerLinks = document.getElementById("headerLinks");
    headerLinks.innerHTML = headerLinks.innerHTML + "<div class='popup' onclick = 'myFunction()'>Click me!< span class='popuptext' id = 'myPopup'> Popup text...</span ></div>";
};
