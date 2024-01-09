import { ColumnsType } from 'antd/lib/table'; 
import DataType from '../interfaces/pagination-data'; 

export const columns: ColumnsType<DataType> = [ 
    { 
      title: 'Страна', 
      dataIndex: 'country', 
      key: 'country', 
    }, 
    { 
      title: 'Название школы', 
      dataIndex: 'name', 
      key: 'name', 
    }, 
  ]; 