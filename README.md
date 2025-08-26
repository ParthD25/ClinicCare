ClinicCare Database Design Document
By: Parth Dave Video overview:

Scope
What this database does. I built this database to help manage a small family clinic. It keeps track of patients, doctors and nurses, appointments, treatments, and prescriptions. My goal was to make something simple but useful for tracking the day-to-day operations of a healthcare clinic without getting too complicated.

What's included:

People in the system: patients and healthcare workers like doctors and nurses
Daily activities: booking appointments, keeping them organized, recording what happened during visits
Medical stuff: tracking treatments given and medications prescribed
Simple catalogs: lists of available treatments and medications
What I didn't include:

Money stuff like billing and insurance - that's way too complex for this project
Lab test ordering and results - would need a whole separate system
User logins and security - keeping it simple for now
Advanced medical coding systems - those are really complicated
Pharmacy connections or automatic prescription refills
What Users Can Do
The main things someone could do with this database:

Add new patients and staff members, update their contact info when needed
Schedule appointments between patients and clinicians
Look up who's coming in today or what Dr. Smith's schedule looks like
Mark appointments as completed and add notes about what happened
Record which treatments were done during a visit
Write prescriptions and keep track of what medications patients are taking
Look up a patient's history or see which medications are prescribed most often
What this database can't handle:

Anything involving money, payments, or insurance claims
Complex medical testing workflows
User permissions or access control
Automatic prescription renewals or connections to pharmacies
Advanced medical record keeping with diagnosis codes
How I Organized Everything
The Main Parts (Tables)
Here's what I decided to track and why:

patients table
Basic info: ID number, first and last name (required)
Personal details: birth date, gender, phone, email, address
I kept this simple - just the basics you'd need to identify and contact someone
clinicians table
Basic info: ID, first and last name (required)
Work details: their role (doctor, nurse, etc.) and specialty
Contact info: phone and email
Pretty similar to patients but focused on work information
appointments table
Links to which patient and which clinician
When: date, start time, end time
Why they're coming in and what was diagnosed
Status (scheduled, completed, canceled) and any notes
This is the heart of the system - everything revolves around appointments
treatments table (like a menu)
Just a list of treatments the clinic offers
Each has an ID, name, and description
Keeps things organized instead of typing "vaccination" differently each time
appointment_treatments table (connects appointments to treatments)
Links which treatments happened during which appointments
Can add notes about specifics
Lets one appointment have multiple treatments
medications table (another menu)
List of all medications the clinic can prescribe
Includes the form (tablet, capsule) and strength
Again, keeps things consistent
prescriptions table
Links appointments to medications
Includes dosage, how often to take it, for how many days
Instructions and the date it was prescribed
Tracks exactly what was prescribed when
Why I chose these field types: I used INTEGER for ID numbers because they're simple and SQLite handles them well. For everything else, I used TEXT because it's flexible and easy to work with. Dates and times are stored as text in readable formats like "2025-08-20" and "10:30" - no need to overcomplicate things.

Why these rules: I made names required because you can't really have a patient or doctor without a name. Foreign keys make sure appointments always link to real patients and clinicians. I kept most other fields optional because sometimes you don't have all the information right away.

How Everything Connects
The relationships are pretty straightforward:

Each patient can have many appointments, but each appointment belongs to one patient
Same thing with clinicians - they can have many appointments
Appointments can involve multiple treatments (through the connecting table)
Each appointment can result in multiple prescriptions
Each prescription is for one specific medication
It's like a web where appointments are in the center, connecting patients, clinicians, treatments, and medications.

Making It Work Better
Speeding things up with indexes: I added indexes on the fields people will search most often - like patient last names, appointment dates, and clinician names. This makes looking things up much faster when you have lots of data.

Making queries easier with views: I created two "shortcuts" that combine information from multiple tables:

visit_summary - shows appointments with patient and clinician names all in one place
prescription_summary - shows prescriptions with all the relevant names and details
These views make it much easier to write queries for common tasks like "show me all of Dr. Patel's appointments today" or "what medications has Alice Brown been prescribed?"

I tried to keep everything readable and not too fancy. The goal was to make something that actually works and that someone could understand and modify later.

What This System Can't Do
Some limitations I'm aware of:

Not much validation - dates and times are just text, so you could accidentally put in something like "purple" for a date
No automatic cleanup - if you want to remove something, you have to do it manually and carefully
Pretty basic medical records - real medical systems track way more information and use standardized codes
Could have duplicates - nothing stops someone from adding "Ibuprofen 200mg" and "ibuprofen 200 mg" as separate medications
No security - anyone who can access the database can see and change everything
