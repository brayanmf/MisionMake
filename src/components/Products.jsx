import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import Modal from "./Modal";
import Product from "./Product";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [modal, setModal] = useState(false);

	const refModal = useRef();
	const resetProducts = {
		title: "",
		price: "",
		description: "",
		category: "",
		image: "",
		rating: {rate: 0, count: 0},
		setModal,
	};

	const [contentProd, setContentProd] = useState(resetProducts);

	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((res) => {
			setProducts(res.data);
		});
	}, []);
	useEffect(() => {
		if (modal) {
			refModal.current.classList.add("active");
		} else {
			setModal(false);
			refModal.current.classList.remove("active");
			setContentProd(resetProducts);
		}
	}, [modal]);

	return (
		<div className="content">
			<h2 className="content__title">Products</h2>
			<div className="content__products">
				{products.map((el) => (
					<Product
						key={el.id}
						objetProduct={{
							title: el.title,
							price: el.price,
							description: el.description,
							category: el.category,
							image: el.image,
							rating: el.rating,
							setModal,
						}}
						setContentProd={setContentProd}
					/>
				))}
			</div>
			<Modal
				modal={modal}
				setModal={setModal}
				refModal={refModal}
				contentProd={contentProd}
			/>
		</div>
	);
};

export default Products;
