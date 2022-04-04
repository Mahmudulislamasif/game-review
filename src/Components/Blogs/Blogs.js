import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'>
           <div className='row g-4'>
           <div className='col-md-6 mt-3'>
            <div className='question-design'>
            <h5>What are Block, inline and inline-block elements in html/css?</h5>
             <p>Block, inline and inline-block those are main properties in html/css.Block Element uses entire rows in a webpage portion whreas inline elements uses small portion of row. In other words, Block elements starts on a new line but inline elements not started in new line. Some basic Examples are:
             Block elements: paragraph, heading tags etc. Inline Element: span,small, bold etc. When inline elements behave as block elements then its called inline-block element.
            </p>
            </div>
            </div>
            <div className='col-md-6 mt-3'>
            <div className='question-design'>
            <h5>What is semantic tag in html?</h5>
             <p>Semantic tag is an organization of container tag that is mainly used to clear the meaning of codes in a human and machine readable way. It devides the deloper codes into different parts like header, navbar, section, footer, article. In different sections there can be many tags of HTML to organize webpage machine readable form. It makes presentation very clear that anyone can read code easily which is provided by developer.
            </p>
            </div>
            </div>
           </div>

        </div>
    );
};

export default Blogs;