import { Link, useHistory } from 'react-router-dom'
import './BlueButton.css'

const BlueButton = ({ text, route="" }) => {
  let history = useHistory()

  const goToPage = () => {
    // this function is less than ideal, but the router won't
    // change page without it (though it does change the URL)
    console.log(route)
    history.push(route)
    if (route !== "") {
      window.location.reload()
    }
  }

  return(
    <Link to={route}>
      <button className="blue-button" onClick={goToPage}>
        <b>{text}</b>
      </button>
    </Link>
    // <button className="blue-button" onClick={goToPage}>
    //     <b>{text}</b>
    //   </button>
  )
}

export default BlueButton