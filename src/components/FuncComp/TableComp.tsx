import React from "react"
import { useTableData } from "../../hooks/useTableData"
import { Table, Button } from 'antd';
import { columns } from "../../constants/cfg"; 
import styled from "styled-components";


const PaddedComponent = styled.div`
  padding: 0 20px;
 
`;

export const TableComp:React.FC = () => {
    const {data,handlePrevPage,handleNextPage,offset,page} = useTableData();
    return ( 
        <PaddedComponent> 
          <Table dataSource={data} columns={columns} pagination={false} /> 
          <Button onClick={handlePrevPage} disabled={!offset}>Назад</Button> 
          <Button onClick={handleNextPage}>Вперед</Button> 
          <span>Страница: {page}</span> 
        </PaddedComponent> 
      );
};


