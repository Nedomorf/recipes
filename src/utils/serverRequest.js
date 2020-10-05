const getRecipe = (search) => {
    let str = search;
    // let str = 'https://vk.com/public155530308?w=wall-155530308_39638';
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://unoiled-initiator.000webhostapp.com/rar.php?q=" + str, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        // <4 = ожидаем ответ от сервера
        if (xmlhttp.readyState < 4) {
            let a = '';
        }
        // 4 = Ответ от сервера полностью загружен
        else if (xmlhttp.readyState === 4) {
            // 200 - 299 = успешная отправка данных!
            if (xmlhttp.status === 200 && xmlhttp.status < 300) {
                // return <Redirect to={{
                //     pathname: '/recipe',
                //     state: {recipe: xmlhttp.responseText}
                // }}/>

                // let recipe = document.getElementById('recipeBody');
                // let regex = "/<(.|\n)*?>/";
                // let body = xmlhttp.responseText;
                // let result = body.replace(regex, "");
                // recipe.innerHTML = result;

                let recipe = document.getElementById('recipeBody');
                if (xmlhttp.responseText.includes('<!DOCTYPE html>')) {
                    recipe.innerHTML = xmlhttp.responseText;
                    let abc = recipe.getElementsByClassName('pi_text');
                    let qwe = recipe.getElementsByClassName('fill');
                    let zxc = recipe.getElementsByTagName('a');
                    let m = [];
                    for (let i = 0; i < zxc.length; i++) {
                        if (zxc[i].className.includes('al_photo')) m.push('vk.com' + zxc[i].pathname)
                    }
                    let res = '';
                    for (let i = 0; i < m.length; i++) {
                        // ${m[i]}
                        let str = "'" + m[i] + "'";
                        res += `<a href=${str}/>`;
                    }
                    let z = document.createElement('div');
                    z.innerHTML = res;
                    let x = z.innerText.replace('\\', '');
                    recipe.innerHTML = abc[0].innerHTML + x;
                    debugger

                    // let abc = recipe.getElementsByClassName('wi_body');
                    // let zxc = recipe.getElementsByTagName('a');
                    // let m = [];
                    // let regExp = /\(([^)]+)\)/;
                    // let match;
                    //
                    // for (let i = 0; i < zxc.length; i++) {
                    //     if (zxc[i].className.includes('al_photo')) {
                    //         m.push('vk.com' + zxc[i].pathname);
                    //         match = regExp.exec(zxc[i].innerHTML);
                    //         debugger
                    //     }
                    // }
                    // debugger
                    // let x = '';
                    // for (let i = 0; i < m.length; i++) {
                    //     x += m[i].replace('\\', '')
                    // }
                    // debugger
                    // recipe.innerHTML = abc[0].innerHTML + match.map(el => {
                    //     return `<a href=${el} style="width: 300px; height: 300px"/>`
                    // });
                    // debugger

                } else {
                    recipe.innerText = 'Не удалось получить рецепт, проверьте ссылку.'
                }
                console.log(xmlhttp.responseText)
                console.log(typeof (xmlhttp.responseText))

                // document.querySelector('body').innerHTML = xmlhttp.responseText;
            }
        }
    }
}

export default getRecipe;