import { dialog } from "@material-tailwind/react";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";


const NavLinks=()=>{
    const [chg, setChag]=useState(true);
    
    const change=(event)=>{
       setChag(!chg);
       console.log(chg)
    }

    return(
      <>
        {
            links.map(link=>(
                <div>
                    <div className="px-3 text-left cursor-pointer group">
                        <h1 className="py-7">{link.name}</h1>
                        {link.submenu&& (
                            <div>
                                <div className="absolute top-20 hidden group-hover:block hover:group">
                                    <div className="py-3">
                                        <div className="w-4 h-4 absolute mt-1 left-3 bg-slate-500 rotate-45">

                                        </div>
                                    </div>
                                    <div className="bg-white p-2 ">
                                        {link.sublink.map((mysublink)=>(
                                            <div>
                                                <h1 className="text-lg ">{mysublink.Head}</h1>
                                                {mysublink.sublinks.map((slink)=>(
                                                    <li className="text-sm font-light">
                                                        <Link 
                                                            to={slink.link} 
                                                            className="hover:text-purple-500"
                                                        >
                                                                 {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
                
            ))
        }
      </>
    )
}
export default NavLinks;