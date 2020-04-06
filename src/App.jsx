import * as React from "react";

import * as UTILS from "../src/utils";
import Axios from "axios";
import AddArtwork from "./components/AddArtwork";
import CategorySelector from "./components/CategorySelector";


export default class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {designers:[]};
  // }

  // componentDidMount(){
  //   Axios.get(UTILS.designers_url).then(
  //     res => {
  //       if (res.data.result === false) {
  //         this.setState({ result: false });
  //       } else {
  //         console.table(res.data)
  //         this.setState({designers: res.data, result: true });
  //       }
  //     },
  //     error => {
  //       console.log("error = ", error);
  //     }
  //   );
    
  // }

  constructor(props) {
    super(props);
    this.state = {categories:[],designers:[]};
  }





  componentDidMount(){
    Axios.get(UTILS.categories_url).then(
      res => {
        if (res.data.result === false) {
          this.setState({ result: false });
        } else {
          console.table(res.data)
          this.setState({categories: res.data, result: true });
        }
      },
      error => {
        console.log("error = ", error);
      }
    );
    
  }
  render() {
    return (
     
          
<React.Fragment>
<h1>hello world 2</h1>




      {this.state.categories.map((writer, i) => {
      console.log(this.state.categories)
      return <h2> key={i} designers first_name= {writer.category_title} {writer.cat_id}<br></br></h2>
  

    })}
<AddArtwork />
{/* <CategorySelector /> */}
    
</React.Fragment>
    )
  }
}


