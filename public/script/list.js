var ProductList = React.createClass({
	handleRemove: function(id) {
		try
		{
			this.props.handleRemoveList(id);
		}
		catch(err)
		{
			console.log("ERROR handleRemove - " + err);
		}
	},
	onChangePage: function(page) {
		try
		{
        	this.props.loadProductsFromServer(page);
        }
		catch(err)
		{
			console.log("ERROR onChangePage - " + err);
		}
    },
	render: function() {
		var functionRemove = this.handleRemove;
		var productNodes = this.props.data.map(function(product){
			return (
				<Product key={product._id} _id={product._id} author={product.author} price={product.price} hours={product.hours} handleRemove={functionRemove}></Product>
			);
		});
		return (
			<div className="row">
				<h2>Carrinho</h2>
				<Paginator max={5} onChange={this.onChangePage}/>

				<table className="table">
					<thead>
						<tr>
						  <th>Nome</th>
						  <th>Preço</th>
						  <th colSpan="2">Horas</th>
						</tr>
					</thead>
					<tbody>
						{productNodes}
					</tbody>
				</table>
			</div>
		);
	}
});

