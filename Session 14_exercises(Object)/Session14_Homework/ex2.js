
// - Tạo một đối tượng đại diện cho một danh bạ điện thoại với các liên lạc.
//   Mỗi liên lạc có thể có tên, số điện thoại, và địa chỉ email.
// - Sử dụng một vòng lặp để duyệt qua tất cả các liên lạc trong danh bạ và
//   hiển thị thông tin của mỗi liên lạc.


// Bước 1: Tạo đối tượng danh bạ
let phoneBook = {
    contact1:
    {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com"
    },
    contact2:
    {
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com"
    },
};

// Bước 2: Duyệt qua danh bạ và hiển thị thông tin.
for (let contactName in phoneBook) {
    let contact = phoneBook[contactName];
    console.log(`name: ${contact.name}`);
    console.log(`phone: ${contact.phone}`);
    console.log(`email: ${contact.email}`);
    console.log("--------------------------");
}
