
//                    TẠO ĐỐI TƯỢNG DANH SÁCH:
 
// - Tạo một đối tượng sách với các thuộc tính như title (tiêu đề),
//   author (tác giả), và publishedYear (năm xuất bản)

// - Hiển thị thông tin sách:
// +    Viết một phương thức cho đối tượng sách để hiển thị đầy đủ thông tin về sách.

// - Quản lý Thư viện Sách:
// +    Tạo một đối tượng library để lưu trữ nhiều sách.
// +    Thêm một phương thức cho đối tượng thư viện để thêm một sách mới vào thư viện.

// - Hiển thị danh sách sách trong thư viện:
// +    Thêm một phương thức cho đối tượng thư viện để hiển thị danh sách
//      đầy đủ thông tin của tất cả sách trong thư viện.

// - Thêm sách vào thư viện và hiển thị danh sách:
// +    Tạo một số đối tượng sách và thêm chúng vào thư viện.
// +    Gọi phương thức để hiển thị danh sách đầy đủ thông tin 
//      của tất cả sách trong thư viện.

// --------------------------------------


// Định nghĩa đối tượng sách
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Published Year: ${this.publishedYear}`);
        console.log('---------------------');
    }
}

// Định nghĩa đối tượng thư viện sách
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Book ${i + 1}:`);
            this.books[i].displayInfo();
        }
    }
}

// Tạo các đối tượng sách
const book1 = new Book('Đắc nhân tâm', 'Dale Carnegie', 1936);
const book2 = new Book('Nhà giả kim', 'Paulo Coelho', 1988);
const book3 = new Book('Hạt giống tâm hồn', 'Nhiều tác giả', 2002);

// Tạo đối tượng thư viện
const library = new Library();

// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Hiển thị danh sách sách trong thư viện
library.displayBooks();
