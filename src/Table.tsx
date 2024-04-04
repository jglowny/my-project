import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import TableSortLabel from '@mui/material/TableSortLabel';
type Props = {
    data: [];
    handleSort(field: string, order: string): void;
    sortName(): void;
    sortCount(): void;
};

type dataProps = {
    name: string;
    count: number;
};

export default function BasicTable({ data, handleSort, sortName, sortCount }: Props) {
    return (
        <>
            <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                <TableSortLabel active={true} direction={sortName} onClick={() => handleSort('name', sortName)}>
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel active={true} direction={sortCount} onClick={() => handleSort('count', sortCount)}>
                                    Questions
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(({ name, count }: dataProps) => (
                            <TableRow key={`row-${name}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">
                                    <Link href={`https://stackoverflow.com/questions/tagged/${name}`} target="_blank" title={name}>
                                        {name}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
