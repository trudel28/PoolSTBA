import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return (
        <div className="flex flex-row min-h-screen min-w-full bg-white">
            <div>
            <Sidebar/>
            </div>
            <div className="flex flex-col w-full">
                <Navbar/>
                    <div className="flex flex-col flex-wrap max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-7xl  mx-auto w-full">
                        {children}
                    </div>
            </div>
            

            
        </div>
    )
}

export default Layout
