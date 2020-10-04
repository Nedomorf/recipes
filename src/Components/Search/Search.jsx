import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import style from './Search.module.css';
import bgVideo from '../../assets/bg.mp4';
import Navbar from "../Navbar/Navbar";
import Options from "../Options/Options";

const Search = () => {

    const onFocusLost = () => {
        return (search === '')
            ? setFocus(false)
            : null
    }

    const [search, setSearch] = useState('');
    const [focus, setFocus] = useState(false);

    let getRecipe = () => {
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
                    let recipe = document.getElementById('recipeBody');
                    xmlhttp.responseText.includes('<!DOCTYPE html>')
                        ? recipe.innerHTML = xmlhttp.responseText
                        : recipe.innerText = 'Не удалось получить рецепт, проверьте ссылку.'
                    console.log(xmlhttp.responseText)
                    console.log(typeof (xmlhttp.responseText))
                    // document.querySelector('body').innerHTML = xmlhttp.responseText;
                }
            }
        }
    }

    return (
        <div className={style.Search}>
            <video loop autoPlay muted className={style.clip}>
                <source src={bgVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className={style.searchContent}>
                <h1>hello</h1>
                <div className={style.searchArea}>
                    <input id="search"
                           type="text"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                           onFocus={() => setFocus(true)}
                           onBlur={() => onFocusLost()}
                           className={focus ? style.onInputFocus : null}
                    />
                    <label htmlFor="search">Paste your url here</label>
                </div>
                <NavLink to='/recipe' onClick={() => getRecipe()} className={style.btn}>
                    проверить
                </NavLink>
            </div>
        </div>
    );
}

export default Search;