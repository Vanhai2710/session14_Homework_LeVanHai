
// Định nghĩa đối tượng công việc
class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

// Mảng chứa danh sách công việc
let jobs = [];

// Hàm thêm mới công việc vào mảng
function addJob() {
    const id = prompt("Enter job ID:");
    const title = prompt("Enter job title:");
    const description = prompt("Enter job description:");
    const completed = prompt("Is job completed? (true/false):");

    const job = new Job(id, title, description, completed === 'true');
    jobs.push(job);
}

// Hàm in ra danh sách công việc
function printJobs() {
    console.log("List of jobs:");
    jobs.forEach(job => {
        console.log(`ID: ${job.id}, Title: ${job.title}, Description: ${job.description}, Completed: ${job.completed}`);
    });
}

// Hàm tìm kiếm công việc theo ID
function findJobById() {
    const idToFind = prompt("Enter job ID to find:");
    const foundJob = jobs.find(job => job.id === idToFind);

    if (foundJob) {
        console.log(`Job found - ID: ${foundJob.id}, Title: ${foundJob.title}, Description: ${foundJob.description}, Completed: ${foundJob.completed}`);
    } else {
        console.log("Job not found.");
    }
}

// Hàm chính
function main() {
    let choice;
    do {
        choice = prompt(`Choose an option:
        1. Add a new job
        2. Print list of jobs
        3. Find job by ID
        4. Exit`);

        switch (choice) {
            case '1':
                addJob();
                break;
            case '2':
                printJobs();
                break;
            case '3':
                findJobById();
                break;
            case '4':
                console.log("Exiting program...");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== '4');
}

// Chạy chương trình
main();
