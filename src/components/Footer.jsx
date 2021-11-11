import React from 'react'

import {Link} from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo-1.png'


const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chinh sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid 
                    col={4}
                    mdCol={2}
                    smcol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer_title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer_content">
                            <p>
                                Liên hệ đặt hàng <strong>0854686949</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0854686949</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0854686949</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer_title">
                            Về Lisa
                        </div>
                        <div className="footer_content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }                            
                        </div>
                    </div>
                    <div>
                        <div className="footer_title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer_content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }                            
                        </div>
                    </div>
                    <div className="footer_about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer_logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Lalisa Manoban, tên khai sinh là Pranpriya Manoban, 
                            thường được biết đến với nghệ danh Lisa 
                            là một nữ ca sĩ, người mẫu, vũ công người Thái Lan.
                            là thành viên nhỏ tuổi nhất của nhóm nhạc nữ Hàn Quốc
                            Blackpink do công ty YG Entertainment thành lập 
                            và quản lý.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
