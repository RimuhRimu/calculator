import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Handle from './handle.jsx'

const Button = ({content,icon,size='x1',className,set}) => {
  return (
    <button className={`button ${className}`} onClick={ () => Handle(content,className,set)} >
      <span>
        {icon ? <FontAwesomeIcon icon={icon} size={size}></FontAwesomeIcon> : content}
      </span>
    </button>
  )
};

export default Button
