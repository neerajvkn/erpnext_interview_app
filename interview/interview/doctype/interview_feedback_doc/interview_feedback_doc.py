# Copyright (c) 2022, nvk and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class InterviewFeedbackDoc(Document):
	def validate(self):
		interview_doc = frappe.get_doc("Interview Doc", self.interview)
		
		user_list = []
		for user in interview_doc.interview_details:
			user_list.append(user.interviewer)
		
		if self.interviewer not in user_list:
			frappe.throw("This interviewer has not interviewed the applicant")
		
		feedback_done_already = frappe.get_list('Interview Feedback Doc',
												filters={'interviewer': self.interviewer,
														'interview': self.interview,
														'docstatus' : 1,
														'name':('not in',(self.name))})
		if feedback_done_already:
			frappe.throw(
				"This interviewer has submitted feedback for this interview already")

	def on_submit(self):
		interview_doc = frappe.get_doc("Interview Doc", self.interview)
		rating = 0
		for user in interview_doc.interview_details:
			if user.interviewer == self.interviewer:
				user.average_rating = self.average_rating
				user.average_ratingvalue = self.average_ratingvalue
			rating += user.average_ratingvalue
		avg_rating =  rating / len(interview_doc.interview_details)
		interview_doc.average_ratingvalue = avg_rating
		interview_doc.average_rating = int(avg_rating)
		interview_doc.save()
