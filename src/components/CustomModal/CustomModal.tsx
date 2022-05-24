import React from 'react';
import Modal from 'react-modal';
import styles from './CustomModal.module.css';
import InvoiceAddressModalContent from './InvoiceAddressModalContent/InvoiceAddressModalContent';
import BankDataModalContent from './BankDataModalContent/BankDataModalContent';
import ContactModalContent from './ContactModalContent/ContactModalContent';
import {modalStepZero} from '../../features/modalStep/modalStepSlice';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../app/store';

interface CustomModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CustomModal: React.FC<CustomModalProps> = (props: CustomModalProps): JSX.Element => {
    const {isOpen, setIsOpen} = props;
    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.modalStep.value);

    const closeHandler = () => {
        dispatch(modalStepZero());
        setIsOpen(false);
    }

    let modalContent: JSX.Element = <InvoiceAddressModalContent closeHandler={closeHandler}/>;

    if (step === 1) {
        modalContent = <BankDataModalContent closeHandler={closeHandler}/>
    }
    if (step === 2) {
        modalContent = <ContactModalContent closeHandler={closeHandler}/>
    }


    return (
        <Modal
            style={{
                overlay: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
            className={styles.Modal}
            isOpen={isOpen}
            onRequestClose={closeHandler}
        >
            <button className={styles.BtnClose} onClick={closeHandler}>
                <img src={'/img/close.svg'} alt="CloseIcon"/>
            </button>
            {modalContent}
        </Modal>
    );
};

export default CustomModal;
