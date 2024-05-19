import axios from 'axios';
import { useState, useEffect } from 'react';
import DataType from '../interfaces/pagination-data';
import {useInView} from 'react-intersection-observer';

export const useDynamicPagination = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState(true);
    const limit: number = 20;

    useEffect(() => {
        fetchData();
    }, [page]);

    const offset = (page - 1) * limit;

    const fetchData = async () => {

        try {
            const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);
            setData((prev) => [...prev, ...response.data]);
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setLoading(false)
        }
    };
    const { ref, inView } = useInView({
        threshold: 1.0,
    });

    useEffect(() => {
        if (inView) {
            setLoading(true);
            setPage((prev) => prev + 1)
        }
    }, [inView]);
    // const handlePrevPage = () => {
    //     if (page > 1) {
    //         setPage(page - 1);
    //     }
    // };

    // const handleNextPage = () => {
    //     setPage(page + 1);
    // };
    return ({ data, offset, page, setPage, loading, setLoading, inView, ref });
}

