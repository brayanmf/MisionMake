// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";

// eslint-disable-next-line no-unused-vars
const Product = ({objetProduct, setContentProd}) => {
	const getRandomArbitrary = (a, b) => {
		const num = Math.random() * (b - a) + a;
		return new Date(num * 1000 * 60);
	};
	// eslint-disable-next-line no-unused-vars
	const [minu, setMinu] = useState(getRandomArbitrary(1, 3).getTime());

	// let temporizador;
	/*	useEffect(() => {
		if (minu >= 1000) {
			let minutos = minu;
			temporizador = setInterval(() => {
				minutos -= 1000;
				setMinu(minutos);
			}, 1000);
		}
		return () => clearInterval(temporizador);
	}, [minu]); */
	return (
		<div className="card">
			<img src={objetProduct.image} alt="" className="card__img" />
			<p className="card__title">{objetProduct.title}</p>
			<hr />
			<div className="card__content">
				<span className="card__content__time">
					{Math.floor((minu % (1000 * 60 * 60)) / (1000 * 60))}:
					{Math.floor((minu % (1000 * 60)) / 1000)}
				</span>
				{minu >= 1000 && (
					<button
						type="button"
						className="card__content__btn"
						onClick={() => {
							objetProduct.setModal(true);
							setContentProd(objetProduct);
						}}
					>
						Go to detail
					</button>
				)}
			</div>
		</div>
	);
};

export default Product;
