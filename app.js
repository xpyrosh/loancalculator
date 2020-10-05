// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate results
function calculateResults(e) {
    // UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;

    // Compute Monthly Payments
    const x = Math.pow(1 + calculatedInterest, calculatePayments);
    const montly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(montly)){
        monthlyPayment.value = montly.toFixed(2);
        totalPayment.value = (montly * calculatePayments).toFixed(2);
        totalInterest.value = ((montly * calculatePayments) - principal).toFixed(2);
    }else{
        showError('Please check your numbers');
    }

    e.preventDefault();
}

// Show Error
function showError(error){
    const errorDiv = document.createElement('div');

    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);
}