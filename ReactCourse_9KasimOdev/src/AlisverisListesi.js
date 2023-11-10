import React, { useState } from 'react';

function AlisverisListesi() {
    const [numItems, setNumItems] = useState(0);
    const [lists, setLists] = useState([]);
    const [listName, setListName] = useState('');
    const [listItems, setListItems] = useState(Array(numItems).fill(''));
    const [listItem, setListItem] = useState(''); 

    const handleNumItemsChange = (event) => {
        setNumItems(Number(event.target.value));
        setListItems(Array(Number(event.target.value)).fill('')); // Eleman sayısı değiştiğinde listItems sıfırla
    };

    const handleListNameChange = (event) => {
        setListName(event.target.value);
    };

    const handleItemInputChange = (event, index) => {
        const updatedItems = [...listItems];
        updatedItems[index] = event.target.value;
        setListItems(updatedItems);
    };

    const handleCreateList = () => {
        if (listName) {
            const newList = { name: listName, items: listItems.filter((item) => item !== '') };
            setLists([...lists, newList]);
            setListName('');
            setListItems(Array(numItems).fill(''));
        }
    };

    const handleAddItem = () => {
        if (listItem.trim() !== '') {
            const updatedItems = [...listItems,listItem];
            setListItems(updatedItems);
            setListItem('');
        }
    };

    const handleEditList = (index) => {
        // Burada seçilen listenin düzenlenmesi işlemleri yapılacak.
    };

    const handleDeleteList = (index) => {
        const newLists = [...lists];
        newLists.splice(index, 1);
        setLists(newLists);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Alışveriş Listesi Oluştur</h2>
                    <input
                        type="text"
                        placeholder="Liste Adı"
                        value={listName}
                        onChange={handleListNameChange}
                        className="form-control"
                    />
                    <label>Eleman Sayısı:
                        <input
                            type="number"
                            value={numItems}
                            onChange={handleNumItemsChange}
                            className="form-control"
                        />
                    </label>
                    <ul>
                        {listItems.map((item, index) => (
                            <li key={index}>
                                <input
                                    type="text"
                                    placeholder={`Ürün #${index + 1}`}
                                    value={item}
                                    onChange={(event) => handleItemInputChange(event, index)}
                                    className="form-control"
                                />
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        placeholder="Ürün Ekle"
                        value={listItem}
                        onChange={(event) => setListItem(event.target.value)}
                        className="form-control"
                    />
                    <button onClick={handleAddItem} className="btn btn-primary">Ürün Ekle</button>
                    <button onClick={handleCreateList} className="btn btn-success">Liste Oluştur</button>
                </div>
                <div className="col-md-6">
                    <h2>Alışveriş Listeleri</h2>
                    {lists.map((list, index) => (
                        <div key={index} className="shopping-list">
                            <h3>{list.name}</h3>
                            <ul>
                                {list.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                            <button onClick={() => handleEditList(index)} className="btn btn-secondary">Düzenle</button>
                            <button onClick={() => handleDeleteList(index)} className="btn btn-danger">Sil</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AlisverisListesi;
