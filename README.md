## Thông tin dự án
Dự án là một webapp giúp tra cứu thông tin tướng trong tựa game liên minh huyển thoại, bao gồm thông tướng, kỹ năng, trang phục, tip & trick.
Các chức năng chính của dự án:
- Tra cứu trực tiếp tại trang chủ.
- Tra cứu qua chức năng tìm kiếm.
- Thêm những tướng yêu thích.
- Cùng nhiều tính năng **đang phát triển**.
**Dự án vẫn dang cập nhật**
-----
## Công nghệ sử dụng trong dự án
### Frontend
- Dự án được tạo từ CRA(create-react-app).
- Thư viện CSS sử dụng styled-components.
- Định tuyến của trang sử dụng react-router-dom.
- Lazyloading với react-lazy-load-image-component.
### State management
- State management sử dụng react hook useReducer + useContext.

### Backend
- Serverless nodejs runtime Netlify.
- API của trang được viết từ **function** của Netlify dựa trên Notion API và API được cung cấp từ RiotGame.
- Database: Sử dụng Notion Database.

### CMS
- CMS: notion.
-----
## Cấu trúc thư mục trong dự án
```
lol-wiki
│   README.md
│   netlify.toml (build settings, deploy settings, and environment variables)
│   ...
└───functions (Để viết code Node.js, trong dự án này chỉ dùng để viết API)
└───src
    └───assets (Chứa tài nguyên của trang web)
    └───Commponents
    └───layout
    └───pages
    └───store (State management - sử dụng format giống với redux)
    ...
```
