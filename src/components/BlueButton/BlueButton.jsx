import { Link, useHistory } from 'react-router-dom'
import './BlueButton.css'

const reloadWindow = () => {
  window.location.reload()
}

const BlueButton = ({ text, route="", reloadingFunction, className="" }) => {
  let history = useHistory()
  reloadingFunction = reloadingFunction || reloadWindow

  const goToPage = () => {
    // this function is less than ideal, but the router won't
    // change page without it (though it does change the URL)
    console.log(route)
    history.push(route)
    if (route !== "") {
      reloadingFunction()
    }
  }

  return(
    <Link to={route}>
      <button className={`blue-button ${className}`} onClick={goToPage}>
        <b>{text}</b>
      </button>
    </Link>
    // <button className="blue-button" onClick={goToPage}>
    //     <b>{text}</b>
    //   </button>
  )
}

export default BlueButton