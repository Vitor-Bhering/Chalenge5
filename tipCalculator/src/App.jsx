import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [Entrada, setEntrada] = useState(0)
  const [buttonSelect, setbuttonSelect] = useState(0)
  const [Entrada2, setEntrada2] = useState(0)
  const [Entrada3, setEntrada3] = useState(0)
  const [result, setResult] = useState(0)
  const [result2, setResult2] = useState(0)

  const ChangebuttonSelect = (porcentagem) => {
    setbuttonSelect(porcentagem)
  }

  useEffect(()=>{
    setResult(parseFloat(Entrada) * parseFloat(buttonSelect) / (100) / parseFloat(Entrada3))
    setResult2(parseFloat(Entrada) / parseFloat(Entrada3) + (parseFloat(Entrada) * parseFloat(buttonSelect) / (100) / parseFloat(Entrada3)))
  },[Entrada, Entrada3, buttonSelect]);

  useEffect(()=>{
    setResult(parseFloat(Entrada) * parseFloat(Entrada2) / (100) / parseFloat(Entrada3))
    setResult2(parseFloat(Entrada) / parseFloat(Entrada3) + (parseFloat(Entrada) * parseFloat(Entrada2) / (100) / parseFloat(Entrada3)))
  },[Entrada, Entrada3, Entrada2]);

  
  const Refresh = () => {
    window.location.reload();
 };

  return (
    <div>
      
      <div className='main'>
        
        <div className='Elements' >
          <label>Bill</label><p/>
          <input id="input1" type="number" placeholder='0' value={Entrada} onChange={(e) => setEntrada(e.target.value)} ></input><p/>

          <label>Select Tip %</label><p/>
          <div id='buttons' value={buttonSelect}>
              <button type="number" id='tipOption' value="5" onClick={() => ChangebuttonSelect(5)} >5%</button>
              <button type="number" id='tipOption' value="10" onClick={() => ChangebuttonSelect(10)}>10%</button>
              <button type="number" id='tipOption' value="15" onClick={() => ChangebuttonSelect(15)}>15%</button>
              <button type="number" id='tipOption' value="25" onClick={() => ChangebuttonSelect(25)}>25%</button>
              <button type="number" id='tipOption' value="50" onClick={() => ChangebuttonSelect(50)}>50%</button> 
              <input type="number" class="tipOption" id="entrada" placeholder="Custom" value={Entrada2} onChange={(e) => setEntrada2(e.target.value)}></input>
              
          </div>
          <br></br>
          <label>Number of People</label><p/>
          <input id="input2" type="number" placeholder='0' value={Entrada3} onChange={(e) => setEntrada3(e.target.value)}></input><p/>
          

        </div>
        

        <div className='Elements' id='output'>
          <div className='tipAmount' id='firstRequest'>
            <div id='alignTipAmount'>
              <div className='white_text' id='text10'>Tip Amount</div> 
              <div className='gray_text' id='text11'>/ person</div>
            </div>
            <div className='returnValue' id='text1' placeholder='$0.00'>{result.toFixed(2)}</div>         
          </div>
          <div className='total' id='secondRequest'>
            <div id='alignTotal'>
              <div className='white_text'>Total</div> 
              <div className='gray_text'>/ person</div>   
            </div>
            <div className='returnValue2' id='text2' placeholder='$0.00'>{result2.toFixed(2)}</div>   
          </div>

          <div>
            <button id="reset" onClick={Refresh}>RESET</button>
          </div>
        </div>


      </div>

    </div>
  )
}

export default App
