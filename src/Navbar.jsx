import './Navbar.css'
import Toggle from './Toggle';

function Navbar({onProjectsClick, handleHomeClick, theme, setTheme}){
    return(
        <>
        <div id="navbar" > 
        <button onClick={handleHomeClick} id='name'>Lisa<span style={{ color: "#67485A" }} >.</span></button>
        <button onClick={handleHomeClick} className='navbar-button'>Home</button>
        <button onClick={onProjectsClick} className='navbar-button'>Project</button>
        <Toggle theme = {theme} setTheme = {setTheme}/>
       
        </div>
        </>
    )
}
export default Navbar;