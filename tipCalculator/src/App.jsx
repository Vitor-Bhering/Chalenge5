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
              <td id='tipOption'>5%</td>
              <td id='tipOption'>10%</td>
              <td id='tipOption'>15%</td>
            </tr>
            <tr>
              <td id='tipOption'>25%</td>
              <td id='tipOption'>50%</td>
              <td id='tipOption'> 
                <input></input>
              </td>
            </tr>

          </table>

        </div>
        <div className='outputElements'>kkkkkkk
        </div>

      </div>

    </div>
  )
}

export default App
