require('./models/connection');
const Article = require('./models/articles');
const User = require('./models/users');
const Order = require('./models/orders');
const ervy = require('ervy')
const { bullet, bg } = ervy



// --- display all Articles in DB and filter each article by Stock, graph with ervy

function displayAllArticles() {
	const tableData = [];
	Article.find().then(data => {
		for(article of data) {
			if(article.stock < 5) {
				tableData.push({ key: article.name, value: article.stock, style: bg('red'), padding: 1 })
			} else {
				tableData.push({ key: article.name, value: article.stock, style: bg('blue'), padding: 1 })
			}
		}
		console.log(bullet(tableData));
	});
}

displayAllArticles();

function displayAllUsers() {
	User.find().then(data => {
		console.log(data)
	});
}


function displayAllOrders() {
	Order.find().then(data => {
		console.log(data)
	});
}


function displayArticleByName(articleName) {
	Article.find({name: articleName}).then(data => {
		console.log(data)
	});
}


function displayArticleByID(id, newprice) {
	Article.findByIdAndUpdate(id, {price: newprice}).then(() => {
		Article.find().then(data => {
			console.log(data);
		});
	}) 
}


function displayOrderArticles(_id) {
	Order.findById(_id)
		.populate('articles')
		.then(data => {
			console.log('Order By Article _', data);
		})
	}


function displayUserOrders(id) {
	Order.find({user: id})
	.then(data => {
		console.log('Orders By User _', data);
	})

};


function updateOrderPayment(id) {
	Order.findByIdAndUpdate(id, {isPaid: true}).then(() => {
		Order.find().then(data => {
			console.log(data);
		  });
	}) 
}



function deleteUser(id) {
	User.deleteOne({_id: id}).then(() => {
		User.find().then(data => {
			console.log(data);
		})
	})
};



function deleteOrder(id) {
	Order.deleteOne({_id: id}).then(() => {
		Order.find().then(data => {
			console.log(data);
		})
	})
};


function updateArticleStock(id, newstock) {
	Article.findByIdAndUpdate(id, {stock: newstock}).then(() => {
		Article.find().then(data => {
			// console.log(data);
		  });
	}) 
}

updateArticleStock('425ea9ca38d6a3776994651e', 3);
updateArticleStock('325ea9ca38d6a3776994651e', 6);
updateArticleStock('115ea9ca38d6a3776994651e', 10);
updateArticleStock('925ea9ca38d6a3776994651e', 7);
updateArticleStock('625ea9ca38d6a3276994651c', 2);


function resetStocks() {
	Article.updateMany(
		{ stock: 0 }
	   ).then(() => {
		
		Article.find().then(data => {
		  console.log(data);
		}); 
	   });
};

module.export = {
	displayAllArticles,
	displayArticleByID,
	updateArticleStock,
	displayArticleByName,
	resetStocks,
	displayAllUsers,
	displayAllOrders,
	updateOrderPayment,
	deleteUser,
	deleteOrder,
	displayOrderArticles,
	displayUserOrders,
}