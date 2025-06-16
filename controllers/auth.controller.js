
import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


const getAnswerFromPDF = async (question) => {
    try {
        const pdfContent = `Topic of pdf -> IIIT Allahabad  DSA Roadmap: 
1. 
Learning Method 
Emphasis on concept mastery and correct implementation for clarity. 
2. 
Prerequisites 
o 
C Language: Start with C to strengthen programming fundamentals, useful for PSP (Problem Solving with 
Programming). 
 
Recommended Playlists: 
 
https://www.youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt 
 
https://www.youtube.com/watch?v=irqbmMNs2Bo&ab_channel=ApnaCollege 
o 
C++/Java Basics: Transition to C++/Java to proceed with DSA learning. 
o 
Mathematics Foundations: Understand basics like logarithms, combinatorics, and probability. 
3. 
DSA Playlist Recommendations 
o 
For College: 
 
Abdul Bari’s C Language Playlist 
 
https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU  
o 
For Placements: 
 
https://www.youtube.com/@takeUforward 
4. 
Core Data Structures 
o 
Basics: Arrays, Strings 
o 
Intermediate: Stacks, Queues, Trees, Hashing, Heaps 
o 
Advanced: Graphs, AVL trees, Segment trees 
5. 
Key Algorithms 
o 
Sorting: Quick sort, Merge sort, Counting sort 
o 
Searching: Binary search, BFS/DFS, Dijkstra's algorithm 
o 
Dynamic Programming and Greedy Techniques 
6. 
Practice Platforms 
o 
LeetCode, HackerRank, GeeksforGeeks for DSA problems. 
 
 Process for Lost ID Card: 
1. 
e-FIR Registration: Nearest cybercafé (e.g., Shubham Cyber Café, Gate No.4). 
2. 
Form and Documents 
o 
Download form from the https://examcell.iiita.ac.in/?pg=downloads 
o 
Required documents: Class 10th Marksheet, e-FIR copy. 
3. 
Submission and Fees 
o 
Submit at AAA with fees: Rs. 750 (1 week) or Rs. 1500 (immediate). 
 
Applying for Visitor’s Hostel: 
1. 
Google Form Submission: Application Form 
2. 
Confirmation: Visit the Visitor’s Hostel for verification. 
 
Overview of IIIT(Indian institute of information technology) Allahabad: 
 
Academic Programs: Offers B.Tech, M.Tech, MBA, and Ph.D. with strong CSE, IT, and ECE programs. 
 
Faculty & Research: Highly qualified faculty with industry connections. 
 
Placements: Strong placement record with major tech firms. 
 
Campus Facilities: Modern infrastructure supporting both academics and recreation. 
 
Extracurricular Activities: Variety of clubs and events. 
 
Library: Open from 7 AM to 10:30 PM; registration required for book issues. 
 
 Resources for Semester Subjects: 
 
Course-Specific Resources: 
o 
PSP: https://www.youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt 
o 
FEE: https://www.youtube.com/@nesoacademy 
o 
EP, LAL: Refer to instructor notes, ppts, and past papers. 
o 
Technical Communication and COI/UHV: Focus on length and detail for scoring. 
 
 Resources  for Semester Subjects preparation and study material :   
   
Refer to previous years for any subjects. 
For the syllabus you can visit the website of the course instructors.  
For PSP(Problem solving with programming) visit https://profile.iiita.ac.in/srdubey/teaching.php  
For LAL(Linear Algebra) visit https://profile.iiita.ac.in/abdullah/Teaching.php  
For  EP(Engineering Physics) visit https://profile.iiita.ac.in/srijit/teaching.html                             
1 . For PSP(problem solving with programming)  :  
https://youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt&feature=shared  
https://youtu.be/irqbmMNs2Bo?feature=shared and previous year papers  
2 For  FEE(Fundamental of electrical and electronics engineering) :  https://www.youtube.com/@nesoacademy  
3 For  EP(engineering physics) : Refer to ppt ,  class notes and previous year papers  
4 For LAL(linear algebra): Refer to  Dr. Saurabh Verma notes or class notes from  
https://profile.iiita.ac.in/seemak/Teaching.php and previous year papers  
5. For Technical communication skills and COI or UHV keep your answer as long as possible as marks will be provided  
on basis of length.  
For any other study material look at the quick links section.   
 
Societies of college : 
 
Categories: 
1. 
Cultural 
2. 
Technical 
3. 
Sports 
Hierarchy: 
 
1st Year: Volunteers 
 
2nd Year: Members 
 
3rd Year: Coordinators and Senior Members 
Selection: Selection is interview-based, focusing on enthusiasm, suitability, and contributions. Observations throughout 
the year influence decisions. Societies stay active year-round, hosting high-caliber events and fostering a work-hard, play-
hard culture with after-parties. 
 
Cultural Societies 
1. 
Sarasva (Literary Society): 
o 
Activities: Writing, prose, poetry, quizzing, debating. 
o 
Major events: North India’s largest MUN, TEDx talks. 
o 
Inclusive, accepts many volunteers. Confidence is key in interviews. 
2. 
GeneticX Crew (Dance Society): 
o 
Activities: Dance learning, performing, teaching. 
o 
Auditions assess skill and style. Dedicated dance room with AC. 
3. 
Virtuosi (Music Society): 
o 
Focus: Indian and international rock music. 
o 
Open to all, even without prior stage experience. 
4. 
AMS (Acoustics and Media Society): 
o 
Manages sound, visuals, media for events. 
o 
Ideal for those interested in photography, photo editing, video editing. 
5. 
Nirmiti (Fine Arts Society): 
o 
Manages event decor and themed designs. 
o 
Requires art samples during the selection interview. 
6. 
Rangtarangini (Dramatics Society): 
o 
Focus on acting, directing, screenwriting. 
o 
Known for high standards and large audiences. Confidence and audience engagement are key in 
auditions. 
7. 
Team Effervescence: 
o 
Responsible for organizing Effervescence, the campus festival. 
o 
Large team with varied roles. Hard work and dedication lead to recognition. 
 
Technical Clubs 
1. 
GeekHaven: Multiple wings for specialized tech skills. 
o 
Web Development: Strong legacy, popular among applicants. 
o 
FOSS: Open-source code development. 
o 
Design: Creates event posters and visuals. 
o 
Cyber Security: Regular workshops for first-years. 
o 
Machine Learning: Focuses on AI, complex projects. 
o 
Competitive Programming: Known for coding contests. 
2. 
Tesla (Electronics Society): Established independently in 2018. 
o 
IoT: Workshops and talks on IoT. 
o 
Robotics: Builds path-following, obstacle-avoiding robots. 
o 
Electronic Devices and Automation: Advanced electronics, uses MATLAB, PSpice. 
3. 
Team Aparoksha: 
o 
Organizes Aparoksha, the annual technical fest. 
o 
Activities in coding, development, design, collaboration opportunities. 
4. 
IIIC (IIITA Info and Incubation Centre): 
o 
Business incubator supporting startups with financial aid, technical assistance, and human resources. 
o 
Hosts the E-Summit annually in February. 
 
Sports Club (SPIRIT) 
SPIRIT oversees sports events, including inter-year tournaments and faculty-student matches. Facilities cover football, 
basketball, cricket, tennis, swimming, badminton, and squash. Asmita is the main annual sports festival, promoting a 
vibrant, competitive atmosphere. 
 
Student Gymkhana 
The Students’ Gymkhana is a student-led council that organizes events and elections, with roles for the Speaker, 
President, General Secretary, and Vice President. Annual elections occur in February, with intense campaigning leading 
up to voting. 
Leadership: 
 
Speaker: Raj Kumar (RSS2023502) 
 
President: Om Khangat (IIT2021218) 
 
General Secretary: B.T. Manoj Pallakki (IIB2022008) 
 
Vice President: Omkar Vinod Manapure (MML2023007) 
 
UG Council Members: Aditya Singh Tomar (IIT2021208), Ritik Kumar (IIT2021205) 
 
Prayaas 
Prayaas is a student-led volunteer initiative at IIIT-A, focused on educating underprivileged children in the Jhalwa area. 
Beyond teaching academics, it raises awareness on social issues. Volunteers are dedicated to meaningful community 
impact, reflecting students’ commitment to social responsibility. 
 
Scholarships and Bank Loans: 
 
Educational Loans: 
 
IIIT-A students can access loans from banks like SBI, PNB, and Union Bank, covering tuition, hostel fees, 
laptops, etc. 
 
Banks streamline the loan process, present on campus during admission. 
 
Documents needed: proof of admission, fee structure, academic and identity records, and co-applicant income 
proof. 
 
Repayment starts post-course with a 6-12 month grace period, spanning 5-15 years. 
Merit-cum-Means Scholarship: 
 
Eligibility: SGPI CA of 8.5+ (first two semesters), parental income ≤ ₹5 lakh, no other scholarships. 
 
Beneficiaries: 3% of students in each program. 
 
Documents: Declaration, parent income certificate, third-semester fee receipt. 
 
Regional scholarships are also available; check email for updates. 
 
College Fests: 
 
Effervescence (Effe): 
 
Cultural fest with engaging pro-shows and main-stage events like Footloose, A’la Mode, Innovation, and 
Incendiary. 
 
Highlights include "Celebrity Night" with past performances by artists like Benny Dayal and Neha Kakkar , 
KR$NA , Shalmali Kholgade , SANAM Band. 
 
An opportunity for first-year students to interact with seniors and take on responsibilities like hospitality , events 
management etc. 
Aparoksha (APK): 
 
Technical fest with events like Hack in the North, gaming tournaments, and over 45 tech activities, including 
first-year-specific events. 
 
Notable for electronics showcases, keynote speeches, and Humor Night, with comedians like Karunesh Talwar. 
 
A major highlight each March, blending fun with technology for the IIIT-A community. 
 
 Ragging :   
 
In case of any issue regarding to ragging in the campus premises or hostel please contact to chief proctor through 
mail chiefproctor@iiita.ac.in or contact using  
+91- 9450141862  , +91- 9415132196  
 
Exam Pattern :    
   
Quiz 1 + Quiz 2 + internals will carry 35 marks   
Midsem exam will cary 25 marks  
Endsem exam will carry 40 marks  
  
For Academic calender  : visit the AAA site from quick links to access academic calendar and information about holidays in the 
college.  
  
For placement stats  and  past recruiters: view the official college  website - >  https://placement.iiita.ac.in/  
  
Restaurants and Night canteen: 
 
There are various restaurants other than night canteen such as Mukesh ,  sanskar , chills out and kings. 
Chills out contact number = 9871059001 and kings contact number = 9026235310 , these two give free hostel 
delivery. 
 
Campus Directions : 
 
On entering from gate no,2 you will see the rock garden behind which is our AAA building of institute on the 
left of AAA building you will find the main auditorium and director’s residence . behind the AAA building 
there is Lecture theatre . On the left hand you will find CC-3 and on the right of CC-3 is the library of the 
college which is beside lecture theatre . Now this is about the academics buildings of the college. 
On taking right from rock garden on the way you can find basketball court , swimming pool , lawn tennis 
court , IIIT snooker room ,Health centre , Effervescence Head quarters , AMUL canteen , NESCAFE 
canteen and Gupta Canteen which can also be reached through pocket gate (which is in front of BH-
1,2,3,4) . In front of the canteen is the Asmita Headquarters and the main ground of IIITA. On the North-
east of the main ground opposite to the Pavilion  you can find Visitor Hostels and Girl Hostels . 
Additionally , You fill find boards along your way to guide you through your way. 
 
 
Any electrical or technical accessory such as SIM card LAN cables , coolers or any stationery or printout shops is easily 
available on gate no.4 or chauraha from gate no.4. 
 
Health center or medical emergency : You can always reach out to the health center where a doctor will give a check-up and 
you can also take medicines , in case of medical emergency free of cost. 
In case of severe medical condition the health center will arrange a ambulance which will take you to the UNITED HOSPITAL 
for further treatment. 
 
Creators of this chatbot -> Dev Ruhela , Aayush Kanjani`
       
        const context = `${pdfContent}\n\nAnswer the user's question in a friendly, natural, concisely and shortly and accurately based on the data, make sure it to be in a context-appropriate manner as a helpful college assistant. Ensure information is relevant to India. Respond politely without unnecessary links, irrelevant suggestions, misleading or formalities unless specifically required. For sensitive topics, provide supportive, region-appropriate resources. If the information is not available, simply reply with: 'Currently, I don't have information about this.' The user's question is: ${question}`;
        console.log("context: ",context);
        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: context }],
            temperature: 1,
            max_tokens: 1024,
            top_p: 1,
            stream: true,
            stop: null
        });
        
        let answer = "";
        for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || "";
            answer += content;
        }
        console.log("answer : ", answer)
        return answer.trim();
        
    } catch (error) {
        console.error("Error getting answer from PDF:", error);
        throw error;
    }
};

export const askFromPDF = async (req, res) => {
    try {
        const { question } = req.body;
        console.log(question)
        if (!question || typeof question !== 'string' || question.trim().length === 0) {
            return res.status(400).json({ 
                success: false,
                message: "Invalid question input. Question must be a non-empty string.",
                error: "INVALID_INPUT"
            });
        }
        
        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({
                success: false,
                message: "AI service not configured properly",
                error: "MISSING_API_KEY"
            });
        }
        
        const answer = await getAnswerFromPDF(question);
        
        return res.status(200).json({
            success: true,
            answer: answer,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error("Error in askFromPDF controller:", error);
        
        if (error.message.includes('PDF file not found')) {
            return res.status(404).json({
                success: false,
                message: "PDF file not found. Please contact support.",
                error: "PDF_NOT_FOUND"
            });
        } else if (error.message.includes('Failed to extract text')) {
            return res.status(422).json({
                success: false,
                message: "Could not process the PDF file. The file might be corrupted.",
                error: "PDF_PROCESSING_ERROR"
            });
        } else if (error.message.includes('API') || error.code === 'ENOTFOUND') {
            return res.status(503).json({
                success: false,
                message: "AI service temporarily unavailable. Please try again later.",
                error: "SERVICE_UNAVAILABLE"
            });
        } else {
            return res.status(500).json({
                success: false,
                message: "An unexpected error occurred. Please try again.",
                error: "INTERNAL_SERVER_ERROR"
            });
        }
    }
};







	

	
