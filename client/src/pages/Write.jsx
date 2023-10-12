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
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
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
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Upload</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">ART</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="sciense" id="sciense" />
            <label htmlFor="sciense">sciense</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cineme" id="cinema" />
            <label htmlFor="cineme">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
