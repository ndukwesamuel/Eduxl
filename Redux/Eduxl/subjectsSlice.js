const subjectList = async () => {
  try {
    const res = await fetch(
      "https://eduxlbackend.onrender.com/api/getSubjectQuestions",
      { method: "GET" }
    );

    // Check for HTTP errors
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const subjectDataList = [];

    if (data?.data && Array.isArray(data.data)) {
      data.data.forEach((item) => {
        if (item.subject) {
          let totalQuestions = 0;

          // Safely iterate over questionSets if it exists
          if (Array.isArray(item.questionSets)) {
            item.questionSets.forEach((set) => {
              if (Array.isArray(set.questions)) {
                totalQuestions += set.questions.length;
              }
            });
          }

          subjectDataList.push({
            subject: item.subject,
            NoOfQuestions: totalQuestions,
          });
        }
      });
    }

    return subjectDataList;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return empty array to prevent undefined errors
  }
};

export default subjectList;
