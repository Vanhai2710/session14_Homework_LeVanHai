
// Tạo đối tượng hóa đơn(orders):
// - Tạo một object đại diện cho một hóa đơn với các thuộc tính như
//   số hóa đơn, ngày tạo, và tổng giá trị.

// Quản Lý Danh Sách Hóa Đơn:
// - Tạo một danh sách hóa đơn (mảng các objects).
// - Viết hàm để thêm hóa đơn mới vào danh sách.
// - Viết hàm để hiển thị thông tin đầy đủ của tất cả các hóa đơn.

// Tính Tổng Giá Trị Hóa Đơn:
// - Viết hàm tính tổng giá trị của tất cả hóa đơn trong danh sách.

// Xây dựng chương trình với các lựa chọn:
// - Nếu chọn 1: Yêu cầu người dùng nhập dữ liệu cho đối tượng Hóa đơn
// - Nếu chọn 2: Hiển thị danh sách hóa đơn
// - Nếu chọn 3: Tính tổng giá trị của tất cả hóa đơn và hiển thị ra ngoài màn hình
// - Nếu chọn 4: Thoát chương trình

// -----------------------------------------------

// Định nghĩa đối tượng hóa đơn
class Order {
    constructor(orderNumber, creationDate, totalValue) {
        this.orderNumber = orderNumber;
        this.creationDate = creationDate;
        this.totalValue = totalValue;
    }
}

// Mảng chứa danh sách hóa đơn
let orders = [];

// Hàm thêm mới hóa đơn vào mảng
function addOrder() {
    const orderNumber = prompt("Enter order number:"); // Nhập mã đơn hàng
    const creationDate = prompt("Enter creation date"); // Nhập ngày tạo
    const totalValue = parseFloat(prompt("Enter total value:")); // Nhập tổng giá trị
    
    const order = new Order(orderNumber, creationDate, totalValue);
    orders.push(order);
}

// Hàm in ra danh sách hóa đơn
function printOrders() {
    console.log("List of orders:");
    orders.forEach(order => {
        console.log(`Order Number: ${order.orderNumber}, Creation Date: ${order.creationDate}, Total Value: ${order.totalValue}`);
    });
}

// Hàm tính tổng giá trị của tất cả hóa đơn
function calculateTotalValue() {
    let total = 0;
    orders.forEach(order => {
        total += order.totalValue;
    });
    console.log(`Total value of all orders: ${total}`);
}

// Hàm chính
function main() {
    let choice;
    do {
        choice = prompt(`Choose an option: 
        1. Add a new order
        2. Print list of orders 
        3. Calculate total value of all orders
        4. Exit`);

        switch (choice) {
            case '1':
                addOrder();
                break;
            case '2':
                printOrders();
                break;
            case '3':
                calculateTotalValue();
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