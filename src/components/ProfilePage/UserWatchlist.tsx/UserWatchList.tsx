import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LocationState } from '../ProfilePage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { getProfilePage } from '../../../features/user/userSlice';
import NavWithUsername from '../Film/NavWithUsername';
import Poster from '../../Home/Poster';

const UserWatchList = () => {
    const { state } = useLocation<LocationState>();
    const user = useSelector((state: RootState) => state.userAuth.user_for_profile_page.user);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) dispatch(getProfilePage(state.userID));
    }, [dispatch, user, state.userID]);
    if (user) {
        return (
            <section className="user-watchlist">
                <NavWithUsername user={user} />
                <h4 className="h4-subtitle">
                    {user.username.toLocaleUpperCase()} WANTS TO SEE {user.watch_list.length} FILMS
                </h4>
                <div className="watchlist-posters-container">
                    {user.watch_list.map((m) => (
                        <div key={m._id}>
                            <Link to={`/film/${m.title.toLocaleLowerCase().replace(/ /g, '-')}`}>
                                <Poster url={m.poster} title={m.title} tmdb={false} />
                            </Link>
                            <span>
                                {m.title} ({m.year})
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
    return null;
};

export default UserWatchList;