export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  // Certificates data (keys = MSN IDs)
  const certificates = {
    "MSN123": {
      name: "Ali Khan",
      course: "Python Programming",
      completionDate: "2025-09-01",
      certificateNumber: "MSN123",
      role: "Student"
    },
    "MSN456": {
      name: "Sara Ahmed",
      course: "Web Development",
      completionDate: "2025-08-15",
      certificateNumber: "MSN456",
      role: "Intern"
    },
    "MSN789": {
      name: "Hamza Ali",
      course: "Competitive Programming",
      completionDate: "2025-07-20",
      certificateNumber: "MSN789",
      role: "Competitor"
    }
  };

  const record = certificates[id];
  if (record) {
    return res.status(200).json(record);
  } else {
    return res.status(404).json({ error: "Certificate not found" });
  }
}
