// Copyright (c) 2022, nvk and contributors
// For license information, please see license.txt

frappe.ui.form.on('Interview Doc', {
	onload: function(frm){
		link_query_interview_round(frm)
	},
	refresh: function (frm) {
		console.log("refres")
	},
	interview_round: function (frm, cdt, cdn) {
		interviewers_fetch(frm, cdt, cdn);
	},
	job_opening: function(frm){
		link_query_interview_round(frm)
	}
});

function interviewers_fetch(frm, cdt, cdn) {
	cur_frm.clear_table("interview_details");
	if (frm.doc.interview_round) {
		frappe.call({
			"method": "interview.interview.doctype.interview_doc.interview_doc.fetch_interviewer_list",
			"args": {
				"interview_round": frm.doc.interview_round
			},
			callback: function (r) {
				if (r.message != 0) {
					console.log(r.message)
					r.message.forEach(i => {
						var child = cur_frm.add_child("interview_details");
						frappe.model.set_value(child.doctype, child.name, "interviewer", i)
					});
					cur_frm.refresh_field("interview_details")
				}
			}
		})
	}
	cur_frm.refresh_field("interview_details")
}

function link_query_interview_round(frm) {
		cur_frm.set_query("interview_round", function () {
			return {
				"filters": {
					"designation" : frm.doc.job_opening
				}
			}
		})
}