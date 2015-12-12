/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		Comment.find().then(function (data) {
			res.json(data);	
		});
	},
	
	create: function (req, res) {
		Comment.find().limit(1).then(function (data) {
			res.json(data);
		});
	}
};

