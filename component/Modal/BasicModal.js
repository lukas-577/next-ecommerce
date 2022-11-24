import { Modal, Icon } from "semantic-ui-react"
import Auth from "../Auth/Auth";

export default function BasicModal(props) {
    const { show, setShow, title, children, ...rest } = props;

    const onClose = () => setShow(false);

    return (
        <div>
            <Modal className="basic-modal" open={show} onClose={onClose} {...rest}>
                <Modal.Header>
                    <span>{title}</span> <Icon name="close" onClick={onClose}></Icon>
                    <h1>Holaa</h1>
                    <Auth setTitleModal={title}></Auth>
                </Modal.Header>
            </Modal>
        </div>
    )
}