function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://cdn.jsdelivr.net/gh/krcooke-UA/ChoiceScriptCheats@cd8ae87636eef449c3772311441f9416b1a5d638/Cheat.js')
    .then(() => {
        console.log('Script loaded!');
        var btns = document.getElementById("buttons");
        btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Cheats</button>";
        //console.log(btns.innerHTML);
    }).catch(error => {
        console.error(error);
    });