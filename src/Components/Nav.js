import logo from "./Images/logo.svg";

function Nav() {

  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="nav-components">
        <div>Features</div>
        <div>Team</div>
        <div>Sign In</div>
      </div>
    </nav>
  )
}

export default Nav;