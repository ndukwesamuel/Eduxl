// subjectYearList.js
const subjectYearList = async (subjectName) => {
  try {
    const res = await fetch(
      "https://eduxlbackend.onrender.com/api/getSubjectQuestions",
      { method: "GET" }
    );

    const data = await res.json();
    if (!data?.data) return [];

    // Find the subject object in the response
    const subject = data.data.find(
      (item) => item.subject.toLowerCase() === subjectName.toLowerCase()
    );

    if (!subject) return [];

    // Extract years and number of questions under each year
    const yearList = subject.questionSets.map((set) => ({
      year: set.year,
      noOfQuestions: set.questions.length,
    }));

    return yearList;
  } catch (error) {
    console.error("Error fetching subject years:", error);
    return [];
  }
};

export default subjectYearList;
