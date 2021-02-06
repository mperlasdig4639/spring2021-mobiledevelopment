import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      
      //concatenating to the empty responseHTML string with each item of menu surrounded by <li></li> and returning the responseHTML result.
      responseHTML = responseHTML + '<li>' + item + '</li>'
    });

    return responseHTML;
  }
}

export default Sidebar;
