import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchLatestReviews } from '../../features/reviews/reviewsSlice';
import Poster from './Poster';

const JustReviewed = () => {
    const { latest_reviews } = useSelector((state: RootState) => state.reviews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLatestReviews());
    }, [dispatch]);

    return (
        <section className="latest-reviews">
            <p>Just reviewed...</p>
            {latest_reviews.map((review) => (
                <Poster url={review.movie.poster} title={review.movie.title} key={review._id} />
            ))}
        </section>
    );
};

export default JustReviewed;
