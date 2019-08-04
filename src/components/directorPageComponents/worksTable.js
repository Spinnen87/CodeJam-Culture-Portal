import React from 'react';
import { translate } from 'react-i18next';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: lightBlue[600],
        color: theme.palette.common.white,
        fontSize: 16,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    typography: {
        margin: `${theme.spacing(7)}px auto`,
        textAlign: 'center',
        color: lightBlue[600],
        fontWeight: 'bold'
    }
}));

const WorksTable = ({ data, t }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
             <Typography className={classes.typography}  variant="h4" color="textSecondary" component="p" id='works'>
                {t('Table')}
            </Typography>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>{t('Date')}</StyledTableCell>
                            <StyledTableCell >{t('Movie')}</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, i) => (
                            <StyledTableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {item.date}
                                </TableCell>
                                <TableCell >{item.name}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </React.Fragment>
    )
}

export default translate()(WorksTable);