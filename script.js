// Search function for filtering recycling drop-off centers
function searchCenters() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('center-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Interactive Quiz Logic
function checkItem(itemType) {
    let result = document.getElementById('quizResult');
    if (itemType === 'battery') {
        result.innerHTML = "⚠️ <strong>E-Waste!</strong> Never throw batteries in standard bins. They can explode or leak toxic chemicals.";
        result.style.color = "#d32f2f";
    } else if (itemType === 'phone') {
        result.innerHTML = "⚠️ <strong>E-Waste!</strong> Smartphones contain precious metals and hazardous parts. Take them to an e-waste drop point.";
        result.style.color = "#d32f2f";
    } else if (itemType === 'cardboard') {
        result.innerHTML = "✅ <strong>Standard Recycling!</strong> Cardboard is paper waste, not electronic waste.";
        result.style.color = "#388e3c";
    }
}

// Simple Pledge Counter Logic
let pledges = 142;
function addPledge() {
    pledges++;
    document.getElementById('pledgeCount').innerText = pledges;
    alert("Thank you for pledging to protect the environment!");
}
