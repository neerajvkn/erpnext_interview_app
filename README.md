## Interview

App for interview management

## Usage Interview App

[ Have added Doc at the end of few documents cause there was already core doc with the name which we wanted to use like `Interview` is called `Interview Doc` ]

1. Install app using
```
bench get-app https://github.com/neerajvkn/erpnext_interview_app.git
bench --site {your_site_name} install app interview
bench --site {your_site_name}  migrate
bench restart
```
2. Now that interview app is installed, create interview types in `Interview Type Doc` 

3. Then goto `Interviewers` and create docs for people who will be interviewers 

4. Then goto `Job Designation` and create job titles for which interviews will be conducted 

5. Then goto `Skill Set` and create set of skills for which interviewers will be checking 

6. Then goto `Interview Round Doc` and create interview rounds.

7. Then go to `Interview Doc` and create interview and submit it. To filter available interviews with job types, select job type in job opening field and then search in interview link field.
Upon selection of interview round, interviewers should be automatically fetched into the table if available, else add manually.

8. after submitting, click the plus icon near interview feedback doc in connection dashboard to open `Interview Feedback Doc`.

9. In `Interview feedback Doc`, select interviewer, add the skills that specific interviewer assessed and its ratings and submit. upon submission of the doc, it will automatically update the `Interview Doc`

10. Once everybody has completed the feedback, goto `Interview Doc`, open the specific intervie, change its status to 'Completed' and update the doc.