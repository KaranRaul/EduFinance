import React, { useState } from 'react';
import { usePapaParse } from 'react-papaparse';

const scholarships = [
    {
        "Scholarship Name": "Government of India Post-Matric Scholarship for SC Students, Maharashtra",
        "Caste Eligibility": "Scheduled Caste (SC)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post-Matric Tuition Fee and Examination Fee (Freeship), Maharashtra",
        "Caste Eligibility": "Scheduled Caste (SC)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship",
        "Caste Eligibility": "Scheduled Caste (SC)",
        "Income Eligibility": "No income limit",
        "Education Level": "11th, 12th"
    },
    {
        "Scholarship Name": "Post-Matric Scholarship Scheme (Government of India), Maharashtra",
        "Caste Eligibility": "Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fee and Examination Fee for Tribal Students (Freeship), Maharashtra",
        "Caste Eligibility": "Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post-Matric Scholarship to VJNT Students, Maharashtra",
        "Caste Eligibility": "VJNT",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fees and Examination Fees to VJNT Students, Maharashtra",
        "Caste Eligibility": "VJNT",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post-Matric Scholarship to OBC Students, Maharashtra",
        "Caste Eligibility": "OBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fees and Examination Fees to OBC Students, Maharashtra",
        "Caste Eligibility": "OBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post-Matric Scholarship to SBC Students, Maharashtra",
        "Caste Eligibility": "SBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fees and Examination Fees to SBC Students, Maharashtra",
        "Caste Eligibility": "SBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post-Matric Scholarship for Persons with Disability, Maharashtra",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category",
        "Caste Eligibility": "Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Vocational Education Fee Reimbursement, Maharashtra",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Vocational Education Maintenance Allowance to ST Students, Maharashtra",
        "Caste Eligibility": "Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna, Maharashtra",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Graduation, Postgraduation"
    },
    {
        "Scholarship Name": "Government Research Adhichatra, Maharashtra",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Postgraduation"
    },
    {
        "Scholarship Name": "Maintenance Allowance for SC Students in Professional Courses, Maharashtra",
        "Caste Eligibility": "Scheduled Caste (SC)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Professional Courses"
    },
    {
        "Scholarship Name": "Maintenance Allowance to VJNT and SBC Students in Professional Courses, Maharashtra",
        "Caste Eligibility": "VJNT, SBC",
        "Income Eligibility": "≤ ₹1 lakh",
        "Education Level": "Professional Courses"
    },
    {
        "Scholarship Name": "Government Vidyaniketan Scholarship, Maharashtra",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "11th, 12th"
    },
    {
        "Scholarship Name": "State Government Open Merit Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "12th"
    },
    {
        "Scholarship Name": "Scholarship to Meritorious Students Possessing Mathematics/Physics",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Open"
    },
    {
        "Scholarship Name": "Eklavya Scholarship, Maharashtra",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹75,000",
        "Education Level": "Postgraduation"
    },
    {
        "Scholarship Name": "Post Matric Scholarship Scheme (Government Of India)",
        "Caste Eligibility": "Scheduled Caste (SC), Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fee & Exam Fee for Tribal Students ( Freeship)",
        "Caste Eligibility": "Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Vocational Education Fee Reimbursement",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Vocational Education Maintenance Allowance",
        "Caste Eligibility": "Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category",
        "Caste Eligibility": "Scheduled Tribe (ST)",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Assistance to Meritorious Students scholarship - Junior Level",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Junior Level"
    },
    {
        "Scholarship Name": "Education Concession to the Children of Ex-Servicemen",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "All Levels"
    },
    {
        "Scholarship Name": "Eklavya Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹75,000",
        "Education Level": "Postgraduation"
    },
    {
        "Scholarship Name": "State Government Open Merit Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "12th"
    },
    {
        "Scholarship Name": "Scholarship to Meritorious students possessing Mathematics /Physics",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Open"
    },
    {
        "Scholarship Name": "Government Vidyaniketan Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "11th, 12th"
    },
    {
        "Scholarship Name": "State Government Daxshina Adhichatra Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Postgraduation"
    },
    {
        "Scholarship Name": "Government Research Adhichatra",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Postgraduation"
    },
    {
        "Scholarship Name": "Education Concession to the Children Freedom Fighter",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "All Levels"
    },
    {
        "Scholarship Name": "Jawaharlal Nehru University Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Postgraduation"
    },
    {
        "Scholarship Name": "Assistance to Meritorious Students scholarship - Senior Level",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Senior Level"
    },
    {
        "Scholarship Name": "Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DHE)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Graduation, Postgraduation"
    },
    {
        "Scholarship Name": "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DTE)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post Matric Scholarship to VJNT Students",
        "Caste Eligibility": "VJNT",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fees and Examination Fees to VJNT Students",
        "Caste Eligibility": "VJNT",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges",
        "Caste Eligibility": "VJNT, SBC",
        "Income Eligibility": "≤ ₹1 lakh",
        "Education Level": "Professional Courses"
    },
    {
        "Scholarship Name": "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category",
        "Caste Eligibility": "VJNT, SBC",
        "Income Eligibility": "No income limit",
        "Education Level": "11th, 12th"
    },
    {
        "Scholarship Name": "Post Matric Scholarship to OBC Students",
        "Caste Eligibility": "OBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post Matric Scholarship to SBC Students",
        "Caste Eligibility": "SBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fees and Examination Fees to OBC Students",
        "Caste Eligibility": "OBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Tuition Fees and Examination Fees to SBC Students",
        "Caste Eligibility": "SBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students",
        "Caste Eligibility": "OBC, SEBC, VJNT, SBC",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Rajarshi Chhatrapati Shahu Maharaj Fee Reimbursement Scheme",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "All Levels"
    },
    {
        "Scholarship Name": "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "All Levels"
    },
    {
        "Scholarship Name": "Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Medical, Dental"
    },
    {
        "Scholarship Name": "State Minority Scholarship Part II (DHE)",
        "Caste Eligibility": "Minority",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Higher Education"
    },
    {
        "Scholarship Name": "Scholarship for students of minority communities pursuing Higher and Professional courses (DTE)",
        "Caste Eligibility": "Minority",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Higher, Professional Courses"
    },
    {
        "Scholarship Name": "Scholarship for students of minority communities pursuing Higher and Professional courses (DMER)",
        "Caste Eligibility": "Minority",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Higher, Professional Courses"
    },
    {
        "Scholarship Name": "Scholarship for student communities pursuing higher and Professional Courses (MCAER)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Higher, Professional Courses"
    },
    {
        "Scholarship Name": "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "All Levels"
    },
    {
        "Scholarship Name": "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DOA)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "All Levels"
    },
    {
        "Scholarship Name": "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (MAFSU)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "All Levels"
    },
    {
        "Scholarship Name": "Government of India Post-Matric Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Post-Matric Tuition Fee and Examination Fee (Freeship)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Maintenance Allowance for student Studying in professional courses",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Professional Courses"
    },
    {
        "Scholarship Name": "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "11th, 12th"
    },
    {
        "Scholarship Name": "Post-Matric Scholarship for persons with disability",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students",
        "Caste Eligibility": "Scheduled Caste",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Vocational Courses"
    },
    {
        "Scholarship Name": "Stipend of Rs. 500 per month for trainees in Craftsman Training Scheme in Govt ITI",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Craftsman Training"
    },
    {
        "Scholarship Name": "Pradhan Mantri Krishi Sinchayee Yojana - Per Drop More Crop (Micro-irrigation Component)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Sub-mission on Farm Mechanization",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "National Food Security Mission: Food grains, Oil seeds, Sugarcane and Cotton",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Birsa Munda Krishi Kranti Yojana (Tribal Sub Plan / Outside Tribal Sub Plan)",
        "Caste Eligibility": "Scheduled Tribe",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Dr. Babasaheb Ambedkar Krushi Swavalamban Yojana",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Mission for Integrated Development of Horticulture",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Rainfed Area Development Programme",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Bhausaheb Fundkar Phalbaag Lagvad Yojana",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Rashtriya Krushi Vikas Yojana - RAFTAAR",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "State Agriculture Mechanization Scheme",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Chief Minister Sustainable Agriculture Irrigation Scheme",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "Khauti Anudan Yojana",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Agriculture"
    },
    {
        "Scholarship Name": "National Scholarship Portal (NSP) - Central Sector Scheme of Scholarship for College and University Students",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹6 lakh",
        "Education Level": "College and University"
    },
    {
        "Scholarship Name": "Prime Minister's Scholarship Scheme (PMSS)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Professional courses"
    },
    {
        "Scholarship Name": "Post-Matric Scholarship for Students with Disabilities",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2.5 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "National Means-cum-Merit Scholarship (NMMS)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹1.5 lakh",
        "Education Level": "9th to 12th"
    },
    {
        "Scholarship Name": "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY) - Madhya Pradesh",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹6 lakh",
        "Education Level": "Higher Education"
    },
    {
        "Scholarship Name": "E-District Scholarship Scheme - Uttar Pradesh",
        "Caste Eligibility": "SC/ST/OBC/Minority",
        "Income Eligibility": "Varies by category",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Dr. Ambedkar Post-Matric Scholarship for Economically Backward Classes (EBC) - Haryana",
        "Caste Eligibility": "Economically Backward Classes (EBC)",
        "Income Eligibility": "≤ ₹1 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Vidya Samunnathi Scholarship - Kerala",
        "Caste Eligibility": "Economically Backward Sections of the Forward Communities",
        "Income Eligibility": "≤ ₹2 lakh",
        "Education Level": "School, College, and Professional courses"
    },
    {
        "Scholarship Name": "Kishore Vaigyanik Protsahan Yojana (KVPY)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "11th, 12th, and Undergraduate"
    },
    {
        "Scholarship Name": "INSPIRE Scholarship (Innovation in Science Pursuit for Inspired Research)",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "12th and Undergraduate"
    },
    {
        "Scholarship Name": "Maulana Azad National Scholarship for Meritorious Girl Students",
        "Caste Eligibility": "Minority (Girls)",
        "Income Eligibility": "≤ ₹1 lakh",
        "Education Level": "10th and above"
    },
    {
        "Scholarship Name": "National Overseas Scholarship Scheme for SC/ST Students",
        "Caste Eligibility": "SC/ST",
        "Income Eligibility": "≤ ₹8 lakh",
        "Education Level": "Master's and Ph.D."
    },
    {
        "Scholarship Name": "JN Tata Endowment Scholarship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Postgraduate and Ph.D."
    },
    {
        "Scholarship Name": "Fulbright-Nehru Master’s Fellowships",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Postgraduate"
    },
    {
        "Scholarship Name": "Saksham Scholarship for Students with Disabilities",
        "Caste Eligibility": "Open",
        "Income Eligibility": "≤ ₹2 lakh",
        "Education Level": "Post-Matric and Higher Education"
    },
    {
        "Scholarship Name": "EBC Scholarship for Economically Backward Class Students",
        "Caste Eligibility": "Economically Backward Classes (EBC)",
        "Income Eligibility": "≤ ₹1 lakh",
        "Education Level": "Post-Matric"
    },
    {
        "Scholarship Name": "Dr. Babasaheb Ambedkar Research Fellowship",
        "Caste Eligibility": "Open",
        "Income Eligibility": "No income limit",
        "Education Level": "Postgraduate and Ph.D."
    },
    {
        "Scholarship Name": "",
        "Caste Eligibility": "",
        "Income Eligibility": "",
        "Education Level": ""
    }
]

const incomeOptions = [
    "≤ ₹1 lakh",
    "≤ ₹2.5 lakh",
    "No income limit"
];

const educationLevelOptions = [
    "Professional Courses",
    "11th, 12th",
    "Post-Matric",
    "Vocational Courses",
    "Craftsman Training",
    "Agriculture"
];

const FormComponent = () => {
    const { readString } = usePapaParse();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [caste, setCaste] = useState('');
    const [income, setIncome] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [filteredScholarships, setFilteredScholarships] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const filtered = scholarships.filter(scholarship => {
            const isCasteMatch = scholarship["Caste Eligibility"].includes(caste) || scholarship["Caste Eligibility"] === 'Open';
            const isIncomeMatch = income === '' || scholarship["Income Eligibility"] === 'No income limit' || parseInt(income.replace('₹', '').replace(' lakh', '').replace('≤ ', '')) <= parseInt(scholarship["Income Eligibility"].replace('₹', '').replace(' lakh', '').replace('≤ ', ''));
            const isEducationMatch = scholarship["Education Level"].includes(educationLevel);
            return isCasteMatch && isIncomeMatch && isEducationMatch;
        });
        setFilteredScholarships(filtered);
    };

    return (
        <div className='flex justify-center'>
            <div className="container p-4 w-2/4 ">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gender:</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Caste:</label>
                        <select
                            value={caste}
                            onChange={(e) => setCaste(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Caste</option>
                            <option value="Scheduled Caste (SC)">Scheduled Caste (SC)</option>
                            <option value="Scheduled Tribe (ST)">Scheduled Tribe (ST)</option>
                            <option value="VJNT">VJNT</option>
                            <option value="OBC">OBC</option>
                            <option value="SBC">SBC</option>
                            <option value="Open">Open</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Income:</label>
                        <select
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Income</option>
                            {incomeOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Education Level:</label>
                        <select
                            value={educationLevel}
                            onChange={(e) => setEducationLevel(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Education Level</option>
                            {educationLevelOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Find Scholarships
                    </button>
                </form>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold">Filtered Scholarships</h2>
                    <ul className="mt-4 space-y-2">
                        {filteredScholarships.map((scholarship, index) => (
                            <li key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
                                {scholarship["Scholarship Name"]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;