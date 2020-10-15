import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import style from './Search.module.css';
import bgVideo from '../../assets/bg.mp4';
import {getRecipe} from "../../utils/serverRequest";

const Search = () => {

    const onFocusLost = () => {
        return (search === '')
            ? setFocus(false)
            : null
    }

    const [search, setSearch] = useState('');
    const [focus, setFocus] = useState(false);

    return (
        <div className={style.Search}>
            <div className={style.bg}/>
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
                <NavLink to='/recipe' onClick={() => getRecipe(search)} className={style.btn}>
                    <button>
                        проверить
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default Search;