import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import MyFavoriteList from "../component/MyFavoriteList";
function Favorite({
  myFavoriteList,
  getMyFavourite,
  openModal,
  handlerOpenModal,
  handlerCloseModal,
  refreshKey,
  myRecipeListLoading
}) {
  const [formStatus, setFormStatus] = useState(false);
  useEffect(() => {
    console.log("useEffect Running");
    getMyFavourite();
    console.log(myFavoriteList);
  }, [refreshKey]);
  const handlerFormStatus = (status) => setFormStatus(status);
  return(
  <>
    <h1>My Favorites</h1>
    {!myRecipeListLoading && (
    <div className="search-container">
          <div className="topics-container">
            <MyFavoriteList
              myFavoriteList={myFavoriteList}
              handlerOpenModal={handlerOpenModal}
            />
          </div>
        </div>)}
    <Outlet />
  </>
  );
}

export default Favorite;
