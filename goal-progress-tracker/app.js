import { handleAuth } from "./components/auth.js";
import { toggleGoalForm, addGoal, updateGoalProgress } from "./components/goal.js";

document.addEventListener("DOMContentLoaded", () => {
    handleAuth();
    toggleGoalForm();
    addGoal();
    updateGoalProgress();
});
