import { NavbarMenu } from "../MockData/data";
import { BsEyeglasses } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl flex gap-2 items-center font-bold uppercase">
          <Link to='/' className="text-2xl flex gap-2 items-center font-bold uppercase">
          
          <BsEyeglasses />
          <p className="text-secondary">SMART</p>
          <p>STYLE</p>
          
          </Link>
          
        </div>

        {/* Menu */}
        <ul className="flex gap-6">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link} // Dynamically apply the link
                className="hover:text-secondary transition duration-300 focus:text-secondary"
              >
                {item.title}
              </Link>

            </li>
          ))}
        </ul>
        <div className=" flex space-x-4">

        <button className="font-semibold">Sign in</button>
        <button className="text-white bg-primary font-semibold rounded-full px-6 py-2 ">register</button>

        </div>
      </div>
      
      {/* button section */}
      
    </nav>
  );
}

export default NavBar;
