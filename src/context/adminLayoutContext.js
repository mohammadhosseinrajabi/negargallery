import { children, createContext, useState } from "react";


export const AdminContext = createContext({
    showSidebar: false,
    setshowSidebar:()=>{}
});

const AdminContextContainer = ({children})=>{
    const [showSidebar,setshowSidebar] = useState(false)
    return(
        <AdminContext.Provider value={{
            showSidebar,
            setshowSidebar
        }}>
            {children}

        </AdminContext.Provider>
    )
}
export default AdminContextContainer;