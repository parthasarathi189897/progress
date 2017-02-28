import React, {Component} from 'react';
import DropdownBox from './DropdownBox';
import DropdownWindow from './DropdownWindow';

class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state={
      activeInd: false
    };
  }
  boxClick = () => {
    this.setState( prevState => ({
      activeInd: !prevState.activeInd
    }));
  }
  _setData(props){
    this.setState({
      activeInd: props.activeInd
    });
  }
  componentWillMount() {
    this._setData(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this._setData(nextProps);
  }
  render() {
    const props = this.props;
    const state = this.state;
    return(
      <div className='dropdown-cont'>
        <DropdownBox selectedData={props.selectedData} boxClick={this.boxClick}/>
        <DropdownWindow selectedData={props.selectedData} data={props.data} activeInd={state.activeInd} rowClick={props.rowClick}/>
      </div>
    );
  }
} 

export default Dropdown;