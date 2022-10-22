
function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://cdn.jsdelivr.net/gh/krcooke-UA/ChoiceScriptCheats@8c7198031b8693366730f97d7e47bbe464632ab4/Cheat.js')
    .then(() => {
        console.log('Script loaded!');
        var btns = document.getElementById("buttons");
        btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Cheats</button>";
        //console.log(btns.innerHTML);
    }).catch(error => {
        console.error(error);
    });