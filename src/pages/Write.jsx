import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
  const [value, setValue] = useState('');
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style={{ display: 'none' }} type="text" id="file" name="" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Upload</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">ART</label>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="sciense">sciense</label>
          <input type="radio" name="cat" value="sciense" id="sciense" />
          <label htmlFor="art">ART</label>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">ART</label>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">ART</label>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">ART</label>
        </div>
      </div>
    </div>
  );
}

export default Write;
