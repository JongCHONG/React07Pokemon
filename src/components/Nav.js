import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </>
  )
}

export default Home