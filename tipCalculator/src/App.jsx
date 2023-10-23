import './App.css';

function App() {

  return (
    <div>
      
      <div className='main'>

        <div className='inputElements'>
          <label>Bill</label><p/>
          <input></input><p/>

          <label>Select Tip %</label><p/>
          <table id='tipOptions'>
            <tr>
              <td><button id='tipOption'>5%</button></td>
              <td><button id='tipOption'>10%</button></td>
              <td><button id='tipOption'>15%</button></td>
            </tr>
            <tr>
              <td><button id='tipOption'>25%</button></td>
              <td><button id='tipOption'>50%</button></td>
              <td><input id='tipOption' style={{paddingRight:0}}></input></td>
            </tr>
          </table>
          <label>Number of People</label><p/>
          <input></input>
        </div>
        <div className='outputElements'>output
        </div>

      </div>

    </div>
  )
}

export default App
