import React from 'react';
import styles from './TableRow.module.css';
import {DataUser} from '../../../types/types';
import {deleteUser} from '../../../features/dataUsers/dataUsersSlice';
import {useDispatch} from 'react-redux';

interface TableRowProps {
    dataUser: DataUser;
}

const TableRow: React.FC<TableRowProps> = ({dataUser}): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <tr className={styles.TableTr}>
            <td className={styles.TableTd}>
                <button onClick={() => dispatch(deleteUser(dataUser.id))} className={styles.BtnDelete}>
                    <img style={{display: 'block'}} src={'/img/delete.svg'} alt="deleteIcon"/>
                </button>
            </td>
            <td className={styles.TableTd}>{dataUser.company}</td>
            <td className={styles.TableTd}>{dataUser.name}</td>
            <td className={styles.TableTd}>{dataUser.additional}</td>
            <td className={styles.TableTd}>{dataUser.street}</td>
            <td className={styles.TableTd}>{dataUser.postalCode}</td>
            <td className={styles.TableTd}>{dataUser.country}</td>
            <td className={styles.TableTd}>{dataUser.IBAN}</td>
            <td className={styles.TableTd}>{dataUser.BIC}</td>
            <td className={styles.TableTd}>{dataUser.bankName}</td>
            <td className={styles.TableTd}>{dataUser.fax}</td>
            <td className={styles.TableTd}>{dataUser.email}</td>
            <td className={styles.TableTd}>{dataUser.birthday.toISOString().slice(0, 10)}</td>
            <td className={styles.TableTd}>{dataUser.homepage}</td>
        </tr>
    );
};

export default TableRow;
