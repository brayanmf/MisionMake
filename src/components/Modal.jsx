import React from "react";

const Modal = ({refModal, setModal, contentProd, setVisible}) => {
	const {rate, count} = contentProd.rating;
	return (
		<div className="modal" ref={refModal}>
			<div className="modal__product">
				<button
					type="button"
					className="modal__btn"
					onClick={() => {
						setModal(false);
						setVisible(false);
					}}
				>
					Cerrar
				</button>
				<h2 className="modal__title">{contentProd.title}</h2>
				<hr />
				<img src={contentProd.image} alt="" className="modal__img" />
				<p>Category : {contentProd.category}</p>
				<p>
					Price : {contentProd.price}
					<br />
					Description: <hr />
					{contentProd.description}
				</p>

				<hr />
				<div className="modal__rating">
					<span>rate : {rate} </span>
					<span>Count : {count}</span>
				</div>
			</div>
		</div>
	);
};
export default Modal;
