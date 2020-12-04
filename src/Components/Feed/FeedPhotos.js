import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 0, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem photo={photo} key={photo.id} />
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export default FeedPhotos;
