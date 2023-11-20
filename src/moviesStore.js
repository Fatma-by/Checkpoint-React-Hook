import { create } from 'zustand'

import data from "../movies.json"

const useMoviesStroe = create((set) => ({
    movies: data    ,
    setMovies: (data) => set((state) => ({ movies: data })),

}))


export default useMoviesStroe