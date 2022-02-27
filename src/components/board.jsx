import Button from "./buttons.jsx";
import Screen from "./screen.jsx";
import {useState,useEffect} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes,faBackspace} from "@fortawesome/free-solid-svg-icons";
library.add(faTimes,faBackspace)

const Board = (props) => {
  const [input, setInput] = useState('0')
  useEffect(() => {
    document.title = "Calculator"
      })
  return (
    <div className="board">
      <Screen content={input}></Screen>
      <Button content={'C'}  className='reset specialKey' set={setInput} ></Button>
      <Button content={'+'}  className='plus specialKey' set={setInput} ></Button>
      <Button content={'-'}  className='minus specialKey' set={setInput} ></Button>
      <Button content={'multiply'} icon='times' size='1x' className='multiply specialKey' set={setInput}></Button>
      <Button content={'1'}  className='' set={setInput} ></Button>
      <Button content={'2'}  className='' set={setInput} ></Button>
      <Button content={'3'}  className='' set={setInput} ></Button>
      <Button content={'/'}  className='divided specialKey' set={setInput} ></Button>
      <Button content={'4'}  className='' set={setInput} ></Button>
      <Button content={'5'}  className='' set={setInput} ></Button>
      <Button content={'6'}  className='' set={setInput} ></Button>
      <Button content={'.'}  className='dot specialKey' set={setInput} ></Button>
      <Button content={'7'}  className='' set={setInput} ></Button>
      <Button content={'8'}  className='' set={setInput} ></Button>
      <Button content={'9'}  className='' set={setInput} ></Button>
      <Button content={'%'}  className='percentage specialKey' set={setInput}   ></Button>
      <Button content={'delete'}  icon='backspace' size='1x' className='delete specialKey' set={setInput}  ></Button>
      <Button content={'0'}  className='zero specialKey' set={setInput}  ></Button>
      <Button content={'='}  className='calc specialKey' set={setInput} ></Button>
    </div>
  )
};

export default Board
