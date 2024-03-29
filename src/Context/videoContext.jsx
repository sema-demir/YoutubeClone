import { createContext, useEffect, useState } from "react";
import { categories } from "../Constants";
import { getData } from "../Helpers/getData";
//contexte abone ol
export const VideoContext = createContext();
//hangi kategorini secileceginni stateini tutuldu
export const VideoProvider = ({ children }) => {
  //kapyasıcı bileşen tanımlandı
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [videos, setVideos] = useState(null);
  console.log(selectedCategory);
  //kategori her dğiştiğinde api dan verileri al
  useEffect(() => {
    //menü secildiyse fonksiyonu durdur
    if (selectedCategory.type === "menu") return;

    //önceki kategorinni ver,ilerini temizle
    setVideos(null);

    //type home ise home endpointine istek atıldı
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }
    //type trending ise  trending endpointine istek at
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }
    //type i category ise search endpointine istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </VideoContext.Provider>
  );
};
