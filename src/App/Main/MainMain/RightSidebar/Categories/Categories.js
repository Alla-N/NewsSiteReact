import React from 'react';


const Categories = () =>{
    return(
        <div className='categories'>
            <div className="sideBarTitle">
                <h3>
                    Categories
				</h3>
            </div>
            <ul>
                <li><a href="#/">Photography</a></li>
                <li><a href="#/">Illustration</a></li>
                <li><a href="#/">Graphic design</a></li>
                <li><a href="#/">Web design</a></li>
                <li><a href="#/">Videography</a></li>
            </ul>
        </div>
    )
}

export default Categories;