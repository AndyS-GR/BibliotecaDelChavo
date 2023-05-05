module.exports = function() {
	var data = {
		users: [
			{
				id: 0,
				email: "gil@gmail.com",
				password: "pass",
				tipo_usuario: "student"
			}
		],
		alumnos: [
			{
				id_user: 0,
				dni: "71098313"
			}
		],
		books: [
			{
				id: 0,
				name: 'Librito',
				author_id: 0
			}
		]
	}

	return data;
}