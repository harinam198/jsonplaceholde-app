import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [visiblePhotos, setVisiblePhotos] = useState([]);
    const [visibleCount, setVisibleCount] = useState(12);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
          .then((response) => {
            setPhotos(response.data);
          })
          .catch((error) => {
            console.error('Error fetching user data: ', error);
          });
    }, []);

    useEffect(() => {
        // Hiển thị chỉ số lượng item cần
        const slicedPhotos = photos.slice(0, visibleCount);
        setVisiblePhotos(slicedPhotos);
    }, [visibleCount, photos]);

    const loadMore = () => {
        // Tăng số lượng item được hiển thị khi nhấp vào nút "Tải thêm"
        setVisibleCount(prevCount => prevCount + 12);
    };

    return(
        <>
            <h1>Photos</h1>
            <div className={styles.photoCards}>
                {visiblePhotos.map((photo) => (
                <Card className="col-lg-3" key={photo.id} style={{ width: '16rem', marginBottom: '25px' }}>
                    <Card.Img variant="top" src={photo.url} />
                    <Card.Body>
                        <Card.Title className={styles.myCardTitle}>{photo.title}</Card.Title>
                        <Card.Text>Id: #{photo.id} <br />Album: #{photo.albumId}</Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </div>
            <div className={`${styles.myButtonContainer}`}>
                {visibleCount < photos.length && (
                    <Button onClick={loadMore} className={styles.btnLoadMore} variant="primary">Load more</Button>
                )}
            </div>
            
        </>
    )
}

export default Photos;
