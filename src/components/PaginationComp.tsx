import React from "react"
import { Table } from 'antd';
import { columns } from "../constants/cfg"; 
import { useDynamicPagination } from "../hooks/useDynamicPagination";
import styled from "styled-components";

const BlockObserver = styled.div`
    height: 40px;
    background-color: black;
` 


export const PaginationComp:React.FC = () => {
    const {data, loading, ref } = useDynamicPagination();
    return ( 
        <div> 
          <Table dataSource={data} columns={columns} pagination={false} /> 
          {loading && <div>Loading...</div>}
            {!loading && <BlockObserver ref={ref}></BlockObserver>}
          {/* <Button onClick={handlePrevPage} disabled={!offset}>Назад</Button> 
          <Button onClick={handleNextPage}>Вперед</Button> 
          <span>Страница: {page}</span>  */}
        </div> 
      );
};