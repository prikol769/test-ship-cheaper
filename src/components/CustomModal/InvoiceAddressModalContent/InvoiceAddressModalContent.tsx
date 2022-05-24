import React from 'react';
import CustomInput from '../../Input/Input';
import Form from '../../Form/Form';
import CustomSelect from '../../Select/Select';
import CustomButton from '../../Button/Button';
import {BUTTON_VARIANT} from '../../../types/enum';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep} from '../../../features/modalStep/modalStepSlice';
import {addDataInvoiceAddress} from '../../../features/dataUsers/dataUsersSlice';
import {RootState} from '../../../app/store';
import {DataUserInvoiceAddress} from '../../../types/types';
import styles from '../ModalContent.module.css';

interface InvoiceAddressModalContentProps {
    closeHandler: () => void;
}

const InvoiceAddressModalContent: React.FC<InvoiceAddressModalContentProps> = ({closeHandler}: InvoiceAddressModalContentProps): JSX.Element => {
    const dispatch = useDispatch();
    const dataNewUser = useSelector((state: RootState) => state.dataUsers.dataNewUser);


    const onSubmit = (data: DataUserInvoiceAddress) => {
        dispatch(addDataInvoiceAddress({
            id: Math.random().toString(36).slice(2, 9),
            company: data.company,
            name: data.name,
            additional: data.additional,
            street: data.street,
            postalCode: data.postalCode,
            country: data.country
        }));
        dispatch(incrementStep());
    };


    return (
        <>
            <h1 className={styles.TitleModal}>Invoice Address</h1>
            <Form<DataUserInvoiceAddress> onSubmit={onSubmit}>
                {({register, formState: {errors}}) => (
                    <>
                        <CustomInput
                            defaultValue={dataNewUser.company}
                            required={true}
                            title={'Company'}
                            {...register("company", {required: true})}
                        />
                        <CustomInput
                            defaultValue={dataNewUser.name}
                            required={true}
                            title={'Name'}
                            {...register("name", {required: true})}
                        />
                        <CustomInput
                            defaultValue={dataNewUser.additional}
                            title={'Additional'}
                            {...register("additional")}
                        />
                        <CustomInput
                            defaultValue={dataNewUser.street}
                            title={'Street'}
                            {...register("street")}
                        />
                        <CustomInput
                            defaultValue={dataNewUser.postalCode}
                            title={'Postal Code'}
                            {...register("postalCode")}
                        />
                        <CustomSelect
                            {...register("country")}
                            title={'Country'}
                            defaultValue={dataNewUser.country}
                            options={[
                                {label: "Kyiv", value: "Kyiv"},
                                {label: "Kharkov", value: "Kharkov"},
                                {label: "Odessa", value: "Odessa"}
                            ]}
                        />
                        <div className={styles.BtnContainer}>
                            <CustomButton
                                style={{marginRight: 10}}
                                variant={BUTTON_VARIANT.OUTLINED}
                                onClick={closeHandler}
                            >Cancel</CustomButton>
                            <CustomButton type="submit">Next</CustomButton>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
};

export default InvoiceAddressModalContent;
