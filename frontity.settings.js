const settings = {
  "name": "meochungkhoan",
  "state": {
    "frontity": {
      "url": "https://meochungkhoan.com",
      "title": "Mẹo chứng khoán",
      "description": "Kênh thông tin hướng dẫn về chứng khoán nhanh nhất"
    },
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            {
              name:"Trang chủ",
              href:"/"
            },
            {
              name:"Tin tức",
              href:"/tin-tuc/",
              submenu: [
                {
                  name: 'Doanh nghiệp',
                  href: '/tin-tuc/doanh-nghiep/'
                },
                {
                  name: 'Bất động sản',
                  href: '/tin-tuc/bat-dong-san/'
                },
                {
                  name: 'Dự thảo',
                  href: '/tin-tuc/du-thao/'
                },
                {
                  name: 'Hàng hóa',
                  href: '/tin-tuc/hang-hoa/'
                }
              ]
            },
            {
              name:"Đồ thị",
              href:"/do-thi/"
            },
            {
              name:"PTKT",
              href:"/phan-tich-ky-thuat/",
              submenu: [
                {
                  name: 'Hướng dẫn',
                  href: '/phan-tich-ky-thuat/huong-dan/'
                },
                {
                  name: 'Các định nghĩa',
                  href: '/phan-tich-ky-thuat/dinh-nghia'
                },
                {
                  name: 'Mô hình',
                  href: '/phan-tich-ky-thuat/mo-hinh/'
                }
              ]
            },
            {
              name:"Dành cho người mới",
              href:"/danh-cho-nguoi-moi/"
            },
           {
            name:"Tạo tài khoản",
            href:"/tao-tai-khoan/"
           }
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://meochungkhoan.com/dashboard",
          "postTypes": [
            {
              type: "phan-tich",
              endpoint: "phan_tich",
              archive: "/phan-tich"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;