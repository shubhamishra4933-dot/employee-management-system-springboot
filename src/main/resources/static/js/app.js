
const API_BASE = "/api";
const AUTH_BASE = "/auth";

function getToken() {
    return localStorage.getItem("token");
}

function setToken(token) {
    localStorage.setItem("token", token);
}

function removeToken() {
    localStorage.removeItem("token");
}


function isLoggedIn() {
    return getToken() !== null;
}

/* Redirect if not logged in */
function protectPage() {
    if (!isLoggedIn()) {
        window.location.href = "/login.html";
    }
}

async function apiCall(url, method = "GET", body = null) {

    const headers = {
        "Content-Type": "application/json"
    };

    const token = getToken();
    if (token) {
        headers["Authorization"] = "Bearer " + token;
    }

    const options = {
        method: method,
        headers: headers
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error("API Error: " + response.status);
    }

    return response.json();
}

async function login(username, password) {

    const data = {
        username: username,
        password: password
    };

    try {
        const result = await apiCall(`${AUTH_BASE}/login`, "POST", data);
        setToken(result.token);
        window.location.href = "/dashboard.html";
    } catch (error) {
        console.error(error);
        alert("Login failed!");
    }
}

function logout() {
    removeToken();
    window.location.href = "/login.html";
}

// Get all employees
async function getEmployees() {
    return await apiCall(`${API_BASE}/employees`);
}

// Add employee
async function addEmployee(employee) {
    return await apiCall(`${API_BASE}/employees`, "POST", employee);
}

// Delete employee
async function deleteEmployee(id) {
    return await apiCall(`${API_BASE}/employees/${id}`, "DELETE");
}

// Update employee
async function updateEmployee(id, employee) {
    return await apiCall(`${API_BASE}/employees/${id}`, "PUT", employee);
}

// Get employee by ID
async function getEmployeeById(id) {
    return await apiCall(`${API_BASE}/employees/${id}`);
}

function searchData(data, keyword) {
    keyword = keyword.toLowerCase();

    return data.filter(item =>
        item.name.toLowerCase().includes(keyword) ||
        item.department.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword)
    );
}

function paginate(data, page, size) {
    const start = (page - 1) * size;
    const end = start + size;
    return data.slice(start, end);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("EMS App Loaded");
});
