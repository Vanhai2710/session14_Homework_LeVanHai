
// - Tạo 1 đối tượng con người với các thuộc tính như tên, tuổi, địa chỉ.
// - Try cập và hiển thị các thuộc tính của đối tượng.
// - Thêm 1 thuộc tính ngày sinh vào dối tượng và sau đó 
//   xóa thuộc tính tuổi hiện có. Hiển thị đối tượng sau mỗi bước.


// Bước 1: tạo đối tượng con người.
let identity = {
    name: "Lê văn Hải",
    age: 23,
    address: "Hòa Phước, Đà Nẵng",
};
console.log(identity);

// Bước 2: Truy cập và hiển thị các thuộc tính.
console.log(`name: ${identity.name}`);
console.log(`age: ${identity.age}`);
console.log(`address: ${identity.address}`);

// Bước 3: Thêm thuộc tính nhày sinh.
 identity.dob = "27/10/2001"; // Thêm thuộc tính dob (Date of Birth)
 console.log(identity);

 // Bước 4: xóa thuộc tính tuổi.
 delete identity.age; // xóa thuộc tính age
 console.log(identity); // hiển thị đối tượng identity