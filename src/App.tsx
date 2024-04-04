import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Table from './Table';
import { TablePagination as Pagination } from '@mui/material/';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function App() {
    const [data, setData] = useState([]);
    const typeSort: string[] = ['Popular', 'Name', 'Activity'];
    const pageSizeArray: number[] = [15, 30, 50];
    const [pageSize, setPageSize] = useState(pageSizeArray[0]);
    const [errorRowsPage, setErrorRowsPage] = useState(false);
    const [sort, setSort] = useState(typeSort[0]);

    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [sortName, setSortName] = useState('asc');
    const [sortCount, setSortCount] = useState('asc');
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            try {
                const result = await axios(
                    `https://api.stackexchange.com/2.3/tags?page=${page + 1}&order=desc&sort=${sort}&site=stackoverflow&pagesize=${pageSize}&filter=!*MKJ1Oeozc3hDgqM&key=${import.meta.env.VITE_REACT_APP_KEY}`
                );
                setTotal(result.data.total);
                setData(result.data.items);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [page, sort, pageSize, total]);

    const handleChangeSort = (el) => {
        setSort(el.target.value);
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangePageSize = (el) => {
        const getRows = el.target.value;
        if (getRows < 101) {
            setPageSize(+el.target.value);
        } else {
            setErrorRowsPage(true);
        }
    };

    const compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
            if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) {
                return 0;
            }

            const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
            const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return order === 'desc' ? comparison * -1 : comparison;
        };
    };

    const handleSort = (field: string, order: string) => {
        const newData = [...data];
        const newArray = newData.sort(compareValues(field, order));
        setData(newArray);
        if (field === 'name') {
            setSortName(order === 'asc' ? 'desc' : 'asc');
        } else {
            setSortCount(order === 'asc' ? 'desc' : 'asc');
        }
    };

    return (
        <>
            <div className="container">
                <h1>
                    Tags <span>{total > 0 && `(${total})`}</span>
                </h1>
                <p>
                    A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for
                    others to find and answer your question.
                </p>
                <div className="flex-space">
                    <ButtonGroup variant="contained" style={{ marginBottom: 40 }} aria-label="Basic button group">
                        {typeSort.map((type) => (
                            <Button
                                primary
                                value={type}
                                variant={type === sort ? 'outlined' : 'contained'}
                                key={type}
                                onClick={(e) => handleChangeSort(e)}
                            >
                                {type}
                            </Button>
                        ))}
                    </ButtonGroup>
                    <TextField
                        id="outlined-basic"
                        label="Rows per page"
                        type="number"
                        variant="outlined"
                        onChange={(e) => handleChangePageSize(e)}
                        helperText={errorRowsPage && 'Error max value is 100'}
                        size="small"
                    />
                </div>
                {isError && <div>Something went wrong ...</div>}
                {isLoading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                        <CircularProgress />
                    </Box>
                )}
                {!isLoading && (
                    <Table
                        data={data}
                        total={total}
                        page={page}
                        pageSize={pageSize}
                        handleChangePage={handleChangePage}
                        handleSort={handleSort}
                        sortName={sortName}
                        sortCount={sortCount}
                    />
                )}

                <Pagination
                    rowsPerPageOptions={[+pageSize]}
                    component="div"
                    count={total}
                    rowsPerPage={+pageSize}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </div>
        </>
    );
}

export default App;
