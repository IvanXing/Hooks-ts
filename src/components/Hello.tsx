import React, {useContext} from 'react';
import { ThemeContext } from '../App'

interface IHelloProps {
  message?: string;
}

const Hello: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    background: theme.background,
    color: theme.color,
  }
  return <div style={style}>
    {props.message}
  </div>
}

Hello.defaultProps = {
  message: 'default message'
}

export default Hello;