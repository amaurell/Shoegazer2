/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';
import ButtonAdd from './styles';

import Table from '../../components/Table';

import './AddVideo.css';

const AddVideo = () => {
  const [categories2, setCategories2] = useState([]);

  const [atualLink, setAtuaLink] = useState([{ nome: '', url: '' }]);

  const [musicName, setMusicName] = useState('');

  const [videoLinks, setVideoLinks] = useState();

  const [inputLinks, setInputLinks] = useState(['1']);

  const [bandName, setBandName] = useState('');

  const [password, setPassword] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const URL = 'https://tranquil-beach-70411.herokuapp.com/videos';
      const response = await fetch(URL);
      const data = await response.json();

      if (data) {
        setCategories2([
          ...data,
        ]);
      }
    }
    getData();
  }, []);

  function captureLink(e) {
    setVideoLinks(e.target.value);
  }

  function captureName(e) {
    setMusicName(e.target.value);
  }

  function addVideoArray() {
    setAtuaLink([...atualLink, { nome: musicName, url: videoLinks }]);
  }

  function oneMoreField() {
    setInputLinks([...inputLinks, '1']);

    setVideoLinks('');
  }

  async function sendToServer() {
    const bandsArray = atualLink.slice(1, atualLink.length);
  
    const URL = `https://tranquil-beach-70411.herokuapp.com/videos/update/${bandName}`;
    await fetch(URL, {
      method: 'post',
      mode: 'no-cors',

      body: await JSON.stringify({
        nome: bandName,
        cor: 'default',
        new_bands: bandsArray,
      }),
    }).then((response) => response.json()).then((json) => console.log(json));
  }

  return (
    <>
      <PageDefault>
        <div className="Supreme-Container-Leader">
          <div className="Container">
            <div className="Title">
              <h1>Add New Video</h1>
            </div>
            <ButtonAdd as={Link} to="/add/category" className="buttonLink">
              New Category
            </ButtonAdd>
            <p>Select Band</p>
            <select className="option">
              <option value="" />
              {categories2.map((category) => <option onClick={(e) => setBandName(e.target.value)} value={category.titulo}>{category.titulo}</option>)}
            </select>

            <form>
              <div>
                <table className="tabela">
                  <th>Add</th>
                  <th>
                    Link
                  </th>
                  <th>Name</th>
                </table>
              </div>
              {inputLinks.map(() => (
                <>
                  <input type="checkbox" className="checkbox" onClick={addVideoArray} />
                  <input className="input_link" onChange={(e) => captureLink(e)} type="" />
                  <input className="input_name" onChange={(e) => captureName(e)} type="" />
                  <button type="button" onClick={oneMoreField} className="butao">+</button>
                  <br />
                </>
              ))}

              <div className="center">
                {password !== 'mellome' ? (
                  <>
                    <input onChange={(e) => setPassword(e.target.value)} className="input_pass" placeholder="Password" />
                  </>
                ) : (
                    <button className="button_submit" type="submit" onClick={sendToServer}>
                      Submit
                    </button>
                  )}
              </div>
            </form>

          </div>
        </div>
      </PageDefault>
    </>
  );
};

export default AddVideo;
