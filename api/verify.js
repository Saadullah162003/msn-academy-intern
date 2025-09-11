export default function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Certificate ID is required" });
    }

    const certificates = {
      "MSN123": {
        name: "Zain Ali",
        course: "Data Science Fundamentals",
        completionDate: "2025-09-01",
        certificateNumber: "MSN123",
        role: "Student"
      },
      "MSN456": {
        name: "Mehwish Noor",
        course: "Frontend Development",
        completionDate: "2025-08-15",
        certificateNumber: "MSN456",
        role: "Intern"
      },
      "MSN789": {
        name: "Talha Waheed",
        course: "Competitive Programming",
        completionDate: "2025-07-20",
        certificateNumber: "MSN789",
        role: "Competitor"
      },
      "MSN101": {
        name: "Kiran Fatima",
        course: "UI/UX Designing",
        completionDate: "2025-06-10",
        certificateNumber: "MSN101",
        role: "Student"
      },
      "MSN102": {
        name: "Shahbaz Raza",
        course: "Cloud Computing with AWS",
        completionDate: "2025-06-18",
        certificateNumber: "MSN102",
        role: "Intern"
      },
      "MSN103": {
        name: "Adeel Ahmed",
        course: "Artificial Intelligence Essentials",
        completionDate: "2025-05-25",
        certificateNumber: "MSN103",
        role: "Student"
      },
      "MSN104": {
        name: "Nida Hussain",
        course: "ASP.NET Core Development",
        completionDate: "2025-05-12",
        certificateNumber: "MSN104",
        role: "Intern"
      },
      "MSN105": {
        name: "Hassan Javed",
        course: "Graphic Designing Masterclass",
        completionDate: "2025-04-28",
        certificateNumber: "MSN105",
        role: "Student"
      },
      "MSN106": {
        name: "Rabia Khalid",
        course: "Digital Marketing with AI",
        completionDate: "2025-04-05",
        certificateNumber: "MSN106",
        role: "Intern"
      },
      "MSN107": {
        name: "Umar Siddiqui",
        course: "Frontend Engineering with React",
        completionDate: "2025-03-22",
        certificateNumber: "MSN107",
        role: "Student"
      },
      "MSN108": {
        name: "Farah Zahra",
        course: "MERN Stack Development",
        completionDate: "2025-03-08",
        certificateNumber: "MSN108",
        role: "Intern"
      },
      "MSN109": {
        name: "Adnan Tariq",
        course: "WordPress Development",
        completionDate: "2025-02-18",
        certificateNumber: "MSN109",
        role: "Student"
      },
      "MSN110": {
        name: "Huma Aslam",
        course: "Algorithmic Problem Solving",
        completionDate: "2025-01-30",
        certificateNumber: "MSN110",
        role: "Competitor"
      }
    };

    const record = certificates[id];

    if (record) {
      return res.status(200).json(record);
    } else {
      return res.status(404).json({ error: "Certificate not found" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
