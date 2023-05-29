import etsy from "../data/etsy.json"


function Listing() {
	return (
		<div className="item-list">
		{etsy.map((el) => {
			if (el.state === "active") {
				const quantily = () => {
					if (el.quantity <= 10) {
						return "level-low"
					} else if(el.quantity <= 20) {
						return "level-medium"
					}
					return "level-high"
				}

				const priceItem = () => {
					if (el.currency_code === 'USD') {
						return '$' + el.price	
					} else if (el.currency_code === 'EUR') {
						return '€' + el.price
					}

					return el.price + ' ' + el.currency_code
				}
				return (
						<div className="item" key={el.listing_id}>
						<div className="item-image">
						  <a href={el.url}>
							<img src={el.MainImage.url_570xN} alt={el.MainImage.url_570xN} />
						  </a>
						</div>
						<div className="item-details">
						  <p className="item-title">{el.title.slice(0, 50) + "..."}</p>
						  <p className="item-price">{priceItem()}</p>
						  <p className={"item-quantity " + quantily()}>{el.quantity}</p>
						</div>
					  </div>
					)
				}
			
			}
		)}
		</div>
	)
}

export default Listing