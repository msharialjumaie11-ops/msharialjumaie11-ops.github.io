document.addEventListener("DOMContentLoaded", () => {
  const lessons = [
    "Lesson 1: Introduction to HTML",
    "Lesson 2: Styling with CSS",
    "Lesson 3: JavaScript Basics",
    "Lesson 4: DOM Manipulation",
  ];

  const lessonList = document.getElementById("lessonList");
  lessons.forEach((lesson) => {
    const li = document.createElement("li");
    li.textContent = lesson;
    lessonList.appendChild(li);
  });
});
