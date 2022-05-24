import React from 'react';
import CustomModal from '../../components/CustomModal/CustomModal';
import CustomButton from '../../components/Button/Button';
import TableUsers from '../../components/TableUsers/TableUsers';
import styles from './HomePage.module.css';

const HomePage: React.FC = (): JSX.Element => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div className={styles.HomePage}>
            <CustomButton onClick={() => setIsOpen(true)}>Add</CustomButton>
            {modalIsOpen && <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}/>}
            <TableUsers/>
        </div>
    );
};

export default HomePage;
