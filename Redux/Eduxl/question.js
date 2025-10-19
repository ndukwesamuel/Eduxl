

const subjectArray = async () => {
   try {
     const res = await fetch(
       "https://eduxlbackend.onrender.com/api/getSubjectQuestions",
       {
         method: "GET",
       }
     );

     // Convert the response to JSON
     const data = await res.json();

     // Log the actual JSON data
     return data.data[0].questionSets[0].questions;
   } catch (error) {
     console.error("Error fetching data:", error);
   }
    
}

export default subjectArray;

