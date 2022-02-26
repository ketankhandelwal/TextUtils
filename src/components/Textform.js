import React ,{useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Textform = (props) => {
    const handleUpClick=() =>{
        console.log("Upper Case button is clicked");
        let newText= text.toUpperCase();
        setext(newText);
        props.Al("Converted","Success")
        

    }
    const handleOnChange= (event)=>{
        console.log("This is Changing");
        setext(event.target.value);
       
    }
    const [text,setext]= useState('')
    // setext("New Text");
    return (
        <>
    <div>
    
    <div className="mb-3">
    <label for="mybox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange}   id="mybox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Upper Case</button>

    </div>
    <div className="container">
        <h3>Your text length is : {text.length} and word count is {text.split(" ").length-1}</h3>
    </div>
    </>
    )
}

Textform.propTypes = propTypes;
Textform.defaultProps = defaultProps;
// #endregion

export default Textform;