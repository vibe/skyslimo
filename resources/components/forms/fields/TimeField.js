import React from 'react'
import TimePicker from 'material-ui/TimePicker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
     primary1Color: '#1e3c72',
     pickerHeaderColor: '#1e3c72',
  },
  appBar: {
    height: 50,
  }
});






class TimeField extends React.Component {

  constructor(props) {
    super(props);
  }

  updateTime = (event, time) => {
    const hours = this.addZero(time.getHours());
    const minutes = this.addZero(time.getMinutes());

    time = `${hours}:${minutes}:00`

    this.props.updateTime(time);
  }

  addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

  render() {
    return (
      <div className="TimePicker">
      <MuiThemeProvider muiTheme={muiTheme}>
        <TimePicker hintText="Select Time"
                    style={{
                      maxWidth: '130px',
                      width: '40%',
                      margin: '0 auto',
                      background: '#E1E1E1',
                      overflow: 'hidden'
                    }}
                  onChange={this.updateTime}/>
      </MuiThemeProvider>

        <style jsx>
          {`
              .TimePicker :global(div) {
                text-align: center !important;
                color: #8a8a8a !important;
                font-weight: 500 !important;
                width: 130px !important;
              }
              .TimePicker :global(input) {
                text-align: center !important;
                color: #8a8a8a !important;
                font-weight: 500 !important;
                max-width: 130px !important;
              }
          `}
        </style>
      </div>
    )
  }

}

export default TimeField
