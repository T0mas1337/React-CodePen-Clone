import React from "react";
import './searchbar.css';

const Searchbar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
        <div className={'searchBar-wrap'}>
                <form onSubmit={formSubmit}>
                    <input
                        type='text'
                        placeholder='Поиск по категории'
                        value={value}
                        onChange={handleSearchKey}
                    />
                    {value && <span onClick={clearSearch}>X</span>}
                    <button>Искать</button>
                </form>
        </div>
    );

export default Searchbar;