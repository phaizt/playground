import React from "react";
import { Button, Modal } from "react-bootstrap";

interface PropType {
	show: boolean;
	title: string;
	formId: string;
	handleClose: () => void;
	body: JSX.Element;
}

const ModalUi: React.FC<PropType> = (props) => {
	return (
		<>
			<Modal show={props.show} onHide={props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.body}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.handleClose}>
						Close
					</Button>
					<Button type="submit" form={props.formId} variant="primary">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalUi;
