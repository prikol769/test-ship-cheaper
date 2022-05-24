import React from 'react';
import CustomInput from '../../Input/Input';
import Form from '../../Form/Form';
import styles from '../ModalContent.module.css';
import CustomButton from '../../Button/Button';
import {BUTTON_VARIANT} from '../../../types/enum';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, decrementStep} from '../../../features/modalStep/modalStepSlice';
import {addDataBank} from '../../../features/dataUsers/dataUsersSlice';
import {RootState} from '../../../app/store';
import {DataUserBank} from '../../../types/types';

interface BankDataModalContentProps {
    closeHandler: () => void;
}

const BankDataModalContent: React.FC<BankDataModalContentProps> = ({closeHandler}: BankDataModalContentProps): JSX.Element => {
    const dispatch = useDispatch();
    const dataNewUser = useSelector((state: RootState) => state.dataUsers.dataNewUser);

    const onSubmit = (data: DataUserBank) => {
        dispatch(addDataBank({
            IBAN: data.IBAN,
            BIC: data.BIC,
            bankName: data.bankName
        }));
        dispatch(incrementStep());
    };


    return (
        <>
            <h1 className={styles.TitleModal}>Bank Data</h1>
            <Form<DataUserBank> onSubmit={onSubmit}>
                {({register}) => (
                    <>
                        <CustomInput
                            defaultValue={dataNewUser.IBAN}
                            required={true}
                            title={'IBAN'}
                            {...register("IBAN", {required: true})}
                        />
                        <CustomInput
                            defaultValue={dataNewUser.BIC}
                            required={true}
                            title={'BIC'}
                            {...register("BIC", {required: true})}
                        />
                        <CustomInput
                            defaultValue={dataNewUser.bankName}
                            required={true}
                            title={'Bank name'}
                            {...register("bankName", {required: true})}
                        />
                        <div className={styles.BtnContainer}>
                            <CustomButton
                                variant={BUTTON_VARIANT.OUTLINED}
                                onClick={closeHandler}
                            >Cancel</CustomButton>
                            <CustomButton
                                style={{margin: '0px 10px'}}
                                variant={BUTTON_VARIANT.OUTLINED}
                                onClick={() => dispatch(decrementStep())}
                            >Previous</CustomButton>
                            <CustomButton type="submit">Next</CustomButton>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
};

export default BankDataModalContent;
