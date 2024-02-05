import { createContext, useEffect, useState } from "react";
import { categories } from "../Constants";
import { getData } from "../Helpers/getData";

export const VideoContext = createContext()

export const VideoProvider = ({children }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])

const [videos, setVideos] = useState(null)

//kategori her dğiştiğinde api dan verileri al
    useEffect(() => {
        getData ('/home')
        .then((res) => setVideos(res.data))
    }, [selectedCategory])




    return (
    <VideoContext.Provider  
    value= {{ selectedCategory, setSelectedCategory, videos }}>
    {children}
    </VideoContext.Provider>
    )
}