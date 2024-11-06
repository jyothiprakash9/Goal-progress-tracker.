export function updateCharts() {
    const ctxShort = document.getElementById("shortTermChart").getContext("2d");
    const ctxLong = document.getElementById("longTermChart").getContext("2d");

    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    const shortTermGoals = goals.filter(g => g.type === "short-term");
    const longTermGoals = goals.filter(g => g.type === "long-term");

    const shortTermData = shortTermGoals.map(g => g.progress / g.days * 100);
    const longTermData = longTermGoals.map(g => g.progress / g.days * 100);

    new Chart(ctxShort, {
        type: "pie",
        data: {
            labels: ["Progress", "Remaining"],
            datasets: [{ data: [shortTermData[0] || 0, 100 - (shortTermData[0] || 0)], backgroundColor: ["#4caf50", "#f44336"] }]
        }
    });

    new Chart(ctxLong, {
        type: "pie",
        data: {
            labels: ["Progress", "Remaining"],
            datasets: [{ data: [longTermData[0] || 0, 100 - (longTermData[0] || 0)], backgroundColor: ["#4caf50", "#f44336"] }]
        }
    });
}
