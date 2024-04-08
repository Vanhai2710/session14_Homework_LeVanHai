
/*
- Tạo đối tượng sách:
+ Tạo một đối tượng sách với các thuộc tính như title (tiêu đề), author 
  (tác giả), và publishedYear (năm xuất bản) và isAvailable (trạng thái đã trả sách)

- Quản lý Mượn/Trả sách:
+ Thêm hai phương thức mới cho đối tượng sách: borrow() để đánh dấu 
  sách là đã được mượn và returnBook() để đánh dấu sách là đã được trả.

- Mở rộng đối tượng thư viện:
+ Thêm một phương thức isBookAvailable()  cho đối tượng thư viện để 
  kiểm tra xem một cuốn sách cụ thể có sẵn để mượn hay không.

- Kiểm tra Mượn/Trả sách trong ứng dụng:
+ Tạo một số đối tượng sách và thêm chúng vào thư viện.
+ Gọi phương thức để mượn một cuốn sách, trả cuốn sách và kiểm tra 
  xem cuốn sách có sẵn để mượn hay không.
*/

// -----------------------------------------

class Book {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
      this.isAvailable = true;
    }
  
    showInfo() {
      console.log(`Tiêu đề: ${this.title}`);
      console.log(`Tác giả: ${this.author}`);
      console.log(`Năm xuất bản: ${this.publishedYear}`);
      console.log(`Trạng thái: ${this.isAvailable ? "Đã trả" : "Đã mượn"}`);
    }
  
    borrow() {
      this.isAvailable = false;
    }
  
    returnBook() {
      this.isAvailable = true;
    }
  }
  library.isBookAvailable = function (book) {
    return book.isAvailable;
  };
  const book1 = new Book("Lập trình JavaScript", "John Doe", 2023);
const book2 = new Book("Cấu trúc dữ liệu và giải thuật", "Jane Doe", 2022);

library.addBook(book1);
library.addBook(book2);

// Mượn sách
book1.borrow();

// Kiểm tra trạng thái
console.log(`Trạng thái sách "${book1.title}": ${library.isBookAvailable(book1) ? "Đã trả" : "Đã mượn"}`);

// Trả sách
book1.returnBook();

// Kiểm tra trạng thái
console.log(`Trạng thái sách "${book1.title}": ${library.isBookAvailable(book1) ? "Đã trả" : "Đã mượn"}`);
