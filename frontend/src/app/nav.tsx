import icon from "./icon.png";
import Options from "./options.tsx";

export default function Nav(){
return(
    <nav className="flex flex-col font-sans">
    <div className="name flex mt-5 ml-5 justify-start">
    <img src={icon.src} alt="" className="w-12 h-8"/>
    <span className="text-3xl font-extrabold font-spartan ml-4 mt-1 text-green-600">
   Eluva
    </span>
    


    </div>
      <ul className=" text-green-600 flex text-base font-semibold tracking-wider cursor-pointer -mt-6 justify-end mr-8">
        <li className ="hover:text-gray-300 font-pop">
          Home
        </li>
        <li className ="hover:text-gray-300 ml-12 font-pop">
          About
        </li>
        <li className ="hover:text-gray-300 ml-12 font-pop">
          Pricing
        </li>
        <li className ="hover:text-gray-300 ml-12 font-pop">
        <Options />
        </li>
      </ul>

    </nav>
)
}