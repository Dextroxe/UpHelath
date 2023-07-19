import img from'/avatar.png'
import { LuAlignJustify } from "react-icons/lu";

const avatar = img
const Navbar = () => {
    const NavLinks = ["Home", "About Us","pokemon"]
    return (
        <>
            <div className="flex flex-row justify-around  w-full h-10 items-center font-semibold">
                <h1 className='cursor-pointer'>navbar</h1>
                <div className="flex flex-row justify-around w-[50%] flex-end">
                    {NavLinks.map(ele => {
                        return (
                            <p className="border border-sky-500 px-6 rounded-xl hover:text-white hover:bg-black cursor-pointer" key={ele}>{ele}</p>
                        )
                    })}
                </div>
                    <div className='px-2 cursor-pointer  hover:shadow-lg hover:border rounded-2xl items-center flex flex-row '>
                        <img src={avatar} alt={'img'} className='w-10 h-10'/>
                        <LuAlignJustify/>
                    </div>
            </div>
        </>
    );
}

export default Navbar;