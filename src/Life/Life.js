import React, {Component} from 'react';
import SpentDetail from './SpentDetail';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Today from 'material-ui/svg-icons/action/today';
import './Life.css';

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: '',
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      secs: 0,
      isOpen: false,
    }
  }
  
  getValue(e, data) {
    this.setState({
      birthday: new Date(data)
    });

    setTimeout(() => {
      this.calc();
    }, 500);
  }

  calc() {
    let today = new Date();
    let seconds = (today.getTime() - this.state.birthday.getTime()) / 1000;
    this.setState({
      years : Math.floor(seconds/31556926),
      months : Math.floor((seconds%31556926)/2629743.83), 
      weeks : Math.floor(((seconds%31556926)%2629743.83)/604800), 
      days : Math.floor((((seconds%31556926)%2629743.83)%604800)/86400),
      hours : Math.floor(((((seconds%31556926)%2629743.83)%604800)%86400)/3600),
      minutes : Math.floor((((((seconds%31556926)%2629743.83)%604800)%86400)%3600)/60),
      secs : (((((seconds%31556926)%2629743.83)%604800)%86400)%3600)%60,
    });
    this.handleOpen();
  }

  showOpenDp() {
    this.refs.dp.openDialog();
  }

  handleOpen() {
    this.setState({isOpen: true});
  }

  handleClose() {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div className="date-container">
        <DatePicker ref="dp"
          maxDate={new Date()} 
          mode="landscape"
          className="date-hidden"
          onChange={this.getValue.bind(this)}   
        />

        <div className="date-fab"> 
          <FloatingActionButton onClick={this.showOpenDp.bind(this)} >
            <Today />
          </FloatingActionButton>
        </div>

        <Dialog open={this.state.isOpen}
          modal={false}
          onRequestClose={this.handleClose.bind(this)}
        >
          <SpentDetail spent={this.state} />
        </Dialog>
      </div>
    );
  }
}

export default Life;