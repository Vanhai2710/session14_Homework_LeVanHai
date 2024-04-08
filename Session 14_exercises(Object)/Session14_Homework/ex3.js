/*
- Mở rộng đối tượng danh bạ từ bài tập trước (Bài tập 2) và thêm một phương 
thức mới cho để thực hiện thao tác hiển thị đầy đủ thông tin của mỗi liên lạc
- Gọi phương thức này cho mỗi liên lạc trong danh bạ và hiển thị đầy đủ thông 
tin ra ngoài màn hình
*/

var phoneBook = {
      contact1: {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com",
        displayInfo: function () {
          return {
            name: this.name,
            phone: this.phone,
            email: this.email,
          };
        },
      },
      contact2: {
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com",
        displayInfo: function () {
          return {
            name: this.name,
            phone: this.phone,
            email: this.email,
          };
        },
      },
    };
    
    for (let key in phoneBook) {
      let tmp = phoneBook[key].displayInfo();
    
      for (let index in tmp) {
        console.log(`${index}: ${tmp[index]}`);
      }
      console.log("-------------------------------");
    }
    