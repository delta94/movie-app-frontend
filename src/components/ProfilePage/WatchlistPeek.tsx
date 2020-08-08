import React from 'react';
import { MovieInstance, User } from '../../features/types';
import VoidMsg from './VoidMsg';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const WatchlistPeek: React.FC<{ watchlist: MovieInstance[]; user: User }> = ({
    watchlist,
    user,
}) => {
    const loggedUser = useSelector((state: RootState) => state.userAuth.user);
    return (
        <div className="watchlist-peek">
            <h4 className="h4-subtitle">
                Watchlist <span>{watchlist.length}</span>
            </h4>
            {!watchlist.length && (
                <VoidMsg
                    userID={user._id}
                    loggedUserID={loggedUser?._id}
                    username={user.username}
                    text={'films in their watchlist'}
                />
            )}
            <div>LITTLE 6 POSTERS HERE</div>
        </div>
    );
};

export default WatchlistPeek;