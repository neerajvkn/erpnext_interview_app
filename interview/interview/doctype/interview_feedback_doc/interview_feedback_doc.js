// Copyright (c) 2022, nvk and contributors
// For license information, please see license.txt

frappe.ui.form.on('Interview Feedback Doc', {
	validate: function (frm, cdt, cdn) {
		calculate_rating(frm, cdt, cdn);
	}
});

frappe.ui.form.on('Skill Assesment Table', {
	rating: function (frm, cdt, cdn) {
		calculate_rating(frm, cdt, cdn);
	},
	skill_assessment_remove: function (frm, cdt, cdn) {
		calculate_rating(frm, cdt, cdn);
	}
});


function calculate_rating(frm, cdt, cdn) {
	var rating = 0
	$.each(cur_frm.doc.skill_assessment, function (i, row) {
		rating += row.rating
	});
	const avg_rating = rating / cur_frm.doc.skill_assessment.length
	frm.set_value("average_rating", parseInt(avg_rating))
	frm.set_value("average_ratingvalue", avg_rating)
}