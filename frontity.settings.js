// import { config } from "dotenv";

const settings = {
  "name": "meochungkhoan",
  "state": {
    "frontity": {
      "url": "https://meochungkhoan.com",
      "title": "Mẹo chứng khoán",
      "description": "Kênh thông tin hướng dẫn về chứng khoán nhanh nhất"
    }
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
              href:"/category/nature/",
              submenu: [
                {
                  name: 'Vietnam',
                  href: '/tag/vietnam/'
                },
                {
                  name: 'Japan',
                  href: '/tag/japan/'
                },
                {
                  name: 'Iceland',
                  href: '/tag/iceland/'
                }
              ]
            },
            {
              name:"Đồ thị",
              href:"/category/travel/"
            },
            {
              name:"PTKT",
              href:"/tag/japan/",
              submenu: [
                {
                  name: 'Hướng dẫn',
                  href: '/tag/vietnam/'
                },
                {
                  name: 'Các định nghĩa',
                  href: '/tag/japan/'
                },
                {
                  name: 'Mô hình',
                  href: '/tag/iceland/'
                }
              ]
            },
            {
              name:"Dành cho người mới",
              href:"/about-us/"
            },
           {
            name:"Tạo tài khoản",
            href:"/about-us/"
           }
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://meochungkhoan.com/dashboard"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;