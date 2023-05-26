import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';


function App() {
  const API_URL = 'http://localhost:3500/items';

  // (JSON.parse(localStorage.getItem('shopping list'
  // )) ||

  const [items, setItems] = useState([]);
    // JSON.parse(localStorage.getItem('shopping list'
    //  )) ||
    
  

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect (() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error ('did not recieve expected error');
        const listItems  = await response.json();
        console.log(listItems)
        setItems(listItems);
        setFetchError(null);
      } catch (err){
         setFetchError(err.message);
      } finally {
        setisLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();

    }, 2000)

   
    // localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [])


  

  /* const setAndSaveItems = (newItem) => {
    setItems(newItem)
    localStorage.setItem("shopping list", JSON.stringify(newItem));

  } */

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1: 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem]
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'content-type' : "application/json"
      },
      body: JSON.stringify(myNewItem)
    }
    const result = apiRequest (API_URL, postOptions);
    if(result) setFetchError(result)
  }






  
  const HandleCheck = async (id) => {
    const listItems =  items.map((item) => item.id === id ? {...item,
    checked: !item.checked } : item);
    setItems(listItems);


    const myItem = listItems.filter((item) =>item.id ===id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        'content-Type' : 'application/json'
      },
      body:JSON.stringify({checked: myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result =  await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);

  }






  const HandleDelete = async(id) => {
     const listItems = items.filter((item) => item.id !== id);
     setItems(listItems)
    //  localStorage.setItem("shopping list", JSON.stringify(listItems));

    const deleteOptions = { method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
    const result =  apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }
   
   const HandleSubmit  = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
   
   }
  


  return (
    <div className='App'>
       <Header title= "provisions"/>
    
       <AddItem
       newItem = {newItem}
       setNewItem = {setNewItem}
       HandleSubmit = {HandleSubmit}
       
       />
       
       <SearchItem
       search= {search}
       setSearch = {setSearch}
       
       />

       <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{color: "red"}}>'{fetchError}'</p>}
      
        {!fetchError && !isLoading && <Content
          items = {items.filter(item => ((item.item).toLowerCase()).includes
          (search.toLowerCase()))} 
          HandleCheck = {HandleCheck}
          HandleDelete = {HandleDelete}
          
         />}

       </main>



      
     
     
       <Footer length={items.length}
    
       />
      

    </div>
   
   
  );
}

export default App;
