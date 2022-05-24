import React from 'react';
import styles from './TableUsers.module.css';
import TableRow from './TableRow/TableRow';
import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';

const TableUsers = () => {
    const dataUsers = useSelector((state: RootState) => state.dataUsers.dataUsers);

    return (
        <div className={styles.TableUsersWrapper}>
            <table className={styles.TableUsers}>
                <thead>
                <tr style={{background: '#376B8D'}}>
                    <th className={styles.TableTh}></th>
                    <th className={styles.TableTh} style={{width: '11%', minWidth: 150}}>Company</th>
                    <th className={styles.TableTh} style={{width: '11%', minWidth: 150}}>Name</th>
                    <th className={styles.TableTh} style={{width: '11%', minWidth: 150}}>Additional</th>
                    <th className={styles.TableTh} style={{width: '8%', minWidth: 100}}>Street</th>
                    <th className={styles.TableTh} style={{width: '7%', minWidth: 95}}>Postal Code</th>
                    <th className={styles.TableTh} style={{width: '6%', minWidth: 90}}>Country</th>
                    <th className={styles.TableTh} style={{width: '8%', minWidth: 100}}>IBAN</th>
                    <th className={styles.TableTh} style={{width: '8%', minWidth: 100}}>BIC</th>
                    <th className={styles.TableTh} style={{width: '7%', minWidth: 95}}>Bank name</th>
                    <th className={styles.TableTh} style={{width: '8%', minWidth: 110}}>Fax</th>
                    <th className={styles.TableTh} style={{width: '4%', minWidth: 64}}>E-mail</th>
                    <th className={styles.TableTh} style={{width: '5%', minWidth: 75}}>Birthday</th>
                    <th className={styles.TableTh} style={{width: '6%', minWidth: 89}}>Homepage</th>
                </tr>
                </thead>
                <tbody>
                {dataUsers?.map((dataUser) => (
                    <TableRow key={dataUser.id} dataUser={dataUser}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableUsers;
