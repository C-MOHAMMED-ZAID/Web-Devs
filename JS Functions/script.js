// ATM Withdrawal Function
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (pin !== enteredPin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return balance - amount;
}

document.getElementById('atmForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const balance = parseInt(document.getElementById('balance').value);
    const amount = parseInt(document.getElementById('amount').value);
    const pin = parseInt(document.getElementById('pin').value);
    const enteredPin = parseInt(document.getElementById('enteredPin').value);
    
    const result = atmWithdrawal(balance, amount, pin, enteredPin);
    document.getElementById('atmResult').innerText = result;
});

// Online Shopping Function
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    
    if (orderAmount > 1000) discount = 0.2;
    else if (orderAmount >= 500) discount = 0.1;
    
    const discounted = orderAmount * (1 - discount);
    const shipping = discounted > 50 ? 0 : 10;
    
    return discounted + shipping;
}

document.getElementById('shoppingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const orderAmount = parseInt(document.getElementById('orderAmount').value);
    
    const result = calculateFinalAmount(orderAmount);
    document.getElementById('shoppingResult').innerText = `Final Amount: $${result.toFixed(2)}`;
});

// Student Grading System
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks = Math.min(marks + 5, 100);
    
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

document.getElementById('gradingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const marks = parseInt(document.getElementById('marks').value);
    const attendance = parseInt(document.getElementById('attendance').value);
    
    const result = calculateGrade(marks, attendance);
    document.getElementById('gradingResult').innerText = `Grade: ${result}`;
});

// Smart Traffic Light
function trafficLightControl(density) {
    const durations = {
        "Heavy Traffic": 60,
        "Moderate Traffic": 40,
        "Light Traffic": 20
    };
    return durations[density] || 0;
}

document.getElementById('trafficForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const density = document.getElementById('density').value;
    
    const result = trafficLightControl(density);
    document.getElementById('trafficResult').innerText = `Green Time: ${result} seconds`;
});

// Movie Ticket Pricing
function calculateTicketPrice(age, showTime) {
    let discount = 0;
    const basePrice = 12;
    
    if (showTime < 17) discount = 0.2;
    if (age > 60) discount = Math.max(discount, 0.3);
    if (age < 12) discount = Math.max(discount, 0.4);
    
    return basePrice * (1 - discount);
}

document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const showTime = parseInt(document.getElementById('showTime').value);
    
    const result = calculateTicketPrice(age, showTime);
    document.getElementById('movieResult').innerText = `Ticket Price: $${result.toFixed(2)}`;
});

// Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && 
           experience >= 2 && 
           qualification === "Bachelor's Degree";
}

document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const age = parseInt(document.getElementById('jobAge').value);
    const experience = parseInt(document.getElementById('experience').value);
    const qualification = document.getElementById('qualification').value;
    
    const result = isEligibleForJob(age, experience, qualification);
    document.getElementById('jobResult').innerText = `Eligible: ${result ? "Yes" : "No"}`;
});

// E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        return orderAmount * 0.9;
    }
    if (couponCode === "FREESHIP" && orderAmount > 200) {
        return orderAmount;
    }
    return orderAmount;
}

document.getElementById('couponForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const orderAmount = parseInt(document.getElementById('orderAmountCoupon').value);
    const couponCode = document.getElementById('couponCode').value;
    
    const result = applyCoupon(orderAmount, couponCode);
    document.getElementById('couponResult').innerText = `Final Price: $${result.toFixed(2)}`;
});

// Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (wantsDietPlan) return "VIP ($80/month)";
    if (wantsTrainer) return "Premium ($50/month)";
    return "Basic ($20/month)";
}

document.getElementById('fitnessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const planType = document.getElementById('planType').value;
    const wantsTrainer = document.getElementById('wantsTrainer').checked;
    const wantsDietPlan = document.getElementById('wantsDietPlan').checked;
    
    const result = choosePlan(planType, wantsTrainer, wantsDietPlan);
    document.getElementById('fitnessResult').innerText = `Recommended Plan: ${result}`;
});

// Electricity Bill Calculation
function calculateElectricityBill(units, timeOfDay) {
    let rate;
    
    if (units < 100) rate = 5;
    else if (units <= 300) rate = 4;
    else rate = 3;
    
    let total = units * rate;
    if (timeOfDay === "Peak hours") total *= 1.1;
    
    return total;
}

document.getElementById('electricityForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const units = parseInt(document.getElementById('units').value);
    const timeOfDay = document.getElementById('timeOfDay').value;
    
    const result = calculateElectricityBill(units, timeOfDay);
    document.getElementById('electricityResult').innerText = `Total Bill: $${result.toFixed(2)}`;
});

// Flight Ticket Booking
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let total = 300;
    
    // Class upgrades
    if (classType === "Business") total += 200;
    if (classType === "First") total += 500;
    
    // Luggage charges
    const extraWeight = Math.max(luggageWeight - 20, 0);
    total += Math.ceil(extraWeight / 10) * 50;
    
    // Apply best discount
    let discount = 0;
    if (isStudent) discount = 0.15;
    if (isSenior) discount = Math.max(discount, 0.10);
    
    return total * (1 - discount);
}

document.getElementById('flightForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const classType = document.getElementById('classType').value;
    const luggageWeight = parseInt(document.getElementById('luggageWeight').value);
    const isStudent = document.getElementById('isStudent').checked;
    const isSenior = document.getElementById('isSenior').checked;
    
    const result = calculateFlightFare(classType, luggageWeight, isStudent, isSenior);
    document.getElementById('flightResult').innerText = `Final Fare: $${result.toFixed(2)}`;
});
