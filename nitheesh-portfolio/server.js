const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

// Configure Handlebars
app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Profile Data
const profileData = {
  name: "S Nitheesh Kumar",
  tagline: "Engineer → Quality Leader → Business Strategist",
  tags: ["B.Tech EEE · VIT Vellore", "MBA Candidate · XIMB"],
  summary: "An engineer with deep roots in quality systems and industrial operations, now pursuing strategic business leadership at one of India's top B-schools.",
  stats: [
    { value: "2+", label: "Years Industry Experience" },
    { value: "2", label: "Fortune-500 Companies" },
    { value: "1", label: "Premier B-School" }
  ],
  experience: [
    {
      company: "Reliance Industries Ltd",
      role: "Quality Inspection Engineer",
      department: "Incoming Quality Control",
      duration: "[Month Year] – [Month Year]",
      highlights: [
        "Inspected and qualified [X] vendors across [Y] product categories",
        "Reduced incoming defect rate by [X]% through process standardization",
        "Led IQC documentation and audit compliance for ISO [standard]",
        "Collaborated cross-functionally with procurement and production teams"
      ]
    },
    {
      company: "VOLTAS Ltd",
      role: "Quality Inspection Engineer",
      department: "Incoming Quality Control",
      duration: "[Month Year] – [Month Year]",
      highlights: [
        "Managed quality inspection for [X] component types per cycle",
        "Implemented [process/tool] resulting in [Y]% efficiency improvement",
        "Coordinated with supplier teams to resolve [N] critical quality issues",
        "Maintained IQC records and MIS reports for management review"
      ]
    }
  ],
  education: [
    {
      institution: "VIT Vellore",
      degree: "B.Tech — Electrical & Electronics Engineering",
      duration: "[Year] – [Year]",
      status: "Completed",
      highlights: ["CGPA: [X.XX]", "Key coursework: [subjects]"]
    },
    {
      institution: "Xavier Institute of Management, Bhubaneswar",
      shortName: "XIMB",
      degree: "Business Management Program (MBA)",
      duration: "[Year] – Present",
      status: "Currently Enrolled",
      highlights: ["Specialisation: [domain]", "Key coursework: [subjects]"]
    }
  ],
  skills: {
    technical: [
      "Incoming Quality Control (IQC)",
      "Quality Management Systems (QMS)",
      "ISO Standards & Auditing",
      "Electrical & Electronics Engineering",
      "Vendor Qualification",
      "Root Cause Analysis (RCA)"
    ],
    business: [
      "Strategic Management",
      "Operations Management",
      "Business Analytics",
      "Leadership & Communication",
      "Supply Chain Fundamentals",
      "Financial Analysis"
    ]
  },
  story: "Three years on the factory floor taught me that the gap between a good company and a great one is rarely technical — it is strategic. Having diagnosed quality failures at two of India's largest conglomerates, I chose XIMB to sharpen the business lens that turns operational insight into organizational impact.",
  contact: {
    email: "[your.email@domain.com]",
    linkedin: "[https://linkedin.com/in/yourhandle]",
    location: "Bhubaneswar, Odisha, India"
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index', profileData);
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Portfolio website running on http://localhost:${PORT}`);
  });
}

module.exports = app;
