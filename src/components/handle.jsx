import {evaluate,round} from 'mathjs'
const Handle = (content,className,set) => {
  switch (content) {
    case 'C':
      set(0)
      break;
    case '+':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '0' : `${after}+`)
      break;
    case '-':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '0' : `${after}-`)
      break;
    case 'multiply':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '0' : `${after}*`)
      break;
    case '1':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '1' : `${after}1`)
      break;
    case '2':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '2' : `${after}2`)
      break;
    case '3':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '3' : `${after}3`)
      break;
    case '4':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '4' : `${after}4`)
      break;
    case '5':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '5' : `${after}5`)
      break;
    case '6':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '6' : `${after}6`)
      break;
    case '7':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '7' : `${after}7`)
      break;
    case '8':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '8' : `${after}8`)
      break;
    case '9':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '9' : `${after}9`)
      break;
    case '0':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '0' : `${after}0`)
      break;
    case '/':
      set(after => after.length > 11 ? after : parseInt(after) === 0 ? '0' : `${after}/`)
      break;
    case '.':
      set(after => {
          if (parseInt(after) === 0 || after.length > 12) {
            return after
          }
        else{
          return `${after}.`
          }
        }
      )
      break;
    case '%':
      set(after => {
          if (parseInt(after) === 0 || after.length > 12) {
            return after
          }
        else{
          return `${after}%`
          }
      })
      break;
    case 'delete':
      set(after => after.length === 1 ? '0' : after.slice(0,after.length < 2 ? 1 : after.length-1))
      break;
    case '=':
      set(after => {
        try {
          return `${round(evaluate(after),8)}`
        } catch (e) {
          return 'Syntax Error'
        }
      })
      break;
    default:
      set(0);
  }
  return
};
export default Handle
