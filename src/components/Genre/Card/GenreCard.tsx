import React, { FC } from 'react';
import { IGenreData } from '../../../interfaces/IGenre';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook.redux';
import { moviesActions } from '../../../redux/slice/slice';

interface IProps {
    genre: IGenreData;
}

const GenreCard: FC<IProps> = ({ genre }) => {
    const dispatch = useAppDispatch();
    const { id, name } = genre;
    const { arrIdGenres } = useAppSelector((state) => state.moviesReducer);

    const push = () => {
        const update = [...arrIdGenres, id.toString()];
        dispatch(moviesActions.pushIdGenres(update));
        dispatch(moviesActions.getMoviesByGenre(id.toString()));
    };

    const disable = arrIdGenres.includes(id.toString());

    return (
        <div className="d-flex justify-content-center mt-3 w-auto m-2">
            <button
                disabled={disable}
                type="button"
                className="btn btn-primary"
                onClick={push}
            >
                {name}
            </button>
        </div>
    );
};

export default GenreCard;