import { updateCharts } from "./progress.js";

export function toggleGoalForm() {
    const goalForm = document.getElementById("goal-entry");
    goalForm.style.display = goalForm.style.display === "none" ? "block" : "none";
}

export function addGoal() {
    const description = document.getElementById("goal-desc").value;
    const days = parseInt(document.getElementById("goal-days").value);
    const type = document.getElementById("goal-type").value;

    if (!description || !days) {
        alert("Please fill out all fields.");
        return;
    }

    const isShortTerm = type === "short-term";
    const validDays = isShortTerm ? days >= 7 && days <= 45 : days >= 45;

    if (!validDays) {
        alert(`For ${type}, days should be within the required range.`);
        return;
    }

    const goal = { description, days, type, progress: 0 };
    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    goals.push(goal);
    localStorage.setItem("goals", JSON.stringify(goals));

    alert("Goal added!");
    updateCharts();
}

export function updateGoalProgress() {
    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    goals.forEach(goal => goal.progress += 10);  // Example increment for testing
    localStorage.setItem("goals", JSON.stringify(goals));
    updateCharts();
}
