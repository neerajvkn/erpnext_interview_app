# Copyright (c) 2022, nvk and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class InterviewDoc(Document):
	pass

@frappe.whitelist()
def fetch_interviewer_list(interview_round):
	interviewers = []
	interview_round_doc = frappe.get_doc('Interview Round Doc', interview_round)
	for interviewer in interview_round_doc.interviewers:
		interviewers.append(interviewer.interviewer)
	return interviewers if interviewers else 0