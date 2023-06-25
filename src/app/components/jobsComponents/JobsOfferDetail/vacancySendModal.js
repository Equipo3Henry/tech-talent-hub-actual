import style from './vacancySendModal.module.css';
const [showModal, setShowModal] = useState(false);
//? TOGGLE MODAL
const toggleModal = () => {
    setShowModal(!showModal);
    return(
        <>
            {showModal &&(
                <div className={style.modal}>
                    <div className={style.overlay} onclick={toggleModal}/>
                    <div className={style.modal_content}>
                        <h2>Send vacancy apply</h2>
                        <p>You are sending a vacancy apply</p>
                    </div>
                </div>
            )}
        </>
    )
};
export default toggleModal