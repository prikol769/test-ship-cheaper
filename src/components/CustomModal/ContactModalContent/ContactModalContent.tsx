import React from 'react';
import CustomInput from '../../Input/Input';
import Form from '../../Form/Form';
import styles from '../ModalContent.module.css';
import CustomButton from '../../Button/Button';
import {BUTTON_VARIANT} from '../../../types/enum';
import {useDispatch, useSelector} from 'react-redux';
import {decrementStep} from '../../../features/modalStep/modalStepSlice';
import {addDataContact, resetDataNewUser, addNewUserToUsers} from '../../../features/dataUsers/dataUsersSlice';
import {RootState} from '../../../app/store';
import {DataUserContact} from '../../../types/types';

interface ContactModalContentProps {
    closeHandler: () => void;
}

const ContactModalContent: React.FC<ContactModalContentProps> = ({closeHandler}: ContactModalContentProps): JSX.Element => {
    const dispatch = useDispatch();
    const dataNewUser = useSelector((state: RootState) => state.dataUsers.dataNewUser);

    const onSubmit = (data: DataUserContact) => {
        dispatch(addDataContact({
            fax: data.fax,
            email: data.email,
            birthday: new Date(data.birthday),
            homepage: data.homepage
        }));
        dispatch(addNewUserToUsers());
        dispatch(resetDataNewUser());
        closeHandler();
    };


    return (
        <>
            <h1 className={styles.TitleModal}>Contact</h1>
            <Form<DataUserContact> onSubmit={onSubmit}>
                {({register}) => (
                    <>
                        <CustomInput
                            defaultValue={dataNewUser.fax}
                            title={'Fax'}
                            {...register("fax")}
                        />
                        <CustomInput
                            type="email"
                            defaultValue={dataNewUser.email}
                            title={'E-mail'}
                            {...register("email")}
                        />
                        <CustomInput
                            type="date"
                            defaultValue={dataNewUser.birthday.toISOString().slice(0, 10)}
                            title={'Birthday'}
                            {...register("birthday")}
                        />
                        <CustomInput
                            defaultValue={dataNewUser.homepage}
                            title={'Homepage'}
                            {...register("homepage")}
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
                            <CustomButton type="submit">Save</CustomButton>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
};

export default ContactModalContent;
