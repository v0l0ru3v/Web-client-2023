import axios from 'axios';
import  { useState, useEffect } from 'react';
import DataType from '../interfaces/pagination-data';  

export const useTableData = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [page, setPage] = useState<number>(1);
    const limit: number = 10;

    useEffect(() => {
        fetchData();
    }, [page]);

    const offset = (page - 1) * limit;

    const fetchData = async () => {

        try {
            const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };
    return({data,handlePrevPage,handleNextPage,offset,page});
}

