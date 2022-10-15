function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://cdn.jsdelivr.net/gh/krcooke-UA/ChoiceScriptCheats@3/Cheat.js')
    //https://raw.githubusercontent.com/krcooke-UA/ChoiceScriptCheats/main/Cheat.js
    .then(() => {
        console.log('Script loaded!');
        var btns = document.getElementById("buttons");
        btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='log()'>Cheats</button>";
        //console.log(btns.innerHTML);
    }).catch(error => {
        console.error(error);
    });
injectScript('https://unpkg.com/react@18/umd/react.development.js')
    .then(() => {
        console.log('Script loaded!');
    }).catch(error => {
        console.error(error);
    });
injectScript('https://unpkg.com/react-dom@18/umd/react-dom.development.js')
    .then(() => {
        console.log('Script loaded!');
    }).catch(error => {
        console.error(error);
    });