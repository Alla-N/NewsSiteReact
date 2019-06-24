import React,{Component} from 'react';

import MainHeader from './MainHeader/MainHeader.js';
import MainMain from './MainMain/MainMain.js';

class Main extends Component {

    state = {
        filter:'all',
    }


    filterNews = (filterValue) => {

        this.setState(() =>  ({

            filter:filterValue,

        }));

    }

   
    render(){

        return(
        <div>
            <MainHeader 
            filterNews={this.filterNews} />
            
            <MainMain 
            filterParameter={this.state.filter}
            />
        </div>
    ) 
   
    }
}


export default Main;